'use client';
import SearchUserField from '@/components/common/SearchUserField';
import { TextRevealTW } from '@/components/common/TextRevealTW';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { GitHubLogo } from '@/constants';

export default function Home() {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <Image
        src={GitHubLogo}
        alt="GitHub Logo"
        width={200}
        height={200}
        className="rounded-xl"
      />
      <TextRevealTW text=" Welcome To GitHub Explorer 💫" />

      <button
        onClick={() => router.push('/user/JakeWharton')}
        className="px-4 py-2 bg-blue-900 text-white rounded-lg border-white hover:bg-blue-600 mt-12"
      >
        View Jake Wharton
      </button>
      <SearchUserField />
    </div>
  );
}
