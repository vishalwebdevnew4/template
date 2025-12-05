#!/usr/bin/env python3
"""
Script to clone all XHTML Base template sites from DexignZone
Downloads HTML, CSS, JS, and images for each template
"""

import json
import os
import requests
from bs4 import BeautifulSoup
from urllib.parse import urljoin, urlparse, urlunparse
import time
from pathlib import Path
import re

# Load template links
TEMPLATES_FILE = 'dexignzone_template_links.json'
OUTPUT_DIR = 'cloned-xhtml-templates'

def load_templates():
    """Load template data from JSON file"""
    with open(TEMPLATES_FILE, 'r', encoding='utf-8') as f:
        data = json.load(f)
    return data.get('comprehensive_templates', [])

def get_page_content(url, retries=3):
    """Fetch page content with retries"""
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
    }
    
    for attempt in range(retries):
        try:
            response = requests.get(url, headers=headers, timeout=30, allow_redirects=True)
            response.raise_for_status()
            return response.text, response.url  # Return final URL after redirects
        except Exception as e:
            if attempt < retries - 1:
                time.sleep(2 ** attempt)  # Exponential backoff
            else:
                print(f"  ❌ Failed to fetch {url}: {e}")
                return None, None
    
    return None, None

def download_file(url, filepath, retries=3):
    """Download a file to the specified path"""
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
    }
    
    # Skip Google Fonts API URLs (not actual files)
    if 'fonts.googleapis.com' in url and '/css2' in url:
        return False  # Skip Google Fonts API URLs
    
    for attempt in range(retries):
        try:
            response = requests.get(url, headers=headers, timeout=30, stream=True, allow_redirects=True)
            response.raise_for_status()
            
            # Ensure directory exists
            os.makedirs(os.path.dirname(filepath), exist_ok=True)
            
            # Download file
            with open(filepath, 'wb') as f:
                for chunk in response.iter_content(chunk_size=8192):
                    if chunk:
                        f.write(chunk)
            
            # Verify file was written
            if os.path.exists(filepath) and os.path.getsize(filepath) > 0:
                return True
            else:
                return False
        except requests.exceptions.RequestException as e:
            if attempt < retries - 1:
                time.sleep(1)
            else:
                # Only print error for important files (CSS, main JS)
                if any(ext in url.lower() for ext in ['.css', 'style.css', 'main.js', 'app.js']):
                    pass  # Will be handled by retry logic
                return False
        except Exception as e:
            if attempt < retries - 1:
                time.sleep(1)
            else:
                return False
    
    return False

def extract_assets(html_content, base_url):
    """Extract all asset URLs (CSS, JS, images) from HTML"""
    soup = BeautifulSoup(html_content, 'html.parser')
    assets = {
        'css': [],
        'js': [],
        'images': [],
        'fonts': [],
        'other': []
    }
    
    # Extract CSS files (including CDN/external links)
    for link in soup.find_all('link', rel='stylesheet'):
        href = link.get('href')
        if href:
            # Handle both relative and absolute URLs
            if href.startswith('http://') or href.startswith('https://'):
                # External/CDN URL - use as-is
                full_url = href
            else:
                # Relative URL - join with base
                full_url = urljoin(base_url, href)
            assets['css'].append(full_url)
    
    # Extract JS files
    for script in soup.find_all('script', src=True):
        src = script.get('src')
        if src:
            full_url = urljoin(base_url, src)
            assets['js'].append(full_url)
    
    # Extract images
    for img in soup.find_all('img', src=True):
        src = img.get('src')
        if src:
            full_url = urljoin(base_url, src)
            assets['images'].append(full_url)
    
    # Extract background images from inline styles
    for element in soup.find_all(style=True):
        style = element.get('style', '')
        bg_matches = re.findall(r'url\(["\']?([^"\']+)["\']?\)', style)
        for match in bg_matches:
            full_url = urljoin(base_url, match)
            if any(ext in full_url.lower() for ext in ['.jpg', '.jpeg', '.png', '.gif', '.svg', '.webp']):
                assets['images'].append(full_url)
    
    # Extract fonts
    for link in soup.find_all('link', rel=['preload', 'prefetch']):
        href = link.get('href')
        if href and any(ext in href.lower() for ext in ['.woff', '.woff2', '.ttf', '.otf', '.eot']):
            full_url = urljoin(base_url, href)
            assets['fonts'].append(full_url)
    
    # Remove duplicates
    for key in assets:
        assets[key] = list(set(assets[key]))
    
    return assets

