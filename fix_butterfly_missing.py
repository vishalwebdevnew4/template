#!/usr/bin/env python3
"""
Fix missing items in butterfly template
"""

import os
import requests
from bs4 import BeautifulSoup
from urllib.parse import urljoin

TEMPLATE_DIR = "cloned-xhtml-templates/butterfly"
BASE_URL = "https://butterfly.dexignzone.com/xhtml/"

def download_file(url, filepath):
    """Download a file"""
    try:
        headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
        }
        response = requests.get(url, headers=headers, timeout=30)
        response.raise_for_status()
        os.makedirs(os.path.dirname(filepath), exist_ok=True)
        with open(filepath, 'wb') as f:
            f.write(response.content)
        if os.path.exists(filepath) and os.path.getsize(filepath) > 0:
            return True
    except Exception as e:
        print(f"  Error: {e}")
    return False

# Read index.html
index_file = os.path.join(TEMPLATE_DIR, "index.html")
with open(index_file, 'r', encoding='utf-8') as f:
    html = f.read()

soup = BeautifulSoup(html, 'html.parser')
head = soup.find('head')

print("=== FIXING BUTTERFLY TEMPLATE ===")
print("")

# 1. Check and add Bootstrap CSS
print("1. Checking Bootstrap CSS...")
bootstrap_css = head.find('link', href=lambda x: x and 'bootstrap' in x.lower() and '.css' in x.lower())
if not bootstrap_css:
    print("   ❌ Bootstrap CSS missing - Adding...")
    # Add Bootstrap CSS before closing head
    bootstrap_link = soup.new_tag('link', href='external/cdn/npm/bootstrap.min.css', rel='stylesheet')
    # Insert before closing head tag
    head.insert(-1, bootstrap_link)
    print("   ✅ Added Bootstrap CSS link")
else:
    print("   ✅ Bootstrap CSS already present")

# 2. Download missing JS files
print("\n2. Downloading missing JS files...")
missing_js = [
    ("js/html5shiv.min.js", "https://cdn.jsdelivr.net/npm/html5shiv@3.7.3/dist/html5shiv.min.js"),
    ("js/respond.min.js", "https://cdn.jsdelivr.net/npm/respond.js@1.4.2/dest/respond.min.js")
]

for local_path, url in missing_js:
    filepath = os.path.join(TEMPLATE_DIR, local_path)
    if not os.path.exists(filepath):
        print(f"   Downloading: {local_path}")
        if download_file(url, filepath):
            print(f"   ✅ Downloaded: {local_path}")
        else:
            print(f"   ❌ Failed: {local_path}")
    else:
        print(f"   ✅ Already exists: {local_path}")

# 3. Download Bootstrap CSS if not exists
print("\n3. Downloading Bootstrap CSS...")
bootstrap_css_path = os.path.join(TEMPLATE_DIR, "external/cdn/npm/bootstrap.min.css")
if not os.path.exists(bootstrap_css_path):
    print("   Downloading Bootstrap CSS...")
    if download_file("https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css", bootstrap_css_path):
        print("   ✅ Downloaded Bootstrap CSS")
    else:
        print("   ❌ Failed to download Bootstrap CSS")
else:
    print("   ✅ Bootstrap CSS already exists")

# Save updated HTML
with open(index_file, 'w', encoding='utf-8') as f:
    f.write(str(soup))

print("\n✅ Fixed butterfly/index.html!")
print("   - Added Bootstrap CSS link")
print("   - Downloaded missing JS files")
print("   - Downloaded Bootstrap CSS")

