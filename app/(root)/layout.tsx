import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import { ClerkProvider } from '@clerk/nextjs';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex min-w-full max-h-screen min-h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1 bg-white">
        <Navbar />
        <div className="overflow-scroll">{children}</div>
      </div>
    </main>
  );
}
