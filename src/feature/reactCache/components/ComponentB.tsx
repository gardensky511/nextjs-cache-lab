import { getPostCached } from '@/feature/reactCache/lib/getPostCached';

export const ComponentB = async () => {
  const post = await getPostCached(1);
  return (
    <>
      <pre>B: {post.title}</pre>
      <div>ID: {post.id}</div>
    </>
  );
};
