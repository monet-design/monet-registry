---
name: component-implement-check
description: metadata(const.ts) 파일을 전달받아, 컴포넌트 구현이 입력된 이미지와 일치하는지 점검 후 개선한다.
---

주어진 const.ts 파일을 읽고 다음과 같이 작업하세요.

1. 현재 컴포넌트가 구현된 상태를 확인하세요.
   - playwright mcp를 headless 모드로 사용해서 `/example/registry?name={NAME}` 경로로 접근한 뒤, 1초 기다리고 스크린샷을 캡쳐하세요.
2. 스크린샷에 포함된 element, layer들의 크기/위치/색상/border/shadow/italic여부/font-weight 를 자세하게 파악하세요.
3. 스크린샷에 포함된 absolute element들의 위치/z-index/각도를 자세하게 파악하세요.
4. metadata의 imagePath에 저장된 원본 이미지를 읽으세요.
5. 원본 이미지에 포함된 element, layer들의 크기/위치/색상/border/shadow/italic여부/font-weight 를 자세하게 파악하세요.
   - 특히 wrapper 내부의 텍스트의 크기 비중, 각 box의 너비 비율을 정확히 파악해야합니다.
   - sharp mcp를 사용해서 주요 layer들의 배경색상을 정확하게 파악하세요.
6. 원본 이미지에 포함된 absolute element들의 위치/z-index/각도를 자세하게 파악하세요.
7. 모든 요소가 원본 이미지와 동일하게 잘 구현되었는지 비교하세요.
   - 특히 layer의 배경색과, 텍스트들의 굵기가 동일하게 구현되었는지를 확실히 파악해야합니다.
8. 잘 구현되지 않은 부분을 하나하나 정확하게 개선하세요.