def get_local_path(url, base_url, template_dir):
    """Convert URL to local file path"""
    parsed = urlparse(url)
    base_parsed = urlparse(base_url)
    
    # If same domain, create relative path
    if parsed.netloc == base_parsed.netloc or not parsed.netloc:
        path = parsed.path
        if path.startswith('/'):
            path = path[1:]
        return os.path.join(template_dir, path)
    else:
        # External resource (CDN) - save in external folder with proper structure
        domain = parsed.netloc.replace('.', '_')
        path = parsed.path.lstrip('/')
        
        # Handle Bootstrap CDN paths specially
        if 'cdn.jsdelivr.net' in url or 'cdnjs.cloudflare.com' in url or 'unpkg.com' in url:
            # Extract library name and version from path
            # e.g., /npm/bootstrap@5.3.8/dist/css/bootstrap.min.css
            path_parts = path.split('/')
            if len(path_parts) > 1:
                # Create a cleaner structure: external/cdn/library/file
                lib_name = path_parts[1] if len(path_parts) > 1 else 'unknown'
                filename = path_parts[-1] if path_parts else 'file.css'
                return os.path.join(template_dir, 'external', 'cdn', lib_name, filename)
        
        return os.path.join(template_dir, 'external', domain, path)

def update_html_paths(html_content, base_url, template_dir):
    """Update asset paths in HTML to point to local files"""
    soup = BeautifulSoup(html_content, 'html.parser')
    
    # Update CSS links (including CDN/external)
    for link in soup.find_all('link', rel='stylesheet'):
        href = link.get('href')
        if href:
            # Handle both relative and absolute URLs
            if href.startswith('http://') or href.startswith('https://'):
                # External/CDN URL
                full_url = href
            else:
                # Relative URL
                full_url = urljoin(base_url, href)
            
            local_path = get_local_path(full_url, base_url, template_dir)
            # Make path relative to template directory
            rel_path = os.path.relpath(local_path, template_dir)
            link['href'] = rel_path
            
            # Remove integrity and crossorigin for local files
            if 'integrity' in link.attrs:
                del link['integrity']
            if 'crossorigin' in link.attrs:
                del link['crossorigin']
    
    # Update JS scripts
    for script in soup.find_all('script', src=True):
        src = script.get('src')
        if src:
            full_url = urljoin(base_url, src)
            local_path = get_local_path(full_url, base_url, template_dir)
            rel_path = os.path.relpath(local_path, template_dir)
            script['src'] = rel_path
    
    # Update images
    for img in soup.find_all('img', src=True):
        src = img.get('src')
        if src:
            full_url = urljoin(base_url, src)
            local_path = get_local_path(full_url, base_url, template_dir)
            rel_path = os.path.relpath(local_path, template_dir)
            img['src'] = rel_path
    
    return str(soup)

def extract_all_html_links(html_content, base_url, xhtml_base):
    """Extract all HTML page links from any HTML content"""
    inner_pages = []
    seen_urls = set()
    
    if not html_content:
        return inner_pages
    
    soup = BeautifulSoup(html_content, 'html.parser')
    
    # Find ALL links in the page
    for link in soup.find_all('a', href=True):
        href = link.get('href', '')
        if not href or href.startswith('javascript:') or href.startswith('mailto:') or href.startswith('tel:'):
            continue
        
        # Skip external links
        if href.startswith('http') and xhtml_base not in href:
            continue
        
        # Handle different link formats
        page_path = None
        
        # Absolute xhtml links
        if '/xhtml/' in href:
            page_path = href.split('/xhtml/')[-1]
        # Relative xhtml links
        elif href.startswith('xhtml/'):
            page_path = href.replace('xhtml/', '')
        # Relative HTML links
        elif href.endswith('.html') and not href.startswith('http'):
            page_path = href.split('/')[-1]
        # Full URL to xhtml base
        elif xhtml_base in href and href.endswith('.html'):
            page_path = href.split('/')[-1]
        
        if page_path:
            # Clean up the path
            page_path = page_path.split('?')[0].split('#')[0]  # Remove query params and fragments
            
            if page_path.endswith('.html'):
                full_url = urljoin(xhtml_base, page_path)
                
                if full_url not in seen_urls:
                    seen_urls.add(full_url)
                    inner_pages.append({
                        'url': full_url,
                        'filename': page_path,
                        'name': link.get_text(strip=True) or page_path
                    })
    
    return inner_pages

