import { SignUp } from '@clerk/nextjs';

export default function Page() {
  return (
    <main className="flex w-full justify-center py-4">
      <SignUp />
    </main>
  );
}
