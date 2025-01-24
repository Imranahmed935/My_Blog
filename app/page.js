import Link from "next/link";

export default async function Home() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  return (
    <div className="bg-gray-50 min-h-screen ">
      <main className="lg:w-8/12 mx-auto py-8 px-4">
        <h1 className="text-3xl font-extrabold text-center bg-gradient-to-r from-blue-500 to-green-500 text-transparent bg-clip-text p-4">
          Welcome to My Blog! 🌟
        </h1>
        <ul className="space-y-4 mt-8">
          {posts.slice(0, 30).map((post) => (
            <li
              key={post.id}
              className="p-4 bg-white shadow-md rounded-md hover:shadow-lg transition-shadow duration-300"
            >
              <Link href={`/blog/${post.id}`}>
                <div className="flex items-center justify-between">
                  <h1 className="text-xl font-semibold text-gray-800 hover:text-blue-600">
                    {post.title}
                  </h1>
                  <span className="text-gray-500 text-sm">Read More →</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
