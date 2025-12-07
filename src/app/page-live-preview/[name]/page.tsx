import fs from "fs";
import path from "path";
import dynamic from "next/dynamic";

interface PageProps {
  params: Promise<{ name: string }>;
}

export async function generateStaticParams() {
  const pagesDir = path.join(process.cwd(), "src/components/registry/pages");

  if (!fs.existsSync(pagesDir)) {
    return [];
  }

  const pages = fs.readdirSync(pagesDir).filter((file) => {
    return fs.statSync(path.join(pagesDir, file)).isDirectory();
  });

  return pages.map((name) => ({ name }));
}

export default async function PageLivePreview({ params }: PageProps) {
  const { name: pageName } = await params;

  const PageComponent = dynamic(
    () =>
      import(`@/components/registry/pages/${pageName}/index`).catch(() => {
        return () => <div>Failed to load page component</div>;
      })
  );

  return (
    <>
      <style>{`
        #app-root { min-height: 0 !important; display: block !important; }
      `}</style>
      <div className="min-h-screen bg-white">
        <PageComponent />
      </div>
    </>
  );
}