def discover_inner_pages(welcome_url, xhtml_base):
    """Discover all inner pages from welcome page, headers, footers, and navigation"""
    inner_pages = []
    seen_urls = set()
    
    # 1. Try to get welcome page
    print(f"      Checking welcome page...")
    html_content, _ = get_page_content(welcome_url)
    if html_content:
        pages = extract_all_html_links(html_content, welcome_url, xhtml_base)
        for page in pages:
            if page['url'] not in seen_urls:
                seen_urls.add(page['url'])
                inner_pages.append(page)
        print(f"      Found {len(pages)} links in welcome page")
    
    # 2. Check index.html for navigation, header, footer links
    index_url = f"{xhtml_base}index.html"
    print(f"      Checking index.html for links...")
    html_content, _ = get_page_content(index_url)
    if html_content:
        soup = BeautifulSoup(html_content, 'html.parser')
        
        # Extract from all links
        pages = extract_all_html_links(html_content, index_url, xhtml_base)
        for page in pages:
            if page['url'] not in seen_urls:
                seen_urls.add(page['url'])
                inner_pages.append(page)
        
        # Specifically check header/nav elements
        nav_elements = soup.find_all(['nav', 'header', 'ul'], class_=re.compile(r'nav|menu|header', re.I))
        for nav in nav_elements:
            nav_pages = extract_all_html_links(str(nav), index_url, xhtml_base)
            for page in nav_pages:
                if page['url'] not in seen_urls:
                    seen_urls.add(page['url'])
                    inner_pages.append(page)
        
        # Check footer
        footer = soup.find('footer')
        if footer:
            footer_pages = extract_all_html_links(str(footer), index_url, xhtml_base)
            for page in footer_pages:
                if page['url'] not in seen_urls:
                    seen_urls.add(page['url'])
                    inner_pages.append(page)
        
        print(f"      Found {len(inner_pages)} total links from index.html")
    
    # 3. Recursively check discovered pages for more links (limited depth)
    print(f"      Checking discovered pages for additional links...")
    new_pages_found = True
    depth = 0
    max_depth = 2  # Limit recursion depth
    
    while new_pages_found and depth < max_depth:
        new_pages_found = False
        depth += 1
        current_count = len(inner_pages)
        
        # Check up to 10 random pages for more links
        pages_to_check = inner_pages[:min(10, len(inner_pages))]
        for page in pages_to_check:
            html_content, _ = get_page_content(page['url'])
            if html_content:
                pages = extract_all_html_links(html_content, page['url'], xhtml_base)
                for new_page in pages:
                    if new_page['url'] not in seen_urls:
                        seen_urls.add(new_page['url'])
                        inner_pages.append(new_page)
                        new_pages_found = True
        
        if new_pages_found:
            print(f"      Depth {depth}: Found {len(inner_pages) - current_count} additional pages")
    
    return inner_pages

