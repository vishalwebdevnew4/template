#!/usr/bin/env python3
"""
Script to download Bootstrap CSS and other external CSS files for cloned templates
"""

import os
import json
import requests
from bs4 import BeautifulSoup
from urllib.parse import urlparse, urljoin
import time

TEMPLATES_DIR = 'cloned-xhtml-templates'
TEMPLATES_JSON = 'dexignzone_template_links.json'

def download_file(url, filepath, retries=3):
    """Download a file"""
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
    }
    
    # Skip Google Fonts API
    if 'fonts.googleapis.com' in url and '/css2' in url:
        return False
    
    for attempt in range(retries):
        try:
            response = requests.get(url, headers=headers, timeout=30, stream=True)
            response.raise_for_status()
            os.makedirs(os.path.dirname(filepath), exist_ok=True)
            with open(filepath, 'wb') as f:
                for chunk in response.iter_content(chunk_size=8192):
                    if chunk:
                        f.write(chunk)
            if os.path.exists(filepath) and os.path.getsize(filepath) > 0:
                return True
        except Exception as e:
            if attempt < retries - 1:
                time.sleep(1)
    return False

def get_local_path(url, template_dir):
    """Get local path for external URL"""
    parsed = urlparse(url)
    
    if 'cdn.jsdelivr.net' in url or 'cdnjs.cloudflare.com' in url or 'unpkg.com' in url:
        path_parts = parsed.path.split('/')
        if len(path_parts) > 1:
            lib_name = path_parts[1] if len(path_parts) > 1 else 'unknown'
            filename = path_parts[-1] if path_parts else 'file.css'
            return os.path.join(template_dir, 'external', 'cdn', lib_name, filename)
    
    domain = parsed.netloc.replace('.', '_')
    path = parsed.path.lstrip('/')
    return os.path.join(template_dir, 'external', domain, path)

def fix_template_css(template_name, template_info):
    """Fix Bootstrap and external CSS for a template"""
    template_dir = os.path.join(TEMPLATES_DIR, template_name)
    html_files = []
    
    # Find all HTML files
    for root, dirs, files in os.walk(template_dir):
        for file in files:
            if file.endswith('.html') and not file.startswith('original-'):
                html_files.append(os.path.join(root, file))
    
    if not html_files:
        return {'status': 'no_html', 'fixed': 0}
    
    fixed_count = 0
    downloaded_css = []
    
    for html_file in html_files:
        try:
            with open(html_file, 'r', encoding='utf-8') as f:
                html = f.read()
            
            soup = BeautifulSoup(html, 'html.parser')
            css_links = soup.find_all('link', rel='stylesheet')
            modified = False
            
            for link in css_links:
                href = link.get('href', '')
                if not href:
                    continue
                
                # Check if it's an external CDN URL
                if href.startswith('http://') or href.startswith('https://'):
                    # Download it
                    local_path = get_local_path(href, template_dir)
                    
                    # Check if already downloaded
                    if not os.path.exists(local_path) or os.path.getsize(local_path) == 0:
                        print(f"  Downloading: {href}")
                        if download_file(href, local_path):
                            downloaded_css.append(href)
                            print(f"    ✅ Downloaded to: {local_path}")
                        else:
                            print(f"    ❌ Failed: {href}")
                            continue
                    
                    # Update HTML to point to local file
                    rel_path = os.path.relpath(local_path, os.path.dirname(html_file))
                    link['href'] = rel_path
                    
                    # Remove CDN-specific attributes
                    if 'integrity' in link.attrs:
                        del link['integrity']
                    if 'crossorigin' in link.attrs:
                        del link['crossorigin']
                    
                    modified = True
            
            if modified:
                with open(html_file, 'w', encoding='utf-8') as f:
                    f.write(str(soup))
                fixed_count += 1
        
        except Exception as e:
            print(f"  ⚠️  Error processing {html_file}: {e}")
    
    return {
        'status': 'fixed',
        'html_files': len(html_files),
        'fixed_files': fixed_count,
        'downloaded_css': len(downloaded_css)
    }

def main():
    """Main function"""
    print("="*70)
    print("Bootstrap CSS Fixer".center(70))
    print("="*70)
    
    templates = {}
    if os.path.exists(TEMPLATES_JSON):
        with open(TEMPLATES_JSON, 'r', encoding='utf-8') as f:
            data = json.load(f)
        templates = {t['name']: t for t in data.get('comprehensive_templates', [])}
    
    cloned_templates = [d for d in os.listdir(TEMPLATES_DIR) 
                       if os.path.isdir(os.path.join(TEMPLATES_DIR, d)) 
                       and d != 'cloning-summary.json']
    
    print(f"\n📋 Found {len(cloned_templates)} cloned templates")
    
    results = {}
    total_fixed = 0
    total_downloaded = 0
    
    for template_name in sorted(cloned_templates):
        print(f"\n🔍 Fixing: {template_name}")
        template_info = templates.get(template_name, {})
        result = fix_template_css(template_name, template_info)
        results[template_name] = result
        
        if result.get('fixed_files', 0) > 0:
            total_fixed += result['fixed_files']
            total_downloaded += result.get('downloaded_css', 0)
            print(f"  ✅ Fixed {result['fixed_files']} HTML files, downloaded {result.get('downloaded_css', 0)} CSS files")
    
    # Summary
    print("\n" + "="*70)
    print("SUMMARY".center(70))
    print("="*70)
    print(f"\n✅ Processed: {len(results)} templates")
    print(f"✅ Fixed HTML files: {total_fixed}")
    print(f"✅ Downloaded CSS files: {total_downloaded}")

if __name__ == "__main__":
    main()

