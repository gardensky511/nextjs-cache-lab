import { getPostCached } from '@/feature/useCache/lib/getPostCached';

export const ComponentB = async () => {
  const post = await getPostCached({ id: 2 });
  return (
    <>
      <pre>B: {post.title}</pre>
      <div>ID: {post.id}</div>
    </>
  );
};
