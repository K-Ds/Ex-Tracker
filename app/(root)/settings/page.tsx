import { UserButton, UserProfile } from '@clerk/nextjs';
import ClientPromise from '@/lib/mongodb';

export default async function Home() {
  const connection = await ClientPromise;
  console.log(connection);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10">
      <UserProfile />
    </main>
  );
}
