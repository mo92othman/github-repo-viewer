'use client';
import SearchUserField from '@/components/common/SearchUserField';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <button
        onClick={() => router.push('/user/JakeWharton')}
        className="px-4 py-2 bg-blue-900 text-white rounded-lg border-white hover:bg-blue-600"
      >
        View Jake Wharton
      </button>
      <SearchUserField />
    </div>
  );
}
