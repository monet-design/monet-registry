import fs from "fs";
import path from "path";
import dynamic from "next/dynamic";

interface PageProps {
  params: Promise<{ name: string }>;
}

export async function generateStaticParams() {
  const registryDir = path.join(process.cwd(), "src/components/registry");

  if (!fs.existsSync(registryDir)) {
    return [];
  }

  const components = fs.readdirSync(registryDir).filter((file) => {
    return fs.statSync(path.join(registryDir, file)).isDirectory();
  });

  return components.map((name) => ({ name }));
}

export default async function ComponentPage({ params }: PageProps) {
  const { name: componentName } = await params;

  const Component = dynamic(() =>
    import(`@/components/registry/${componentName}/index`).catch(() => {
      return () => <div>Failed to load component</div>;
    })
  );

  return (
    <>
      <style>{`
        #app-root { min-height: 0 !important; display: block !important; }
      `}</style>
      <div className="min-h-screen flex items-center justify-center bg-white">
        <Component />
      </div>
    </>
  );
}
