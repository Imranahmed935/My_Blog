import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

export default async function Profile() {
  try {
    const session = getKindeServerSession();
    if (!session) {
      console.error("Failed to retrieve session");
      redirect("/api/auth/login");
      return;
    }

    const isUserAuthenticated = await session.isAuthenticated();
    if (!isUserAuthenticated) {
      redirect("/api/auth/login?post_login_redirect_url=/protected");
    }
  } catch (error) {
    console.error("Error in session or authentication check:", error);
    redirect("/api/auth/login");
  }

  return (
    <div className="lg:w-7/12 mx-auto py-4 text-center">
      <h1 className="text-3xl font-bold text-black">Welcome to your profile!</h1>
      <p className="mt-4 text-lg text-gray-600">
        This is a protected page. Only authenticated users can view this.
      </p>
    </div>
  );
}
