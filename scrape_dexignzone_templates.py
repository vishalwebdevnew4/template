#!/usr/bin/env python3
"""
Script to scrape DexignZone website and extract all template links
including welcome pages, index.html, and template pages.
"""

import requests
from bs4 import BeautifulSoup
import json
import re
from urllib.parse import urljoin, urlparse
import time

BASE_URL = "https://dexignzone.com/"

def get_page_content(url):
    """Fetch page content with error handling"""
    try:
        headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        }
        response = requests.get(url, headers=headers, timeout=30)
        response.raise_for_status()
        return response.text
    except Exception as e:
        print(f"Error fetching {url}: {e}")
        return None

def extract_template_links(soup, base_url):
    """Extract all template-related links from the page"""
    links = {
        'welcome_pages': [],
        'index_pages': [],
        'template_pages': [],
        'demo_links': [],
        'live_preview': []
    }
    
    # Find all links
    all_links = soup.find_all('a', href=True)
    
    for link in all_links:
        href = link.get('href', '')
        if not href:
            continue
            
        # Convert relative URLs to absolute
        full_url = urljoin(base_url, href)
        
        # Skip external links that aren't template-related
        parsed = urlparse(full_url)
        if parsed.netloc and 'dexignzone.com' not in parsed.netloc:
            # Check if it's a template demo link (common patterns)
            if any(domain in parsed.netloc for domain in ['themeforest', 'codecanyon', 'envato']):
                continue
        
        # Look for welcome page links
        if 'welcome' in href.lower() or '/welcome/' in href:
            if full_url not in links['welcome_pages']:
                links['welcome_pages'].append(full_url)
        
        # Look for index.html links
        if 'index.html' in href.lower() or href.endswith('/index.html') or href.endswith('index.html'):
            if full_url not in links['index_pages']:
                links['index_pages'].append(full_url)
        
        # Look for template/demo links
        if any(keyword in href.lower() for keyword in ['template', 'demo', 'preview', 'xhtml']):
            if full_url not in links['template_pages']:
                links['template_pages'].append(full_url)
        
        # Look for live preview links
        if 'live preview' in link.get_text().lower() or 'preview' in link.get_text().lower():
            if full_url not in links['live_preview']:
                links['live_preview'].append(full_url)
    
    return links

def find_template_portfolio_links(soup):
    """Find template links from portfolio/work sections"""
    template_links = []
    seen = set()
    
    # Look for all links that point to template demos
    all_links = soup.find_all('a', href=True)
    
    for link in all_links:
        href = link.get('href', '')
        if not href or href.startswith('javascript:') or href.startswith('#'):
            continue
        
        # Check for template demo patterns
        href_lower = href.lower()
        if any(pattern in href_lower for pattern in [
            '.dexignzone.com', '/xhtml/', '/xhtml', '/demo/', '/demo', 
            '/welcome/', '/welcome', 'template', 'preview'
        ]):
            full_url = urljoin(BASE_URL, href)
            # Only include dexignzone links
            if 'dexignzone' in full_url and full_url not in seen:
                seen.add(full_url)
                template_links.append(full_url)
    
    return template_links

