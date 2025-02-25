'use client';
import RepoList from '@/components/RepoList';
import UserInfo from '@/components/UserInfo';
import { useUser } from '@/hooks/useUser';

export default function Home() {
  const { data: user, isLoading, error } = useUser();
  console.log('user ', user);
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-4xl font-bold text-center">Overview page</h1>
      <p>{user.name}</p>
      <UserInfo />
      <RepoList />
    </div>
  );
}
