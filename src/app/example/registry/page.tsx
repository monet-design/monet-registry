import fs from 'fs';
import path from 'path';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import dynamic from 'next/dynamic';

// Force dynamic rendering since we are reading from the filesystem and using searchParams
export const dynamicParams = true;

interface PageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function RegistryPage({ searchParams }: PageProps) {
  const resolvedSearchParams = await searchParams;
  const name = resolvedSearchParams.name;
  
  const registryDir = path.join(process.cwd(), 'src/components/registry');
  
  // Ensure registry directory exists
  if (!fs.existsSync(registryDir)) {
    return <div>Registry directory not found: {registryDir}</div>;
  }

  const components = fs.readdirSync(registryDir).filter(file => {
    return fs.statSync(path.join(registryDir, file)).isDirectory();
  });

  if (name) {
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
    
    const Component = dynamic(() => import(`@/components/registry/${componentName}/index`).catch(() => {
        return () => <div>Failed to load component</div>
    }));

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

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold mb-8">Component Registry</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {components.map((component) => (
          <Link 
            key={component} 
            href={`/example/registry?name=${component}`}
            className="block p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border"
          >
            <h2 className="text-xl font-semibold mb-2">{component}</h2>
            <p className="text-gray-500 text-sm">View component &rarr;</p>
          </Link>
        ))}
        {components.length === 0 && (
            <div className="col-span-full text-center text-gray-500 py-12">
                No components found in registry.
            </div>
        )}
      </div>
    </div>
  );
}
