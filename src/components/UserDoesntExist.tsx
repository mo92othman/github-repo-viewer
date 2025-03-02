// 'use client';
import { GitHubLogoCat } from '@/constants';
import Image from 'next/image';

export default function UserDoesntExist() {
  return (
    <div className="flex flex-col items-center justify-center  text-center space-y-4">
      <Image
        src={GitHubLogoCat}
        alt="User does not exist"
        width={200}
        height={200}
        className="rounded-full"
      />
      <h1 className="text-2xl font-semibold text-gray-700 dark:text-gray-300">
        User does not exist
      </h1>
    </div>
  );
}
