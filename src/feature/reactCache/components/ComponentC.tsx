import { getPostCached } from '@/feature/reactCache/lib/getPostCached';

export const ComponentC = async () => {
  const post = await getPostCached(1);
  return (
    <>
      <pre>C: {post.title}</pre>
      <div>ID: {post.id}</div>
    </>
  );
};
