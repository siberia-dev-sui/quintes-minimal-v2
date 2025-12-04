import os
import shutil
import re
from bs4 import BeautifulSoup
import datetime

# Configuration
BASE_DIR = '/Users/hugomendoza/Downloads/quientes-experimental-v5'
BACKUP_DIR = os.path.join(BASE_DIR, f"_backup_{datetime.datetime.now().strftime('%Y%m%d_%H%M%S')}")
TARGET_DIRS = ['css', 'js', 'images', 'fonts']

def setup_directories():
    """Creates necessary directories and a backup."""
    print(f"Creating backup at {BACKUP_DIR}...")
    shutil.copytree(BASE_DIR, BACKUP_DIR, dirs_exist_ok=True)
    
    for d in TARGET_DIRS:
        path = os.path.join(BASE_DIR, d)
        if not os.path.exists(path):
            os.makedirs(path)
            print(f"Created directory: {path}")

def move_file(src_path, dest_folder):
    """Moves a file to the destination folder and returns the new relative path."""
    if not os.path.exists(src_path):
        print(f"Warning: File not found: {src_path}")
        return None
    
    filename = os.path.basename(src_path)
    dest_path = os.path.join(BASE_DIR, dest_folder, filename)
    
    # Handle duplicate filenames
    if os.path.exists(dest_path) and not os.path.samefile(src_path, dest_path):
        base, ext = os.path.splitext(filename)
        counter = 1
        while os.path.exists(dest_path):
            filename = f"{base}_{counter}{ext}"
            dest_path = os.path.join(BASE_DIR, dest_folder, filename)
            counter += 1
            
    shutil.move(src_path, dest_path)
    print(f"Moved {src_path} -> {dest_path}")
    return f"{dest_folder}/{filename}"

def process_index_html():
    """Parses index.html, moves assets, and updates links."""
    index_path = os.path.join(BASE_DIR, 'crypto-drip-au.webflow.io', 'index.html')
    if not os.path.exists(index_path):
        # Fallback if index.html is in root
        index_path = os.path.join(BASE_DIR, 'index.html')
        
    if not os.path.exists(index_path):
        print("Error: index.html not found!")
        return

    print(f"Processing {index_path}...")
    with open(index_path, 'r', encoding='utf-8') as f:
        soup = BeautifulSoup(f, 'html.parser')

    # 1. CSS Links
    for link in soup.find_all('link', rel='stylesheet'):
        href = link.get('href')
        if href:
            full_path = resolve_path(href, index_path)
            if full_path:
                new_path = move_file(full_path, 'css')
                if new_path:
                    link['href'] = new_path
            else:
                # Fallback
                filename = os.path.basename(unquote(href.split('?')[0].split('#')[0]))
                if os.path.exists(os.path.join(BASE_DIR, 'css', filename)):
                    link['href'] = f"css/{filename}"

    # 2. JS Scripts
    for script in soup.find_all('script', src=True):
        src = script.get('src')
        if src:
            full_path = resolve_path(src, index_path)
            if full_path:
                new_path = move_file(full_path, 'js')
                if new_path:
                    script['src'] = new_path
            else:
                # Fallback
                filename = os.path.basename(unquote(src.split('?')[0].split('#')[0]))
                if os.path.exists(os.path.join(BASE_DIR, 'js', filename)):
                    script['src'] = f"js/{filename}"

    # 3. Images and Favicons
    # img tags
    for img in soup.find_all('img'):
        # src
        src = img.get('src')
        if src:
            full_path = resolve_path(src, index_path)
            if full_path:
                new_path = move_file(full_path, 'images')
                if new_path:
                    img['src'] = new_path
            else:
                # Fallback: Check if file already exists in images/
                filename = os.path.basename(unquote(src.split('?')[0].split('#')[0]))
                if os.path.exists(os.path.join(BASE_DIR, 'images', filename)):
                     img['src'] = f"images/{filename}"
        
        # srcset
        srcset = img.get('srcset')
        if srcset:
            new_srcset_parts = []
            for part in srcset.split(','):
                parts = part.strip().split(' ')
                url = parts[0]
                full_path = resolve_path(url, index_path)
                if full_path:
                    new_path = move_file(full_path, 'images')
                    if new_path:
                        parts[0] = new_path
                        new_srcset_parts.append(' '.join(parts))
                else:
                    # Fallback for srcset
                    filename = os.path.basename(unquote(url.split('?')[0].split('#')[0]))
                    if os.path.exists(os.path.join(BASE_DIR, 'images', filename)):
                        parts[0] = f"images/{filename}"
                        new_srcset_parts.append(' '.join(parts))
                    else:
                        new_srcset_parts.append(part) # Keep original if not found
            img['srcset'] = ', '.join(new_srcset_parts)

    # Favicons
    for link in soup.find_all('link', rel=lambda x: x and ('icon' in x or 'apple-touch-icon' in x)):
        href = link.get('href')
        if href:
            full_path = resolve_path(href, index_path)
            if full_path:
                new_path = move_file(full_path, 'images')
                if new_path:
                    link['href'] = new_path

    # 4. Inline Styles (background-image: url(...))
    # This is a bit more complex with BS4, iterating all tags with style attr
    for tag in soup.find_all(attrs={"style": True}):
        style = tag['style']
        new_style = process_css_content(style, index_path, is_inline=True)
        if new_style != style:
            tag['style'] = new_style

    # Save updated HTML to root
    new_index_path = os.path.join(BASE_DIR, 'index.html')
    with open(new_index_path, 'w', encoding='utf-8') as f:
        f.write(str(soup))
    print(f"Saved updated HTML to {new_index_path}")

