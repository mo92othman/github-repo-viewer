'use client';
import Image from 'next/image';
import SearchUserField from '@/components/common/SearchUserField';
import Link from 'next/link';
import { GitHubLogo } from '@/constants';

export default function Header() {
  return (
    <header className="w-full bg-gray-900 text-white shadow-lg mb-10 p-4 px-10">
      <div className="flex flex-col sm:flex-row items-center sm:justify-between space-y-4 sm:space-y-0">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src={GitHubLogo}
            alt="GitHub Logo"
            width={40}
            height={40}
            className="w-10 h-10"
          />
          <span className="text-xl font-bold">GitHub Repos Viewer</span>
        </Link>

        <div className="w-full sm:w-auto flex justify-center">
          <SearchUserField />
        </div>
      </div>
    </header>
  );
}
