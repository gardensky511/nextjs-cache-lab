export const ComponentC = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/posts/${3}`);
  const post = await response.json();
  return (
    <>
      <pre>C: {post.title}</pre>
      <div>ID: {post.id}</div>
    </>
  );
};
