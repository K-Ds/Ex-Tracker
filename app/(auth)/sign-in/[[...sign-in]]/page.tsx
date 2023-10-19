import { SignIn } from '@clerk/nextjs';
import Image from 'next/image';

export default function Page() {
  return (
    <main className="flex w-full justify-center">
      <div className="flex-1 relative h-screen">
        <Image
          src={'/expenses.jpg'}
          alt=""
          sizes="100%"
          fill={true}
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div className="flex flex-1 h-screen overflow-y-scroll py-3 justify-center items-center">
        <SignIn />
      </div>
    </main>
  );
}
