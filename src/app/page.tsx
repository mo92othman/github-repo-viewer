'use client';
import RepoList from '@/components/RepoList';
import UserInfo from '@/components/UserInfo';
import { useUser } from '@/hooks/useUser';
import { ClipLoader } from 'react-spinners';

export default function Home() {
  const { data: user, isError, isLoading } = useUser();

  if (isLoading)
    return (
      <div className="flex items-center justify-center h-screen">
        <ClipLoader color="#3498db" size={40} />
      </div>
    );
  if (isError || !user) return <p>Error fetching user data</p>;
  return (
    <div className="mt-8">
      <UserInfo user={user} />
      <RepoList />
    </div>
  );
}
