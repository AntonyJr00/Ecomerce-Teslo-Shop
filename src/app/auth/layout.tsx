import { redirect } from "next/navigation";
import { auth } from "../../auth.config";

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  console.log("Layout -> 11", { session });

  if (session?.user) redirect("/");

  return (
    <main className="min-h-screen flex justify-center">
      <div className="w-full sm:w-[300px] px-10">{children}</div>
    </main>
  );
}
