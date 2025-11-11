import axios from 'axios';

export const getPostCached = async ({ id }: { id: number }) => {
  'use cache';
  const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const execId = crypto.randomUUID();
  return { ...data, id: execId };
};
