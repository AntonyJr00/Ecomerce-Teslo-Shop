import { Footer, Sidebar, TopMenu } from "@components/index";

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="w-full min-h-screen dark:bg-slate-900">
      <TopMenu />
      <Sidebar />
      <div className="px-0 md:px-5 dark:text-white h-full">{children}</div>
      <Footer />
    </main>
  );
}
