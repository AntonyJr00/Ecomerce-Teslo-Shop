export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="bg-rose-950 min-h-screen text-stone-50">{children}</main>
  );
}
