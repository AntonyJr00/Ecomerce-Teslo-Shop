import { Sidebar, TopMenu } from "@components/index";

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="bg-rose-950 min-h-screen">
      <TopMenu />
      <Sidebar />
      <div className="px-0 md:px-5">{children}</div>
    </main>
  );
}
