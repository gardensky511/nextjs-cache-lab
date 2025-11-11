import { cache } from 'react';
import axios from 'axios';

export const getPostCached = cache(async (id: number) => {
  const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const execId = crypto.randomUUID();
  return { ...data, id: execId };
});
