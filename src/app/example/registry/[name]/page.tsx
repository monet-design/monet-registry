import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";
import dynamic from "next/dynamic";

interface PageProps {
  params: Promise<{ name: string }>;
}

export default async function ComponentPage({ params }: PageProps) {
  const { name: componentName } = await params;

  const registryDir = path.join(process.cwd(), "src/components/registry");

  // Ensure registry directory exists
  if (!fs.existsSync(registryDir)) {
    return <div>Registry directory not found: {registryDir}</div>;
  }

  const components = fs.readdirSync(registryDir).filter((file) => {
    return fs.statSync(path.join(registryDir, file)).isDirectory();
  });

  if (!components.includes(componentName)) {
    notFound();
  }

  const Component = dynamic(() =>
    import(`@/components/registry/${componentName}/index`).catch(() => {
      return () => <div>Failed to load component</div>;
    })
  );

  return (
    <>
      <style>{`
        header, footer { display: none !important; }
        #app-root { min-height: 0 !important; display: block !important; }
      `}</style>
      <div className="min-h-screen flex items-center justify-center bg-white">
        <Component />
      </div>
    </>
  );
}