def extract_from_portfolio_section(soup):
    """Extract template links from the portfolio/work section"""
    templates = []
    seen_urls = set()
    
    # Look for portfolio items - they usually have a specific structure
    # Find all links that might be template previews
    all_links = soup.find_all('a', href=True)
    
    for link in all_links:
        href = link.get('href', '')
        if not href or href.startswith('javascript:') or href.startswith('#'):
            continue
        
        text = link.get_text(strip=True).lower()
        
        # Look for "Live Preview" links
        if 'live preview' in text or 'preview' in text:
            full_url = urljoin(BASE_URL, href)
            if full_url not in seen_urls and 'dexignzone' in full_url:
                seen_urls.add(full_url)
                # Try to find template name from parent elements
                parent = link.find_parent(['div', 'article', 'li', 'figure'])
                template_name = "Unknown Template"
                
                if parent:
                    # Look for h4, h5, h6 with template name
                    name_elem = parent.find(['h4', 'h5', 'h6', 'strong', 'b'])
                    if name_elem:
                        template_name = name_elem.get_text(strip=True)
                    else:
                        # Try to get alt text from images
                        img = parent.find('img')
                        if img and img.get('alt'):
                            template_name = img.get('alt')
                
                templates.append({
                    'name': template_name,
                    'url': full_url,
                    'type': 'live_preview'
                })
        
        # Look for template demo links (common patterns)
        if any(pattern in href.lower() for pattern in ['/xhtml/', '/xhtml', '/demo/', '/demo', '/welcome/', '/welcome']):
            full_url = urljoin(BASE_URL, href)
            if full_url not in seen_urls:
                seen_urls.add(full_url)
                # Extract template name from URL or nearby elements
                template_name = href.split('/')[-2] if '/' in href else href.split('/')[-1]
                parent = link.find_parent(['div', 'article', 'li'])
                if parent:
                    name_elem = parent.find(['h4', 'h5', 'h6'])
                    if name_elem:
                        template_name = name_elem.get_text(strip=True)
                
                templates.append({
                    'name': template_name,
                    'url': full_url,
                    'type': 'demo_link'
                })
    
    # Also look for template cards/items that might contain demo links
    template_items = soup.find_all(['div', 'article'], class_=re.compile(r'item|card|portfolio|template', re.I))
    
    for item in template_items:
        # Find all links in this item
        item_links = item.find_all('a', href=True)
        for link in item_links:
            href = link.get('href', '')
            if not href or href.startswith('javascript:') or href.startswith('#'):
                continue
            
            # Check if it's a demo/preview link
            if any(keyword in href.lower() for keyword in ['xhtml', 'demo', 'preview', 'welcome', '.dexignzone.com']):
                full_url = urljoin(BASE_URL, href)
                if full_url not in seen_urls and 'dexignzone' in full_url:
                    seen_urls.add(full_url)
                    # Get template name
                    name_elem = item.find(['h4', 'h5', 'h6', 'strong'])
                    template_name = name_elem.get_text(strip=True) if name_elem else "Template"
                    
                    templates.append({
                        'name': template_name,
                        'url': full_url,
                        'type': 'template_demo'
                    })
    
    return templates

def extract_template_base_urls(template_urls):
    """Extract base template names from URLs to construct welcome/xhtml links"""
    base_templates = {}
    
    for url in template_urls:
        try:
            parsed = urlparse(url)
            domain = parsed.netloc
            
            # Extract template name from subdomain (e.g., swigo.dexignzone.com -> swigo)
            if '.dexignzone.com' in domain:
                template_name = domain.split('.')[0]
                
                if template_name not in base_templates:
                    base_templates[template_name] = {
                        'base_url': f"https://{template_name}.dexignzone.com",
                        'demo_url': url,
                        'welcome_url': f"https://{template_name}.dexignzone.com/welcome/",
                        'xhtml_index': f"https://{template_name}.dexignzone.com/xhtml/index.html",
                        'xhtml_base': f"https://{template_name}.dexignzone.com/xhtml/"
                    }
        except:
            continue
    
    return base_templates

def get_inner_pages_from_welcome(template_name, welcome_url):
    """Try to fetch welcome page and extract inner page links"""
    inner_pages = []
    
    try:
        html = get_page_content(welcome_url)
        if html:
            soup = BeautifulSoup(html, 'html.parser')
            # Look for inner page links
            links = soup.find_all('a', href=True)
            for link in links:
                href = link.get('href', '')
                if '/xhtml/' in href and href.endswith('.html'):
                    full_url = urljoin(welcome_url, href)
                    if full_url not in inner_pages:
                        inner_pages.append({
                            'name': link.get_text(strip=True) or href.split('/')[-1],
                            'url': full_url
                        })
    except Exception as e:
        pass  # Silently fail if welcome page doesn't exist
    
    return inner_pages

