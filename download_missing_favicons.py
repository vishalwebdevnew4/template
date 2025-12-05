#!/usr/bin/env python3
"""
Download missing favicon files for yogazone template
"""

import requests
import os

BASE_URL = "https://yogazone.dexignzone.com/xhtml/"
TEMPLATE_DIR = "cloned-xhtml-templates/yogazone"

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
        print(f"  Error downloading {url}: {e}")
    return False

# Download favicon files
print("Downloading missing favicon files...")
print("")

favicons = [
    ("images/favicon.ico", "https://yogazone.dexignzone.com/xhtml/images/favicon.ico"),
    ("images/favicon.png", "https://yogazone.dexignzone.com/xhtml/images/favicon.png"),
]

for local_path, url in favicons:
    filepath = os.path.join(TEMPLATE_DIR, local_path)
    print(f"Downloading: {local_path}")
    if download_file(url, filepath):
        print(f"  ✅ Downloaded: {filepath}")
    else:
        print(f"  ❌ Failed: {url}")

print("")
print("✅ Done!")