def clone_template(template):
    """Clone a single template"""
    template_name = template['name']
    xhtml_base = template['xhtml_base']
    welcome_url = template.get('welcome_url', '')
    
    print(f"\n📦 Cloning: {template_name}")
    print(f"   URL: {xhtml_base}")
    
    template_dir = os.path.join(OUTPUT_DIR, template_name)
    os.makedirs(template_dir, exist_ok=True)
    
    # Discover inner pages
    print(f"   Discovering inner pages...")
    inner_pages = discover_inner_pages(welcome_url, xhtml_base)
    print(f"   Found {len(inner_pages)} inner pages")
    
    # Get index page
    index_url = template.get('xhtml_index', f"{xhtml_base}index.html")
    print(f"   Fetching index page...")
    html_content, final_url = get_page_content(index_url)
    
    if not html_content:
        print(f"   ⚠️  Could not fetch index page, skipping...")
        return False
    
    # Update base_url if redirected
    if final_url and final_url != index_url:
        base_url = final_url.rsplit('/', 1)[0] + '/'
    else:
        base_url = xhtml_base
    
    # Collect all pages to clone (index + inner pages)
    pages_to_clone = [
        {'url': index_url, 'filename': 'index.html', 'name': 'Index'}
    ]
    pages_to_clone.extend(inner_pages)
    
    print(f"   Cloning {len(pages_to_clone)} pages total...")
    
    # Track all assets across all pages
    all_assets = {
        'css': set(),
        'js': set(),
        'images': set(),
        'fonts': set()
    }
    
    cloned_pages = []
    
    # Clone each page
    for page_idx, page in enumerate(pages_to_clone, 1):
        print(f"   [{page_idx}/{len(pages_to_clone)}] Cloning: {page['filename']}")
        
        html_content, final_url = get_page_content(page['url'])
        if not html_content:
            print(f"      ⚠️  Could not fetch {page['filename']}, skipping...")
            continue
        
        # Extract assets
        assets = extract_assets(html_content, base_url)
        
        # Add to all_assets
        for key in ['css', 'js', 'images', 'fonts']:
            all_assets[key].update(assets[key])
        
        # Save page HTML
        page_path = os.path.join(template_dir, page['filename'])
        os.makedirs(os.path.dirname(page_path), exist_ok=True)
        
        # Update HTML paths
        updated_html = update_html_paths(html_content, base_url, template_dir)
        
        with open(page_path, 'w', encoding='utf-8') as f:
            f.write(updated_html)
        
        # Save original HTML
        original_path = os.path.join(template_dir, 'original-' + page['filename'])
        with open(original_path, 'w', encoding='utf-8') as f:
            f.write(html_content)
        
        cloned_pages.append(page['filename'])
        print(f"      ✓ Saved: {page['filename']}")
    
    # Convert sets to lists for assets
    all_assets = {k: list(v) for k, v in all_assets.items()}
    total_assets = sum(len(all_assets[key]) for key in all_assets)
    
    print(f"   Downloading {total_assets} total assets...")
    
    # Download CSS files (CRITICAL - must download all)
    print(f"   Downloading CSS files ({len(all_assets['css'])} files)...")
    css_downloaded = 0
    css_failed = []
    for i, css_url in enumerate(all_assets['css'], 1):
        local_path = get_local_path(css_url, base_url, template_dir)
        if download_file(css_url, local_path):
            # Verify file was actually downloaded
            if os.path.exists(local_path) and os.path.getsize(local_path) > 0:
                css_downloaded += 1
                if i <= 10 or i % 10 == 0:  # Show progress for first 10 and every 10th
                    print(f"      ✓ CSS {i}/{len(all_assets['css'])}: {os.path.basename(local_path)}")
            else:
                css_failed.append(css_url)
                print(f"      ⚠️  CSS {i}/{len(all_assets['css'])}: Failed to download {os.path.basename(local_path)}")
        else:
            css_failed.append(css_url)
            print(f"      ⚠️  CSS {i}/{len(all_assets['css'])}: Failed {os.path.basename(local_path)}")
        time.sleep(0.05)
    
    # Retry failed CSS files
    if css_failed:
        print(f"   Retrying {len(css_failed)} failed CSS files...")
        for css_url in css_failed[:10]:  # Retry up to 10 failed files
            local_path = get_local_path(css_url, base_url, template_dir)
            if download_file(css_url, local_path):
                if os.path.exists(local_path) and os.path.getsize(local_path) > 0:
                    css_downloaded += 1
                    print(f"      ✓ Retry successful: {os.path.basename(local_path)}")
            time.sleep(0.1)
    
    print(f"      ✓ Downloaded {css_downloaded}/{len(all_assets['css'])} CSS files")
    if css_downloaded < len(all_assets['css']):
        print(f"      ⚠️  Warning: {len(all_assets['css']) - css_downloaded} CSS files failed to download")
    
    # Download JS files
    print(f"   Downloading JS files ({len(all_assets['js'])} files)...")
    js_downloaded = 0
    for i, js_url in enumerate(all_assets['js'], 1):
        local_path = get_local_path(js_url, base_url, template_dir)
        if download_file(js_url, local_path):
            js_downloaded += 1
            if i <= 10 or i % 10 == 0:
                print(f"      ✓ JS {i}/{len(all_assets['js'])}: {os.path.basename(local_path)}")
        time.sleep(0.05)
    print(f"      ✓ Downloaded {js_downloaded}/{len(all_assets['js'])} JS files")
    
    # Download images (limit to 200 per template to avoid too many)
    print(f"   Downloading images ({min(200, len(all_assets['images']))} of {len(all_assets['images'])} files)...")
    img_downloaded = 0
    for i, img_url in enumerate(all_assets['images'][:200], 1):  # Limit to 200 images
        local_path = get_local_path(img_url, base_url, template_dir)
        if download_file(img_url, local_path):
            img_downloaded += 1
            if i <= 10 or i % 20 == 0:
                print(f"      ✓ Image {i}/{min(200, len(all_assets['images']))}: {os.path.basename(local_path)}")
        time.sleep(0.05)
    print(f"      ✓ Downloaded {img_downloaded}/{min(200, len(all_assets['images']))} images")
    
    # Download fonts
    if all_assets['fonts']:
        print(f"   Downloading fonts ({len(all_assets['fonts'])} files)...")
        font_downloaded = 0
        for font_url in all_assets['fonts']:
            local_path = get_local_path(font_url, base_url, template_dir)
            if download_file(font_url, local_path):
                font_downloaded += 1
            time.sleep(0.05)
        print(f"      ✓ Downloaded {font_downloaded}/{len(all_assets['fonts'])} fonts")
    
    # Save template info
    info = {
        'name': template_name,
        'xhtml_base': xhtml_base,
        'xhtml_index': template.get('xhtml_index'),
        'demo_url': template.get('demo_url'),
        'welcome_url': template.get('welcome_url'),
        'pages_cloned': cloned_pages,
        'total_pages': len(cloned_pages),
        'inner_pages': len(inner_pages),
        'assets_count': {k: len(v) for k, v in all_assets.items()}
    }
    info_path = os.path.join(template_dir, 'template-info.json')
    with open(info_path, 'w', encoding='utf-8') as f:
        json.dump(info, f, indent=2)
    
    print(f"   ✅ Completed: {template_name} ({len(cloned_pages)} pages, {total_assets} assets)")
    return True