def get_all_template_links():
    """Main function to scrape all template links"""
    print("="*70)
    print("DexignZone Template Link Scraper".center(70))
    print("="*70)
    print(f"\nFetching main page: {BASE_URL}\n")
    
    # Get main page
    html_content = get_page_content(BASE_URL)
    if not html_content:
        print("Failed to fetch main page")
        return None
    
    soup = BeautifulSoup(html_content, 'html.parser')
    
    # Extract links from main page
    print("Extracting links from main page...")
    main_links = extract_template_links(soup, BASE_URL)
    
    # Extract from portfolio section
    print("Extracting template links from portfolio section...")
    portfolio_templates = extract_from_portfolio_section(soup)
    
    # Find all template-related links
    print("Finding all template-related links...")
    all_template_links = find_template_portfolio_links(soup)
    
    # Extract base template URLs and construct welcome/xhtml links
    print("Constructing welcome pages and xhtml links...")
    template_base_urls = extract_template_base_urls(all_template_links + [t['url'] for t in portfolio_templates])
    
    # Build comprehensive template list
    comprehensive_templates = []
    welcome_pages_list = []
    xhtml_index_list = []
    inner_pages_list = []
    
    for template_name, urls in template_base_urls.items():
        comprehensive_templates.append({
            'name': template_name,
            'demo_url': urls['demo_url'],
            'welcome_url': urls['welcome_url'],
            'xhtml_index': urls['xhtml_index'],
            'xhtml_base': urls['xhtml_base']
        })
        welcome_pages_list.append(urls['welcome_url'])
        xhtml_index_list.append(urls['xhtml_index'])
    
    # Try to get inner pages from a few welcome pages (sample)
    print("Extracting inner pages from welcome pages (sampling)...")
    sample_count = min(5, len(comprehensive_templates))
    for template in comprehensive_templates[:sample_count]:
        inner_pages = get_inner_pages_from_welcome(template['name'], template['welcome_url'])
        if inner_pages:
            inner_pages_list.extend(inner_pages)
    
    # Combine all results
    results = {
        'main_page_links': main_links,
        'portfolio_templates': portfolio_templates,
        'all_template_links': list(set(all_template_links)),
        'comprehensive_templates': comprehensive_templates,
        'welcome_pages': welcome_pages_list,
        'xhtml_index_pages': xhtml_index_list,
        'inner_pages_sample': inner_pages_list,
        'summary': {
            'welcome_pages': len(welcome_pages_list),
            'index_pages': len(xhtml_index_list),
            'template_pages': len(main_links['template_pages']),
            'live_preview': len(main_links['live_preview']),
            'portfolio_templates': len(portfolio_templates),
            'comprehensive_templates': len(comprehensive_templates),
            'inner_pages_found': len(inner_pages_list),
            'total_unique_links': len(set(all_template_links + [l['url'] for l in portfolio_templates]))
        }
    }
    
    return results

def save_results(results, filename='dexignzone_template_links.json'):
    """Save results to JSON file"""
    with open(filename, 'w', encoding='utf-8') as f:
        json.dump(results, f, indent=2, ensure_ascii=False)
    print(f"\n✅ Results saved to {filename}")

