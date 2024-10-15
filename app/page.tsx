
interface Post {
  id: number;
  name: string;
}

export default async function Home() {
  const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/infoget`, {
    cache: "no-store",
  })
  const posts = await data.json()
  return (
    <ul>
      {posts.map((post: Post) => (
        <li key={post.id}>{post.name}</li>
        
      ))}
    </ul>
  );
}
