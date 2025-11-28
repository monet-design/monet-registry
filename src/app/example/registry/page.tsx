import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";
import Link from "next/link";
import dynamic from "next/dynamic";

// Force dynamic rendering since we are reading from the filesystem and using searchParams
export const dynamicParams = true;

interface PageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function RegistryPage({ searchParams }: PageProps) {
  const resolvedSearchParams = await searchParams;
  const name = resolvedSearchParams.name;

  const registryDir = path.join(process.cwd(), "src/components/registry");

  // Ensure registry directory exists
  if (!fs.existsSync(registryDir)) {
    return <div>Registry directory not found: {registryDir}</div>;
  }

  const components = fs.readdirSync(registryDir).filter((file) => {
    return fs.statSync(path.join(registryDir, file)).isDirectory();
  });

  if (name?.length > 0) {
    const componentName = Array.isArray(name) ? name[0] : name;

    if (!components.includes(componentName)) {
      notFound();
    }

    // Dynamic import of the component
    // We use a dynamic import with a template literal.
    // Note: Next.js/Webpack needs to know the path structure to bundle correctly.
    // Usually dynamic(() => import(...)) works best for client components or when we want to lazy load.
    // For a server component rendering another component, we can just try to import it.
    // However, dynamic imports with variables can be tricky.
    // Let's try to use a map if possible, but since we want it fully dynamic, we might need to rely on
    // Next.js handling of dynamic imports.

    // A common workaround for fully dynamic imports in Next.js App Router (Server Components)
    // is to use `dynamic` from `next/dynamic` but that returns a Component Type.

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

  const componentModules = await Promise.all(
    components.map(async (componentName) => {
      const Component = dynamic(() =>
        import(`@/components/registry/${componentName}/index`).catch(() => {
          return () => <div>Failed to load component</div>;
        })
      );
      return { name: componentName, Component };
    })
  );

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold mb-8">Component Registry</h1>
      <div className="flex flex-col gap-12">
        {componentModules.map(({ name: componentName, Component }) => (
          <div key={componentName} className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">{componentName}</h2>
              <Link
                href={`/example/registry?name=${componentName}`}
                className="text-blue-600 hover:text-blue-800 text-sm"
              >
                View full &rarr;
              </Link>
            </div>
            <div className="border rounded-lg bg-white p-4 overflow-auto">
              <Component />
            </div>
          </div>
        ))}
        {components.length === 0 && (
          <div className="text-center text-gray-500 py-12">
            No components found in registry.
          </div>
        )}
      </div>
    </div>
  );
}
