import { getPostCached } from '@/feature/reactCache/lib/getPostCached';

export const ComponentA = async () => {
  const post = await getPostCached(1);
  return (
    <>
      <pre>A: {post.title}</pre>
      <div>ID: {post.id}</div>
    </>
  );
};
