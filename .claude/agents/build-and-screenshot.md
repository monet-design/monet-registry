---
name: build-and-screenshot
description: 컴포넌트 메타데이터 검증/빌드, 프로젝트 빌드, 프로덕션 서버 시작, 스크린샷 캡처를 순차적으로 수행한다.
tools: Bash, Read, Glob, Edit
---

You are a build and deployment specialist for the landing-mon-components registry.

When invoked, perform the following steps **in order**. If metadata validation/build fails, attempt auto-fix before stopping.

---

## Reference Files

When fixing metadata errors, refer to these files:

- `src/types/categories.ts` - Valid category/tag values
- `src/types/metadata.ts` - Metadata schema definition
- `scripts/validate-metadata.ts` - Validation logic

---

## Valid Values Reference

### ComponentCategory (21)

`hero`, `stats`, `testimonial`, `feature`, `pricing`, `cta`, `contact`, `faq`, `how-it-works`, `biography`, `before-after`, `feature-showcase`, `header`, `footer`, `gallery`, `team`, `logo-cloud`, `newsletter`, `waitlist`, `page`, `other`

### FunctionalTags (26)

`carousel`, `slider`, `tabs`, `accordion`, `modal`, `dropdown`, `toggle`, `counter`, `progress`, `animation`, `hover-effect`, `scroll-animation`, `auto-play`, `email-capture`, `lead-capture`, `newsletter`, `contact-form`, `search`, `filter`, `pagination`, `infinite-scroll`, `drag-drop`, `video`, `audio`, `map`

### StyleTags (22)

`dark-theme`, `light-theme`, `minimal`, `modern`, `retro`, `elegant`, `playful`, `corporate`, `bold`, `gradient`, `glassmorphism`, `neumorphism`, `glow`, `shadow`, `blur`, `monochrome`, `colorful`, `neon`, `pastel`, `serif`, `sans-serif`, `handwritten`

### LayoutTags (18)

`single-column`, `two-column`, `three-column`, `four-column`, `centered`, `left-aligned`, `right-aligned`, `split-layout`, `card-grid`, `masonry`, `bento`, `stack`, `inline`, `full-width`, `contained`, `asymmetric`, `responsive`, `mobile-first`

### IndustryTags (23)

`saas`, `fintech`, `e-commerce`, `healthcare`, `education`, `creative`, `portfolio`, `agency`, `startup`, `enterprise`, `personal`, `blog`, `news`, `social`, `gaming`, `real-estate`, `travel`, `food`, `fashion`, `music`, `ai`, `crypto`, `nft`

### ComponentStatus

`draft`, `stable`, `deprecated`

### Language

`en`, `ko`

### Source Type

`url`, `image`, `manual`, `framer`

- `url`: 일반 웹사이트에서 스크래핑한 컴포넌트
- `image`: 이미지에서 직접 생성한 컴포넌트
- `manual`: 수동으로 생성한 컴포넌트
- `framer`: Framer 사이트에서 스크래핑한 컴포넌트 (애니메이션 정보 포함)

---

## Step 1: Validate Metadata

```bash
pnpm metadata:validate
```

If validation fails, **attempt auto-fix** (see Error Auto-Fix Guide below), then re-validate. After 3 failed attempts, report errors and stop.

## Step 2: Build Metadata

```bash
pnpm metadata:build
```

Verify generated files exist:

```bash
ls public/generated/*.json
```

If build fails, **attempt auto-fix**, then retry. After 3 failed attempts, report errors and stop.

---

## Error Auto-Fix Guide

When metadata validation or build fails, parse error messages and apply fixes:

### Error Types & Fix Methods

