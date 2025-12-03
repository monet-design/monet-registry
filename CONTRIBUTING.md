# Contributing to Monet.Design

Thank you for your interest in contributing! This guide covers three main contribution workflows.

## Prerequisites

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev
```

---

## 1. Adding a New Component

### Related Files

| File | Description |
|------|-------------|
| `scripts/create-registry-component.py` | Component generation script |
| `src/components/registry/[name]/index.tsx` | Component implementation |
| `src/components/registry/[name]/metadata.yaml` | Component metadata |
| `src/types/categories.ts` | Available categories and tags |

### Steps

**Step 1: Create the component**

```bash
python scripts/create-registry-component.py \
  --name "my-hero-section" \
  --category "hero" \
  --image-path "agent-input/hero/my-hero.png" \
  --keywords "hero, landing, minimal" \
  --fonts "Inter, Playfair Display"
```

This generates:
```
src/components/registry/my-hero-section/
├── index.tsx        # React component with CUSTOMIZATION template
└── metadata.yaml    # Component metadata
```

**Step 2: Implement the component**

Edit `src/components/registry/my-hero-section/index.tsx` to match the reference image.

**Step 3: Validate and build**

```bash
# Validate metadata
pnpm metadata:validate

# Build registry
pnpm metadata:build
pnpm registry:build

# Capture screenshot
pnpm screenshot:capture
```

### Validation Checklist

- [ ] `pnpm metadata:validate` passes
- [ ] `pnpm dev` - component renders correctly at `/registry/[name]`
- [ ] `pnpm build` succeeds

---

## 2. Fixing Metadata / Implementation Errors

### Related Files

| File | Description |
|------|-------------|
| `src/components/registry/[name]/metadata.yaml` | Metadata to fix |
| `src/components/registry/[name]/index.tsx` | Implementation to fix |
| `scripts/validate-metadata.ts` | Validation script |

### Commands

```bash
# Find components
pnpm metadata:search "keyword"
pnpm metadata:query --name "component-name"

# View statistics
pnpm metadata:stats

# Validate all metadata
pnpm metadata:validate

# Rebuild after changes
pnpm metadata:build
```

### Metadata Schema (v2.0)

```yaml
schemaVersion: "2.0"
name: component-name          # kebab-case required
category: hero                # see src/types/categories.ts
images:
  preview: agent-input/hero/image.png
description:
  short: "Brief description (150 chars max)"
tags:
  style: [minimal, modern]
  layout: [centered]
  industry: [fintech]
freeformKeywords:
  - custom keyword
fontFamily:
  - Inter
createdAt: "2025-01-01T00:00:00Z"
status: stable
```

### Validation Checklist

- [ ] `pnpm metadata:validate` passes
- [ ] `pnpm build` succeeds

---

## 3. Fixing Screenshot Errors

### Related Files

| File | Description |
|------|-------------|
| `scripts/screenshot/` | Screenshot scripts directory |
| `scripts/screenshot/screenshot-state.json` | Capture state tracking |
| `public/registry/preview/[name].png` | Output screenshots |

### Commands

```bash
# Start dev server first (required)
pnpm dev

# Incremental capture (new components only)
pnpm screenshot:capture

# Recapture all screenshots
pnpm screenshot:all

# Reset state and recapture
pnpm screenshot:reset
pnpm screenshot:capture

# Adjust concurrency if needed
pnpm screenshot:capture --concurrency=10
```

### Validation Checklist

- [ ] Screenshot exists at `public/registry/preview/[component-name].png`
- [ ] Image displays correctly in component preview page
- [ ] Screenshot matches the component's current implementation

---

## General Guidelines

- Component names must be **kebab-case**
- Use the `CUSTOMIZATION` section pattern in `index.tsx` for configurable values
- Run `pnpm build` before submitting a PR to ensure everything compiles
- Keep implementations minimal and focused on the reference design
