import os
import shutil
import re

root_dir = r'c:\Users\kesha\OneDrive\Desktop\SolutionBowl_v1-handoff\solutionbowl-v1'
project_dir = os.path.join(root_dir, 'project')
backend_dir = os.path.join(root_dir, 'backend')

print("Creating backend directory...")
os.makedirs(backend_dir, exist_ok=True)

print("Moving backend files...")
for file in ['app.py']:
    src = os.path.join(project_dir, file)
    if os.path.exists(src):
        try:
            shutil.move(src, os.path.join(backend_dir, file))
        except Exception as e:
            print("Failed to move", src, e)

# Uploads dir might have permission issues
src = os.path.join(project_dir, 'uploads')
if os.path.exists(src):
    try:
        shutil.move(src, os.path.join(backend_dir, 'uploads'))
    except Exception as e:
        print("Failed to move uploads dir:", e)

print("Moving assets...")
assets_src = os.path.join(project_dir, 'assets')
assets_dst = os.path.join(root_dir, 'assets')
if os.path.exists(assets_src):
    try:
        if os.path.exists(assets_dst):
            shutil.rmtree(assets_dst)
        shutil.move(assets_src, assets_dst)
    except Exception as e:
        print("Failed to move assets:", e)

css_dir = os.path.join(assets_dst, 'css')
js_dir = os.path.join(assets_dst, 'js')
os.makedirs(css_dir, exist_ok=True)
os.makedirs(js_dir, exist_ok=True)

print("Processing HTML...")
html_file = os.path.join(project_dir, 'SolutionBowl_AI Landing Page.html')
index_file = os.path.join(root_dir, 'index.html')

if os.path.exists(html_file):
    with open(html_file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # 1. Extract styles
    css_content = ''
    def style_replacer(match):
        global css_content
        css_content += match.group(1) + '\n'
        return ''
    
    content = re.sub(r'<style>(.*?)</style>', style_replacer, content, flags=re.DOTALL)
    
    # Add link tag in head if possible
    link_tag = '<link rel="stylesheet" href="assets/css/style.css">\n'
    if '</head>' in content:
        content = content.replace('</head>', link_tag + '</head>')
    else:
        content = link_tag + content

    with open(os.path.join(css_dir, 'style.css'), 'w', encoding='utf-8') as f:
        f.write(css_content)

    # 2. Extract scripts (only <script> without attributes)
    js_content = ''
    def script_replacer(match):
        global js_content
        js_content += match.group(1) + '\n'
        return ''

    # Match <script> exactly
    content = re.sub(r'<script>(.*?)</script>', script_replacer, content, flags=re.DOTALL)
    
    # Add script tag before </body>
    script_tag = '<script src="assets/js/main.js"></script>\n'
    if '</body>' in content:
        content = content.replace('</body>', script_tag + '</body>')
    else:
        content += script_tag

    with open(os.path.join(js_dir, 'main.js'), 'w', encoding='utf-8') as f:
        f.write(js_content)

    with open(index_file, 'w', encoding='utf-8') as f:
        f.write(content)
        
    print("Done writing files.")
    
    # Optional: rename original instead of removing if we want safety, but moving is fine
    os.remove(html_file)
