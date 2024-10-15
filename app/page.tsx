import Link from "next/link";

interface Post {
  id: number;
  name: string;
  email: string;
}

export default async function Home() {
  const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/infoget`, {
    cache: "no-store",
  })
  const posts = await data.json()
  return (
    <ul>
      {posts.map((post: Post) => (
        <Link key={post.id} href={`/post/${post.id}`}>
          <li>{post.name}</li>
          <li>{post.email}</li>
        </Link>
      ))}
    </ul>
  );
}
