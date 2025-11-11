import { getPostCached } from '@/feature/useCache/lib/getPostCached';

export const ComponentC = async () => {
  const post = await getPostCached({ id: 2 });
  return (
    <>
      <pre>C: {post.title}</pre>
      <div>ID: {post.id}</div>
    </>
  );
};
