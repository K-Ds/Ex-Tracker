'use client';

import { useRouter } from 'next/router';

export default async function Home() {
  const router = useRouter();
  router.push('/dashboard');
  return <div></div>;
}
