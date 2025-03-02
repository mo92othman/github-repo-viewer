'use client';
import SearchUserField from '@/components/common/SearchUserField';
import RepoList from '@/components/RepoList';
import UserInfo from '@/components/UserInfo';
import { useUser } from '@/hooks/useUser';
import { useParams } from 'next/navigation';
import { ClipLoader } from 'react-spinners';

export default function User() {
  const { name } = useParams();
  const { data: user, isError, isLoading } = useUser(name as string);

  if (isLoading)
    return (
      <div className="flex items-center justify-center h-screen">
        <ClipLoader color="#3498db" size={40} />
      </div>
    );
  if (isError || !user) return <p>Error fetching user data</p>;
  return (
    <div className="mt-8">
      {/* <SearchUserField /> */}
      <UserInfo user={user} />
      <RepoList username={name as string} />
    </div>
  );
}