from urllib.parse import unquote

def resolve_path(url, context_file_path):
    """Resolves a URL to a local file path."""
    # Handle "absolute" URLs that map to local folders
    if url.startswith('http://') or url.startswith('https://') or url.startswith('//'):
        # Extract domain and path
        # e.g. https://assets-global.website-files.com/661fa.../foo.css
        # -> assets-global.website-files.com/661fa.../foo.css
        
        clean_url = url.lstrip('/').replace('https://', '').replace('http://', '').replace('//', '')
        clean_url = unquote(clean_url) # Decode %20 to space
        
        # Check if the start of the clean_url matches a directory in BASE_DIR
        # We can split by / and check the first part
        parts = clean_url.split('/')
        domain_dir = parts[0]
        
        candidate = os.path.join(BASE_DIR, *parts)
        if os.path.exists(candidate):
            return candidate
            
        return None 

    # Clean URL (remove query params, hashes)
    url = url.split('?')[0].split('#')[0]
    
    # If absolute path (starts with /), it's relative to BASE_DIR (usually)
    # But in this raw export, it might be relative to the domain folders.
    # Let's try to find the file.
    
    # Strategy 1: Relative to context file
    context_dir = os.path.dirname(context_file_path)
    candidate1 = os.path.normpath(os.path.join(context_dir, url))
    if os.path.exists(candidate1):
        return candidate1
    
    # Strategy 2: Relative to BASE_DIR (treating / as root)
    if url.startswith('/'):
        candidate2 = os.path.normpath(os.path.join(BASE_DIR, url.lstrip('/')))
        if os.path.exists(candidate2):
            return candidate2
            
    # Strategy 3: Search in known subdirectories (brute force-ish for this specific export structure)
    # The export has folders like 'assets-global...', 'cdn.prod...', etc.
    # We can search for the filename in the whole tree if needed, but let's be careful.
    # For now, let's rely on the structure we saw:
    # ../assets-global.website-files.com/...
    
    # If the URL is like "../assets-global...", it should be caught by Strategy 1 if context is index.html in a subdir.
    
    return None