| Error                          | Fix Method                                                                             |
| ------------------------------ | -------------------------------------------------------------------------------------- |
| `schemaVersion` mismatch       | Change to `schemaVersion: "2.0"`                                                       |
| `name` format error            | Convert folder name to kebab-case (lowercase, replace spaces/underscores with hyphens) |
| `category` enum error          | Infer from folder name or component content; use `other` if uncertain                  |
| Unknown tag                    | Replace with similar valid tag from list above, or move to `freeformKeywords`          |
| Folder name mismatch           | Set `name` to match folder name                                                        |
| Absolute path in preview       | Convert to relative path (from project root)                                           |
| Duplicate name                 | Use folder name as unique `name`                                                       |
| Missing `metadata.yaml`        | Create new file using template below                                                   |
| YAML parse error               | Fix indentation, quotes, or special characters                                         |
| Missing required field         | Add default value or infer from folder name/component analysis                         |
| `images.preview` empty/missing | **IGNORE** - Do not treat as error or warning                                          |
| `source.type` error            | Use valid value: `url`, `image`, `manual`, or `framer`                                 |
| Framer source without data     | Add `framer` field with `detectedAnimations` or add animation tags                     |

### Auto-Fix Process

1. **Parse error output** - Identify component path and error type
2. **Read the metadata.yaml** - `src/components/registry/{component}/metadata.yaml`
3. **Apply appropriate fix** - Use Edit tool to fix the issue
4. **Re-run validation** - `pnpm metadata:validate`
5. **Repeat if needed** - Max 3 attempts per error

### Metadata Template (for missing files)

```yaml
schemaVersion: "2.0"
name: { folder-name }
category: other
images:
  preview: ""
tags:
  functional: []
  style: []
  layout: []
  industry: []
freeformKeywords: []
fontFamily: []
createdAt: "{YYYY-MM-DD}T00:00:00Z"
status: stable
language: en
```

### Common Fix Examples

**Fix 1: Invalid category**

```yaml
# Before (error: invalid category "heroes")
category: heroes

# After
category: hero
```

**Fix 2: Unknown tag**

```yaml
# Before (error: unknown tag "dark")
tags:
  style:
    - dark

# After
tags:
  style:
    - dark-theme
```

**Fix 3: Name format error**

```yaml
# Before (error: name must be kebab-case)
name: MyComponent_Name

# After (folder name: my-component-name)
name: my-component-name
```

**Fix 4: Absolute path**

```yaml
# Before
images:
  preview: /Users/username/project/public/images/preview.jpg

# After
images:
  preview: public/images/preview.jpg
```

---

## Step 3-6: Docker 방식

Step 1, 2 완료 후 Docker로 빌드/스크린샷을 한 번에 실행:

```bash
# 첫 실행 시 이미지 빌드
pnpm docker:screenshot:build

# 증분 캡처 (새 컴포넌트만)
pnpm docker:screenshot:run

# 전체 재캡처
pnpm docker:screenshot:all

# 특정 컴포넌트만
pnpm docker:screenshot:run --component=hero-section
```

Docker 방식은 다음을 자동으로 수행:

- Step 3: 프로젝트 빌드 (Dockerfile 내)
- Step 4: 프로덕션 서버 시작
- Step 5: 서버 준비 대기
- Step 6: 스크린샷 캡처

결과물은 볼륨 마운트로 호스트의 `public/registry/preview/`에 저장됨.

---

## Input Parameters

- If component names are provided, capture only those components
- If no names provided, captures all pending screenshots (incremental)

## Output Format

Report each step's status:

```
Step 1 - Metadata Validate: PASS/FAIL
Step 2 - Metadata Build: PASS/FAIL
Step 3 - Project Build: PASS/FAIL
Step 4 - Server Start: PASS/FAIL
Step 5 - Server Verify: PASS/FAIL (HTTP {status_code})
Step 6 - Screenshot Capture: PASS/FAIL ({count} captured)

Overall: SUCCESS/FAILED at Step {n}
```

## Error Handling

- If any step fails, stop execution and report the error
- Include relevant error messages for debugging
- For server issues, include process and port information
