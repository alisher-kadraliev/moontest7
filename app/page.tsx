import prisma from "@/lib/prisma";
import Link from "next/link";

interface Post {
  id: number;
  name: string;
  email: string;
}

export default async function Home() {
  const posts = await prisma.user.findMany()
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