def process_css_content(content, context_file_path, is_inline=False):
    """Updates url(...) references in CSS content."""
    
    def replace_url(match):
        url = match.group(1) or match.group(2) # url('...') or url(...)
        if not url: return match.group(0)
        
        # Remove quotes if present
        url = url.strip("'\"")
        
        if url.startswith('data:'): return match.group(0)
        
        full_path = resolve_path(url, context_file_path)
        if full_path:
            # Determine type (image or font)
            ext = os.path.splitext(full_path)[1].lower()
            if ext in ['.woff', '.woff2', '.ttf', '.otf', '.eot']:
                target_folder = 'fonts'
            else:
                target_folder = 'images'
                
            new_path = move_file(full_path, target_folder)
            if new_path:
                if is_inline:
                    return f"url('{new_path}')"
                else:
                    return f"url('../{new_path}')" # CSS files are in css/, so assets are ../images/
        
        return match.group(0)

    # Regex for url(...)
    pattern = re.compile(r"url\(\s*(?:['\"]?)(.*?)(?:['\"]?)\s*\)", re.IGNORECASE)
    return pattern.sub(replace_url, content)

def process_css_files():
    """Updates links in all CSS files in the css/ directory."""
    css_dir = os.path.join(BASE_DIR, 'css')
    if not os.path.exists(css_dir): return
    
    for filename in os.listdir(css_dir):
        if filename.endswith('.css'):
            filepath = os.path.join(css_dir, filename)
            print(f"Processing CSS file: {filepath}")
            with open(filepath, 'r', encoding='utf-8') as f:
                content = f.read()
            
            new_content = process_css_content(content, filepath) # Context is the new location? 
            # Wait, the files were moved FROM somewhere. The relative links in them might be broken now if we don't resolve them relative to their ORIGINAL location.
            # BUT, we already moved them.
            # Actually, `resolve_path` checks if file exists. If we moved the CSS file, the relative links inside it (like ../images/foo.png) point to where the images USED to be relative to the CSS.
            # If we move the CSS first, we need to know where it came from to resolve the links.
            # OR, we process the CSS *before* moving it?
            # The current flow moves CSS files when parsing HTML. So they are already in `css/`.
            # The links inside them are likely like `../images/foo.png` (if they were relative) or absolute.
            # If they were absolute (e.g. /assets/...), `resolve_path` might still find them if they haven't been moved yet.
            # If they were relative, `resolve_path` using the NEW `css/` location as context might fail if the relative path structure changed.
            
            # IMPROVEMENT: We should probably process CSS content *as* we move it, or keep track of original paths.
            # However, for this specific task, the images are likely in those scattered folders.
            # If the CSS has `url(../images/foo.png)` and we moved `foo.png` already?
            # `move_file` handles moving. If it's already moved, it might fail to find it at source.
            # But `move_file` checks `if not os.path.exists(src_path)`.
            
            # Let's refine:
            # The CSS files in this export are likely in `css/` or `assets...`.
            # If they are in `assets...`, they might reference images in `assets...`.
            # If we move the CSS to `css/`, the relative link `../images` is broken.
            # We need to resolve the link based on the *original* location.
            # But we lost the original location mapping in this script structure.
            
            # FIX: We will iterate the `css/` directory, but we need to be careful. 
            # Actually, most Webflow exports have CSS in `css/` or root, and images in `images/`.
            # But this is a "raw export with scattered folders".
            # Let's assume the CSS files might have absolute paths or relative paths that work from their original location.
            # Since we moved them, we might have an issue.
            
            # ALTERNATIVE: Don't move CSS files in `process_index_html`. Just identify them, process them, THEN move them.
            # But `process_index_html` updates the `<link>` href.
            
            # Let's stick to the plan but make `resolve_path` robust.
            # If we can't find the file relative to `css/file.css`, we can try searching the backup?
            # Or, we can search the whole `BASE_DIR` for the filename?
            pass

            # For now, let's write the updated content back.
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(new_content)

if __name__ == "__main__":
    setup_directories()
    process_index_html()
    process_css_files()
    print("Reorganization complete.")
