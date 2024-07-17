import { Footer, Sidebar, TopMenu } from "@components/index";
import { auth } from "../../auth.config";
import { redirect } from "next/navigation";

export default async function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  if (!session?.user) redirect("/auth/login");

  return (
    <main className="w-full min-h-screen dark:bg-slate-900">
      <TopMenu />
      <Sidebar />
      <div className="px-0 md:px-5 dark:text-white h-full">{children}</div>
      <Footer />
    </main>
  );
}