def main():
    """Main function"""
    print("="*70)
    print("DexignZone XHTML Template Cloner".center(70))
    print("="*70)
    
    # Load templates
    templates = load_templates()
    print(f"\n📋 Found {len(templates)} templates to clone")
    
    if not templates:
        print("❌ No templates found in JSON file")
        return
    
    # Create output directory
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    
    # Clone each template
    successful = 0
    failed = 0
    failed_templates = []
    
    for i, template in enumerate(templates, 1):
        print(f"\n[{i}/{len(templates)}]")
        try:
            if clone_template(template):
                successful += 1
            else:
                failed += 1
                failed_templates.append(template['name'])
        except Exception as e:
            print(f"   ❌ Error cloning {template['name']}: {e}")
            failed += 1
            failed_templates.append(template['name'])
        
        # Small delay between templates
        if i < len(templates):
            time.sleep(0.5)
    
    # Summary
    print("\n" + "="*70)
    print("CLONING SUMMARY".center(70))
    print("="*70)
    print(f"\n✅ Successfully cloned: {successful}")
    print(f"❌ Failed: {failed}")
    if failed_templates:
        print(f"\nFailed templates: {', '.join(failed_templates[:10])}")
        if len(failed_templates) > 10:
            print(f"  ... and {len(failed_templates) - 10} more")
    print(f"📁 Output directory: {OUTPUT_DIR}/")
    print("\n" + "="*70)
    
    # Save summary
    summary = {
        'total': len(templates),
        'successful': successful,
        'failed': failed,
        'failed_templates': failed_templates,
        'output_dir': OUTPUT_DIR
    }
    with open(os.path.join(OUTPUT_DIR, 'cloning-summary.json'), 'w') as f:
        json.dump(summary, f, indent=2)

if __name__ == "__main__":
    try:
        main()
    except KeyboardInterrupt:
        print("\n\n⚠️  Cloning interrupted by user")
    except Exception as e:
        print(f"\n❌ Error: {e}")
        import traceback
        traceback.print_exc()

