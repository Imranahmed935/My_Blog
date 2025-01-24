import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

export default async function Profile() {
  const { isAuthenticated } = getKindeServerSession();
  const isUserAuthenticated = await isAuthenticated();

  if (!isUserAuthenticated) {
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
