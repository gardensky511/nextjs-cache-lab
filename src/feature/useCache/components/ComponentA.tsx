import { getPostCached } from '@/feature/useCache/lib/getPostCached';

export const ComponentA = async () => {
  const post = await getPostCached({ id: 2 });
  return (
    <>
      <pre>A: {post.title}</pre>
      <div>ID: {post.id}</div>
    </>
  );
};
