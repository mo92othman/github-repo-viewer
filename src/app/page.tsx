'use client';
import RepoList from '@/components/RepoList';
import UserInfo from '@/components/UserInfo';
import { useUser } from '@/hooks/useUser';

export default function Home() {
  const { data: user } = useUser();
  console.log('user ', user);
  return (
    <div className="mt-8">
      <UserInfo user={user} />
      <RepoList />
    </div>
  );
}
