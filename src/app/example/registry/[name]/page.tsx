import { redirect } from "next/navigation";

interface PageProps {
  params: Promise<{ name: string }>;
}

export default async function ComponentPage({ params }: PageProps) {
  const { name } = await params;
  redirect(`/live-preview/${name}`);
}
