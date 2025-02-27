'use client';
import RepoList from '@/components/RepoList';
import UserInfo from '@/components/UserInfo';
import { useUser } from '@/hooks/useUser';

export default function Home() {
  const { data: user, isError, isLoading } = useUser();

  if (isLoading) return <p>Loading...</p>;
  if (isError || !user) return <p>Error fetching user data</p>;
  return (
    <div className="mt-8">
      <UserInfo user={user} />
      <RepoList />
    </div>
  );
}
