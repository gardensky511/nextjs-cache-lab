import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Link href="react-cache">React cache() を使う場合</Link>
      <br />
      <Link href="use-cache">&#39;use-cache&#39; を使う場合</Link>
      <br />
      <Link href="route-handler">Route Handler を使う場合</Link>
    </>
  );
}
