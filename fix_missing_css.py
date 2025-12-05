#!/usr/bin/env python3
"""
Script to check and fix missing CSS files in cloned templates
"""

import os
import json
import requests
from bs4 import BeautifulSoup
from urllib.parse import urljoin
import time

TEMPLATES_DIR = 'cloned-xhtml-templates'
TEMPLATES_JSON = 'dexignzone_template_links.json'

def load_templates():
    """Load template data"""
    with open(TEMPLATES_JSON, 'r', encoding='utf-8') as f:
        data = json.load(f)
    return {t['name']: t for t in data.get('comprehensive_templates', [])}

def download_file(url, filepath, retries=3):
    """Download a file"""
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
    }
    
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

def check_and_fix_template(template_name, template_info):
    """Check and fix CSS files for a template"""
    template_dir = os.path.join(TEMPLATES_DIR, template_name)
    index_file = os.path.join(template_dir, 'index.html')
    
    if not os.path.exists(index_file):
        return {'status': 'no_index', 'missing_css': []}
    
    # Read HTML
    with open(index_file, 'r', encoding='utf-8') as f:
        html = f.read()
    
    soup = BeautifulSoup(html, 'html.parser')
    css_links = soup.find_all('link', rel='stylesheet')
    
    missing_css = []
    base_url = template_info['xhtml_base']
    
    for link in css_links:
        href = link.get('href', '')
        if not href or 'fonts.googleapis.com' in href or 'external' in href:
            continue
        
        # Check if file exists
        css_path = os.path.join(template_dir, href)
        if not os.path.exists(css_path) or os.path.getsize(css_path) == 0:
            # Try to download it
            full_url = urljoin(base_url, href)
            print(f"  Downloading missing CSS: {href}")
            if download_file(full_url, css_path):
                print(f"    ✅ Downloaded: {href}")
            else:
                missing_css.append(href)
                print(f"    ❌ Failed: {href}")
    
    return {
        'status': 'checked',
        'total_css': len(css_links),
        'missing_css': missing_css
    }

def main():
    """Main function"""
    print("="*70)
    print("CSS File Checker and Fixer".center(70))
    print("="*70)
    
    templates = load_templates()
    cloned_templates = [d for d in os.listdir(TEMPLATES_DIR) 
                       if os.path.isdir(os.path.join(TEMPLATES_DIR, d)) 
                       and d != 'cloning-summary.json']
    
    print(f"\n📋 Found {len(cloned_templates)} cloned templates")
    
    results = {}
    total_missing = 0
    
    for template_name in sorted(cloned_templates):
        if template_name not in templates:
            continue
        
        print(f"\n🔍 Checking: {template_name}")
        result = check_and_fix_template(template_name, templates[template_name])
        results[template_name] = result
        
        if result['missing_css']:
            total_missing += len(result['missing_css'])
            print(f"  ⚠️  {len(result['missing_css'])} CSS files still missing")
        else:
            print(f"  ✅ All CSS files present")
    
    # Summary
    print("\n" + "="*70)
    print("SUMMARY".center(70))
    print("="*70)
    print(f"\n✅ Checked: {len(results)} templates")
    print(f"❌ Total missing CSS files: {total_missing}")
    
    if total_missing > 0:
        print(f"\nTemplates with missing CSS:")
        for name, result in results.items():
            if result['missing_css']:
                print(f"  - {name}: {len(result['missing_css'])} missing")
                for css in result['missing_css'][:3]:
                    print(f"    • {css}")
                if len(result['missing_css']) > 3:
                    print(f"    ... and {len(result['missing_css']) - 3} more")

if __name__ == "__main__":
    main()

