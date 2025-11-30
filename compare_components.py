#!/usr/bin/env python3
"""
Compare implemented components with source images from unsection-hero folder.
Generates a markdown report of completed and pending components.
"""

import os
import re
from pathlib import Path
from typing import List, Tuple, Set, Optional
from datetime import datetime

# Paths
PROJECT_ROOT = Path(__file__).parent
IMAGES_DIR = PROJECT_ROOT / "agent-input" / "unsection-hero"
REGISTRY_DIR = PROJECT_ROOT / "src" / "components" / "registry"
OUTPUT_FILE = PROJECT_ROOT / "UNSECTION_HERO_PROGRESS.md"

def normalize_name(name):
    """Normalize image filename to comparable format."""
    # Remove extension
    name = re.sub(r'\.(jpg|jpeg|png|webp)$', '', name, flags=re.IGNORECASE)
    # Convert to lowercase
    name = name.lower()
    # Replace common suffixes
    name = re.sub(r'-page-section-hero.*$', '', name)
    name = re.sub(r'-section-hero.*$', '', name)
    name = re.sub(r'-hero-section.*$', '', name)
    name = re.sub(r'-hero-design.*$', '', name)
    name = re.sub(r'-home-page.*$', '', name)
    name = re.sub(r'-page.*$', '', name)
    # Normalize separators
    name = name.replace('_', '-')
    return name

def get_image_files():
    """Get list of image files with their normalized names."""
    images = []
    if IMAGES_DIR.exists():
        for f in IMAGES_DIR.iterdir():
            if f.suffix.lower() in ['.jpg', '.jpeg', '.png', '.webp']:
                images.append((f.name, normalize_name(f.name)))
    return sorted(images, key=lambda x: x[0])

def get_registry_components():
    """Get list of implemented components."""
    components = set()
    if REGISTRY_DIR.exists():
        for d in REGISTRY_DIR.iterdir():
            if d.is_dir():
                # Check if it has an index.tsx file
                if (d / "index.tsx").exists():
                    components.add(d.name.lower())
    return components

def find_matching_component(normalized_image, components):
    """Try to find a matching component for the image."""
    # Direct match
    if normalized_image in components:
        return normalized_image

    # Try with -hero suffix
    if f"{normalized_image}-hero" in components:
        return f"{normalized_image}-hero"

    # Try partial matches
    for comp in components:
        # Check if image name is contained in component name
        if normalized_image in comp or comp in normalized_image:
            return comp

        # Check key parts
        image_parts = set(normalized_image.split('-'))
        comp_parts = set(comp.split('-'))
        # If most parts match
        common = image_parts & comp_parts
        if len(common) >= 2 and len(common) >= len(image_parts) * 0.5:
            return comp

    return None

def generate_report():
    """Generate markdown report."""
    images = get_image_files()
    components = get_registry_components()

    completed = []
    pending = []

    matched_components = set()

    for original_name, normalized_name in images:
        match = find_matching_component(normalized_name, components)
        if match:
            completed.append((original_name, match))
            matched_components.add(match)
        else:
            pending.append(original_name)

    # Generate markdown
    lines = [
        "# Unsection Hero Components Progress",
        "",
        f"**Total Images:** {len(images)}",
        f"**Completed:** {len(completed)} ({len(completed)*100//len(images) if images else 0}%)",
        f"**Pending:** {len(pending)} ({len(pending)*100//len(images) if images else 0}%)",
        "",
        "---",
        "",
        "## Completed Components",
        "",
        "| # | Source Image | Component Name |",
        "|---|--------------|----------------|",
    ]

    for i, (img, comp) in enumerate(completed, 1):
        lines.append(f"| {i} | `{img}` | `{comp}` |")

    lines.extend([
        "",
        "---",
        "",
        "## Pending Components (Not Yet Implemented)",
        "",
        "| # | Source Image |",
        "|---|--------------|",
    ])

    for i, img in enumerate(pending, 1):
        lines.append(f"| {i} | `{img}` |")

    lines.extend([
        "",
        "---",
        "",
        "## How to Continue",
        "",
        "To implement remaining components, use img-to-component agent with image path:",
        "",
        "```",
        f"{IMAGES_DIR}/{{IMAGE_NAME}}",
        "```",
        "",
        f"Generated at: {datetime.now().isoformat()}",
    ])

    with open(OUTPUT_FILE, 'w') as f:
        f.write('\n'.join(lines))

    print(f"Report generated: {OUTPUT_FILE}")
    print(f"Total: {len(images)}, Completed: {len(completed)}, Pending: {len(pending)}")

if __name__ == "__main__":
    generate_report()
