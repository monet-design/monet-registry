#!/usr/bin/env python3
"""
Registry 컴포넌트 기본 파일 생성 스크립트

사용 예시:
  python scripts/create-registry-component.py \
    --name "my-awesome-hero" \
    --image-path "agent-input/hero/my-awesome.jpg" \
    --keywords "hero, landing, dark, minimal"

  python scripts/create-registry-component.py \
    -n "feature-showcase" \
    -i "agent-input/features/showcase.png" \
    -k "feature, showcase, tabs, dark theme" \
    -f "Playfair Display, Inter"
"""

import argparse
import sys
import re
from pathlib import Path


def kebab_to_pascal(kebab_string: str) -> str:
    """
    kebab-case 문자열을 PascalCase로 변환

    예시:
      "my-awesome-hero" -> "MyAwesomeHero"
      "feature-tabs-hero" -> "FeatureTabsHero"
    """
    return "".join(word.capitalize() for word in kebab_string.split("-"))


def validate_kebab_case(name: str) -> bool:
    """
    유효한 kebab-case인지 검사
    - 소문자, 숫자, 하이픈만 허용
    - 하이픈으로 시작하거나 끝날 수 없음
    - 연속 하이픈 불가
    """
    pattern = r"^[a-z0-9]+(-[a-z0-9]+)*$"
    return bool(re.match(pattern, name))


def parse_keywords(keywords_string: str) -> list[str]:
    """
    comma-separated 문자열을 키워드 리스트로 변환

    예시:
      "hero, landing page, dark theme" -> ["hero", "landing page", "dark theme"]
    """
    keywords = [kw.strip() for kw in keywords_string.split(",")]
    return [kw for kw in keywords if kw]


def parse_font_family(font_string: str) -> list[str]:
    """
    comma-separated 폰트 문자열을 리스트로 변환

    예시:
      "Inter" -> ["Inter"]
      "Instrument Serif, Inter" -> ["Instrument Serif", "Inter"]
    """
    fonts = [f.strip() for f in font_string.split(",")]
    return [f for f in fonts if f]


def generate_const_ts(
    name: str, image_path: str, keywords: list[str], font_family: list[str]
) -> str:
    """const.ts 파일 내용 생성"""

    # keywords를 TypeScript 배열 문자열로 변환
    keywords_str = ",\n    ".join(f'"{kw}"' for kw in keywords)

    # font_family를 TypeScript 배열 문자열로 변환
    fonts_str = ", ".join(f'"{f}"' for f in font_family)

    return f'''export const metadata = {{
  imagePath: "{image_path}",
  name: "{name}",
  keywords: [
    {keywords_str},
  ],
  fontFamily: [{fonts_str}],
}};
'''


def generate_index_tsx(name: str) -> str:
    """index.tsx 기본 템플릿 생성"""

    pascal_name = kebab_to_pascal(name)

    return f'''"use client";

import {{ motion }} from "motion/react";

interface {pascal_name}Props {{
  // TODO: Define props
}}

export default function {pascal_name}(props: {pascal_name}Props) {{
  return (
    <section className="relative min-h-screen w-full">
      {{/* TODO: Implement {name} component */}}
    </section>
  );
}}
'''


def get_project_root() -> Path:
    """
    스크립트 위치 기준으로 프로젝트 루트 경로 반환
    scripts/ 폴더 안에서 실행된다고 가정
    """
    script_dir = Path(__file__).parent
    return script_dir.parent


def parse_arguments():
    parser = argparse.ArgumentParser(
        description="Registry 컴포넌트 기본 파일 생성",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
예시:
  python scripts/create-registry-component.py \\
    --name "my-hero-section" \\
    --image-path "agent-input/hero/my-hero.jpg" \\
    --keywords "hero, landing page, dark theme, minimal"
        """,
    )

    parser.add_argument(
        "-n",
        "--name",
        required=True,
        help="컴포넌트 이름 (kebab-case, 예: my-awesome-hero)",
    )

    parser.add_argument(
        "-i",
        "--image-path",
        required=True,
        help="입력 이미지 경로 (예: agent-input/hero/my-image.jpg)",
    )

    parser.add_argument(
        "-k",
        "--keywords",
        required=True,
        help="검색 키워드들 (comma-separated, 예: 'hero, landing, dark')",
    )

    parser.add_argument(
        "-f",
        "--font-family",
        default="Inter",
        help="폰트 패밀리 (comma-separated, 기본값: Inter)",
    )

    parser.add_argument(
        "--force",
        action="store_true",
        help="기존 폴더가 있어도 덮어쓰기",
    )

    return parser.parse_args()


def main():
    args = parse_arguments()

    # 1. 입력값 검증
    if not validate_kebab_case(args.name):
        print(f"Error: '{args.name}'는 유효한 kebab-case가 아닙니다.", file=sys.stderr)
        print("  - 소문자, 숫자, 하이픈만 사용 가능", file=sys.stderr)
        print("  - 예시: my-awesome-hero, feature-tabs-1", file=sys.stderr)
        sys.exit(1)

    # 2. 경로 설정
    project_root = get_project_root()
    component_dir = project_root / "src" / "components" / "registry" / args.name
    public_dir = project_root / "public" / "registry" / args.name

    # 3. 기존 폴더 존재 여부 확인
    if component_dir.exists() and not args.force:
        print(
            f"Error: 컴포넌트 폴더가 이미 존재합니다: {component_dir}", file=sys.stderr
        )
        print("  --force 옵션을 사용하여 덮어쓸 수 있습니다.", file=sys.stderr)
        sys.exit(1)

    # 4. 입력 이미지 파일 존재 확인 (경고만)
    image_full_path = project_root / args.image_path
    if not image_full_path.exists():
        print(f"Warning: 이미지 파일을 찾을 수 없습니다: {args.image_path}")
        print("  나중에 이미지를 해당 경로에 추가해주세요.")

    # 5. Keywords 및 Font family 파싱
    keywords = parse_keywords(args.keywords)
    font_family = parse_font_family(args.font_family)

    if not keywords:
        print("Error: 최소 하나의 키워드가 필요합니다.", file=sys.stderr)
        sys.exit(1)

    # 6. 폴더 생성
    component_dir.mkdir(parents=True, exist_ok=True)
    public_dir.mkdir(parents=True, exist_ok=True)

    # 7. 파일 생성
    const_content = generate_const_ts(args.name, args.image_path, keywords, font_family)
    index_content = generate_index_tsx(args.name)

    const_path = component_dir / "const.ts"
    index_path = component_dir / "index.tsx"

    const_path.write_text(const_content, encoding="utf-8")
    index_path.write_text(index_content, encoding="utf-8")

    # 8. 성공 메시지
    pascal_name = kebab_to_pascal(args.name)

    print(f"\n[SUCCESS] Registry 컴포넌트 '{args.name}' 생성 완료!\n")
    print("생성된 파일:")
    print(f"  - {const_path.relative_to(project_root)}")
    print(f"  - {index_path.relative_to(project_root)}")
    print(f"  - {public_dir.relative_to(project_root)}/ (빈 폴더)")
    print(f"\n컴포넌트 이름: {pascal_name}")
    print(f"키워드 수: {len(keywords)}")
    print(f"\n다음 단계:")
    print(f"  1. {index_path.relative_to(project_root)} 파일에서 컴포넌트 구현")
    print(f"  2. 필요한 이미지를 {public_dir.relative_to(project_root)}/ 에 추가")


if __name__ == "__main__":
    main()
