import { NextResponse, NextRequest } from 'next/server';
import axios from 'axios';

export async function GET(_req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const postId = parseInt(id, 10);

  const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
  const execId = crypto.randomUUID();

  return NextResponse.json({ ...data, id: execId });
}
