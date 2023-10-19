'use client';
import { usePathname } from 'next/navigation';
import { BiSearch, BiSolidBell } from 'react-icons/bi';
import { UserButton } from '@clerk/nextjs';
const Navbar = () => {
  const path = usePathname().split('/')[1];
  const pathname = path[0].toUpperCase() + path.slice(1);
  
  return (
    <nav className="flex items-center min-w-full  justify-between px-6 py-3">
      <span className="font-bold text-lg">{pathname}</span>
      <div className="flex items-center space-x-5 text-lg">
        <BiSearch />
        <BiSolidBell />
        <UserButton />
      </div>
    </nav>
  );
};

export default Navbar;
