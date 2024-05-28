import { notFound } from "next/navigation";

interface Props {
  params: {
    id: string;
  };
}

export default function CategoryPage({ params }: Props) {
  const { id } = params;
  if (id === "kids") notFound();
  return (
    <div>
      <h1 className="text-white font-bold text-lg">Category ID: {id}</h1>
    </div>
  );
}
