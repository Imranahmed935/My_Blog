import Link from "next/link";

export default function Header() {
  return (
    <nav className="lg:w-7/12 mx-auto flex py-4 justify-between">
      <h1 className="text-2xl font-bold text-black">My Blog</h1>
      <div className="flex gap-4">
        <Link href={"/"}>
          {" "}
          <button className="border border-gray-500 px-2 rounded">Home</button>
        </Link>
        <Link href={"/Profile"}>
          {" "}
          <button className="border border-gray-500 px-2 rounded">
            Profile
          </button>
        </Link>
        <Link href={"/Login"}>
          <button className="bg-black text-white px-2 rounded">LogIn</button>
        </Link>
        
          {" "}
          <button className="bg-black text-white px-2 rounded">LogOut</button>
    
      </div>
    </nav>
  );
}
