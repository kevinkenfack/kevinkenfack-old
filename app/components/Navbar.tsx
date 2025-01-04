'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Navbar() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <nav className="fixed top-4 left-0 right-0 z-50">
      <div className="px-3 py-2 sm:w-[92%] md:w-[80%] lg:w-[640px] backdrop-blur-[5px] rounded-full m-auto bg-white/10 flex items-center justify-between shadow-lg ring-1 ring-white/10">
        {/* Logo/Avatar */}
        <Link href="/" className="relative">
          <div className="h-[38px] w-[38px] ring-1 ring-white/10 rounded-full flex items-center justify-center overflow-hidden">
            <Image
              src="/avatar.jpg"
              alt="avatar"
              width={34}
              height={34}
              className="rounded-full"
            />
            <span className="absolute inset-x-1 w-full -bottom-[7px] h-[1px] bg-gradient-to-r from-blue-500/0 via-blue-500 to-blue-500/0" />
          </div>
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center h-full justify-end gap-8">
          <Link href="/skills" className="text-white hover:text-blue-500 transition-colors">
            Skills
          </Link>
          <Link href="/projects" className="text-white hover:text-blue-500 transition-colors">
            Projects
          </Link>
          <Link href="/blog" className="text-white hover:text-blue-500 transition-colors">
            Blog
          </Link>

          {/* Theme Toggle */}
          <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-white/10 transition-colors">
            {theme === 'light' ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
} 