import Link from "next/link";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import LoginBtn from "../LoginBtn/LoginBtn";
import Logout from "../Logout/Logout";

export default async function Header() {
  const { isAuthenticated } = getKindeServerSession();
  const isUserAuthenticated = await isAuthenticated();

  return (
    <nav className="lg:w-7/12 mx-auto flex py-4 justify-between border-b-2 border-gray-600">
      <h1 className="text-2xl font-bold text-black">My Blog</h1>
      <div className="flex gap-4">
        <Link href={"/"}>
          <button className="border border-gray-500 px-2 rounded">Home</button>
        </Link>

        <Link href={isUserAuthenticated ? "/Profile" : "/api/auth/login"}>
          <button className="border border-gray-500 px-2 rounded">Profile</button>
        </Link>

        {isUserAuthenticated ? <Logout /> : <LoginBtn />}
      </div>
    </nav>
  );
}