def print_results(results):
    """Print results in a readable format"""
    print("\n" + "="*70)
    print("EXTRACTION RESULTS".center(70))
    print("="*70)
    
    summary = results['summary']
    print(f"\n📊 Summary:")
    print(f"   Comprehensive Templates: {summary['comprehensive_templates']}")
    print(f"   Welcome Pages: {summary['welcome_pages']}")
    print(f"   XHTML Index Pages: {summary['index_pages']}")
    print(f"   Inner Pages Found: {summary['inner_pages_found']}")
    print(f"   Template Pages: {summary['template_pages']}")
    print(f"   Live Preview Links: {summary['live_preview']}")
    print(f"   Portfolio Templates: {summary['portfolio_templates']}")
    print(f"   Total Unique Links: {summary['total_unique_links']}")
    
    print(f"\n🎨 Comprehensive Templates ({len(results.get('comprehensive_templates', []))}):")
    for i, template in enumerate(results.get('comprehensive_templates', [])[:20], 1):
        print(f"   {i}. {template['name']}")
        print(f"      Demo: {template['demo_url']}")
        print(f"      Welcome: {template['welcome_url']}")
        print(f"      XHTML Index: {template['xhtml_index']}")
    if len(results.get('comprehensive_templates', [])) > 20:
        print(f"   ... and {len(results.get('comprehensive_templates', [])) - 20} more")
    
    print(f"\n📄 Welcome Pages ({len(results.get('welcome_pages', []))}):")
    for i, url in enumerate(results.get('welcome_pages', [])[:15], 1):
        print(f"   {i}. {url}")
    if len(results.get('welcome_pages', [])) > 15:
        print(f"   ... and {len(results.get('welcome_pages', [])) - 15} more")
    
    print(f"\n📄 XHTML Index Pages ({len(results.get('xhtml_index_pages', []))}):")
    for i, url in enumerate(results.get('xhtml_index_pages', [])[:15], 1):
        print(f"   {i}. {url}")
    if len(results.get('xhtml_index_pages', [])) > 15:
        print(f"   ... and {len(results.get('xhtml_index_pages', [])) - 15} more")
    
    if results.get('inner_pages_sample'):
        print(f"\n📄 Inner Pages Sample ({len(results['inner_pages_sample'])}):")
        for i, page in enumerate(results['inner_pages_sample'][:15], 1):
            print(f"   {i}. {page['name']}: {page['url']}")
        if len(results['inner_pages_sample']) > 15:
            print(f"   ... and {len(results['inner_pages_sample']) - 15} more")
    
    print(f"\n🎨 Portfolio Templates ({len(results['portfolio_templates'])}):")
    for i, template in enumerate(results['portfolio_templates'][:10], 1):
        print(f"   {i}. {template.get('name', 'N/A')}: {template['url']}")
    if len(results['portfolio_templates']) > 10:
        print(f"   ... and {len(results['portfolio_templates']) - 10} more")

def export_to_text_file(results, filename='dexignzone_template_links.txt'):
    """Export all links to a simple text file"""
    with open(filename, 'w', encoding='utf-8') as f:
        f.write("="*70 + "\n")
        f.write("DEXIGNZONE TEMPLATE LINKS\n")
        f.write("="*70 + "\n\n")
        
        f.write("COMPREHENSIVE TEMPLATES:\n")
        f.write("-"*70 + "\n")
        for template in results.get('comprehensive_templates', []):
            f.write(f"\n{template['name']}:\n")
            f.write(f"  Demo URL: {template['demo_url']}\n")
            f.write(f"  Welcome: {template['welcome_url']}\n")
            f.write(f"  XHTML Index: {template['xhtml_index']}\n")
            f.write(f"  XHTML Base: {template['xhtml_base']}\n")
        
        f.write("\n\nWELCOME PAGES:\n")
        f.write("-"*70 + "\n")
        for url in results.get('welcome_pages', []):
            f.write(f"{url}\n")
        
        f.write("\n\nXHTML INDEX PAGES:\n")
        f.write("-"*70 + "\n")
        for url in results.get('xhtml_index_pages', []):
            f.write(f"{url}\n")
        
        if results.get('inner_pages_sample'):
            f.write("\n\nINNER PAGES (Sample):\n")
            f.write("-"*70 + "\n")
            for page in results['inner_pages_sample']:
                f.write(f"{page['name']}: {page['url']}\n")
        
        f.write("\n\nTEMPLATE PAGES:\n")
        f.write("-"*70 + "\n")
        for url in results['main_page_links']['template_pages']:
            f.write(f"{url}\n")
        
        f.write("\n\nPORTFOLIO TEMPLATES:\n")
        f.write("-"*70 + "\n")
        for template in results['portfolio_templates']:
            f.write(f"{template.get('name', 'N/A')}\n{template['url']}\n\n")
        
        f.write("\n\nALL TEMPLATE LINKS:\n")
        f.write("-"*70 + "\n")
        for url in results['all_template_links']:
            f.write(f"{url}\n")
    
    print(f"✅ Links exported to {filename}")

if __name__ == "__main__":
    try:
        results = get_all_template_links()
        
        if results:
            print_results(results)
            save_results(results)
            export_to_text_file(results)
            
            print("\n" + "="*70)
            print("✅ Scraping completed successfully!".center(70))
            print("="*70)
        else:
            print("\n❌ Failed to extract template links")
    
    except KeyboardInterrupt:
        print("\n\n⚠️  Scraping interrupted by user")
    except Exception as e:
        print(f"\n❌ Error: {e}")
        import traceback
        traceback.print_exc()

