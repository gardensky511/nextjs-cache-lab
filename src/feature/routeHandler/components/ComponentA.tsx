export const ComponentA = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/posts/${3}`, {
    next: { revalidate: 30 },
  });
  const post = await response.json();
  return (
    <>
      <pre>A: {post.title}</pre>
      <div>ID: {post.id} (30秒間キャッシュ)</div>
    </>
  );
};
