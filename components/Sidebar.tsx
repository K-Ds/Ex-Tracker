'use client';

import Image from 'next/image';
import Link from 'next/link';
import { SignOutButton } from '@clerk/nextjs';
import { usePathname } from 'next/navigation';
import {
  BiSolidHomeCircle,
  BiSolidChart,
  BiSolidReceipt,
  BiSolidWallet,
  BiSolidColor,
  BiSolidLogOut,
} from 'react-icons/bi';
import clsx from 'clsx';

const sidebarItems = [
  { name: 'Dashboard', Icon: BiSolidHomeCircle, url: '/dashboard' },
  { name: 'Transactions', Icon: BiSolidChart, url: '/transactions' },
  { name: 'Invoices', Icon: BiSolidReceipt, url: '/invoices' },
  { name: 'Wallet', Icon: BiSolidWallet, url: '/wallet' },
  { name: 'Settings', Icon: BiSolidColor, url: '/settings' },
];

const Sidebar = () => {
  const pathname = usePathname().split('/')[1];

  return (
    <aside className="flex flex-col justify-between bg-gray-100 w-1/5 px-3 py-5 min-h-full space-y-10">
      <header className="flex items-center space-x-2">
        <Image src={'/logo.svg'} width={50} height={50} alt="logo" />
        <span className="font-bold">Ex-Tracker</span>
      </header>
      <div className="flex flex-col space-y-3 flex-1">
        {sidebarItems.map((item) => (
          <Link
            key={item.name}
            href={item.url}
            className={clsx(
              'flex items-center space-x-4 font-medium px-3 py-2 w-full rounded-lg',
              item.name.toLowerCase() == pathname
                ? 'bg-primary text-light-300'
                : 'text-light-200'
            )}
          >
            {<item.Icon />}
            <p>{item.name}</p>
          </Link>
        ))}
      </div>
      <footer className="flex items-center space-x-4 font-semibold px-3 py-2 w-full rounded-lg">
        <BiSolidLogOut />
        <SignOutButton />
      </footer>
    </aside>
  );
};

export default Sidebar;
