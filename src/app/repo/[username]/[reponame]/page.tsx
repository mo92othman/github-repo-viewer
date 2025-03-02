'use client';
import { useParams } from 'next/navigation';
import { useCommits } from '@/hooks/useCommit';
import { useRepoDetails } from '@/hooks/useRepoDetails';

export default function RepoDetailPage() {
  const { username, reponame } = useParams();

  console.log('username', username);
  console.log('reponame', reponame);

  const {
    data: commits,
    isLoading: commitsLoading,
    isError: commitsError,
  } = useCommits(username as string, reponame as string);

  const {
    data: repoDetails,
    isLoading: repoLoading,
    isError: repoError,
  } = useRepoDetails(username as string, reponame as string);

  if (repoLoading || commitsLoading) {
    return <p>Loading...</p>;
  }
  if (repoError || commitsError) {
    return <p>Error fetching data</p>;
  }
  return (
    <div className="p-6">
      <div className="p-6 text-center">
        <h1 className="text-3xl font-bold">{reponame}</h1>
      </div>
      <p className="w-full bg-gray-400 dark:bg-gray-600 p-6 rounded-lg flex items-center r">
        <span className="font-bold text-gray-100  bg-blue-950 p-2 px-4 rounded-full mr-2 max-h-10">
          Description:
        </span>
        {repoDetails?.description}
      </p>
      <h2 className="text-xl font-semibold mt-4">Last 5 Commits:</h2>
      <ul className="mt-2">
        {commits?.map((commit) => (
          <li key={commit.sha} className="border p-2 mt-2 rounded">
            <p className="font-semibold">{commit.commit.author.name}</p>
            <p className="text-gray-400">{commit.commit.message}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
