`/agent-input/how-it-works/2.png` 이미지에 대해서 다음 작업 수행하라.

1. img-to-component agent를 병렬로 호출해 컴포넌트 구현한다.
2. 구현된 컴포넌트들에 대해서, component-implement-check agent를 순차적으로 호출해 디자인 점검하고 개선한다.

---

business-license-steps 컴포넌트에 대해서, 각 카드들의 스타일을 다음과
같이 개선하라.

- 원본이미지처럼 넉넉한 고정 높이를 갖고, number indicator는 상단정렬,
  문구들이 하단 정렬되도록 하라.
- 원본이미지처럼 일러스트를 감싼 box가 square ratio로, 100% height를
  갖도록 하라.
- 원본이미지처럼 각 일러스트들의 배경을 투명하게 제거하라. sharp mcp를
  사용하라.
- 원본 이미지와 동일한 줄바꿈, 버튼 너비로 구현되도록 개선하라.
