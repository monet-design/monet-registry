import { Suspense, lazy, useMemo } from "react";

// 모든 registry 컴포넌트를 동적으로 import하기 위한 glob import
const componentModules = import.meta.glob(
  "../../src/components/registry/*/index.tsx"
);

// 컴포넌트 이름으로 경로 매핑
const getComponentPath = (name: string) => {
  return `../../src/components/registry/${name}/index.tsx`;
};

// URL에서 컴포넌트 이름 추출
const getComponentName = () => {
  const params = new URLSearchParams(window.location.search);
  return params.get("component") || "";
};

// 로딩 컴포넌트
function LoadingFallback() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        fontSize: "1.5rem",
        color: "#666",
      }}
    >
      Loading component...
    </div>
  );
}

// 에러 컴포넌트
function ErrorComponent({ componentName }: { componentName: string }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        fontSize: "1.25rem",
        color: "#ef4444",
        gap: "1rem",
      }}
    >
      <div>Component not found: {componentName}</div>
      <div style={{ fontSize: "0.875rem", color: "#666" }}>
        Available components: {Object.keys(componentModules).length}
      </div>
    </div>
  );
}

// 컴포넌트 없음 안내
function NoComponentSelected() {
  const componentNames = Object.keys(componentModules).map((path) => {
    const match = path.match(/\/([^/]+)\/index\.tsx$/);
    return match ? match[1] : null;
  }).filter(Boolean);

  return (
    <div
      style={{
        padding: "2rem",
        maxWidth: "800px",
        margin: "0 auto",
      }}
    >
      <h1 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>
        Component Screenshot Server
      </h1>
      <p style={{ marginBottom: "1rem", color: "#666" }}>
        Use <code>?component=name</code> to render a specific component.
      </p>
      <details>
        <summary style={{ cursor: "pointer", marginBottom: "0.5rem" }}>
          Available components ({componentNames.length})
        </summary>
        <ul
          style={{
            maxHeight: "400px",
            overflow: "auto",
            fontSize: "0.875rem",
            lineHeight: "1.5",
          }}
        >
          {componentNames.map((name) => (
            <li key={name}>
              <a href={`?component=${name}`}>{name}</a>
            </li>
          ))}
        </ul>
      </details>
    </div>
  );
}

export function ComponentRenderer() {
  const componentName = getComponentName();

  // 컴포넌트를 동적으로 로드
  const Component = useMemo(() => {
    if (!componentName) return null;

    const path = getComponentPath(componentName);
    const loader = componentModules[path];

    if (!loader) return null;

    return lazy(() =>
      loader().then((module: any) => ({
        default: module.default,
      }))
    );
  }, [componentName]);

  // 컴포넌트 이름이 없으면 안내 페이지
  if (!componentName) {
    return <NoComponentSelected />;
  }

  // 컴포넌트를 찾을 수 없음
  if (!Component) {
    return <ErrorComponent componentName={componentName} />;
  }

  // 컴포넌트 렌더링
  return (
    <Suspense fallback={<LoadingFallback />}>
      <Component />
    </Suspense>
  );
}
