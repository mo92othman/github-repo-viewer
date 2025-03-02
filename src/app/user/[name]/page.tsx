'use client';
import Header from '@/components/common/Header';
import RepoList from '@/components/RepoList';
import UserDoesntExist from '@/components/UserDoesntExist';
import UserInfo from '@/components/UserInfo';
import { useUser } from '@/hooks/useUser';
import { useParams } from 'next/navigation';

import { ClipLoader } from 'react-spinners';

export default function User() {
  const { name } = useParams();
  const { data: user, isError, isLoading } = useUser(name as string);

  if (isError) return;
  <>
    <UserDoesntExist />;
  </>;
  console.log(isError);
  return (
    <div>
      <Header />
      {/* {isError && <UserDoesntExist />} */}
      {isLoading ? (
        <div className="flex items-center justify-center h-screen">
          <ClipLoader color="#3498db" size={40} />
        </div>
      ) : (
        <>
          <UserInfo user={user} />
          <RepoList username={name as string} />
        </>
      )}
    </div>
  );
}
