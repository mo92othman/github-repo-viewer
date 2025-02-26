'use client';
import { useParams } from 'next/navigation';
import { useCommits } from '@/hooks/useCommit';
import { useRepoDetails } from '@/hooks/useRepoDetails';

export default function RepoDetailPage() {
  const { name } = useParams();

  const {
    data: commits,
    isLoading: commitsLoading,
    isError: commitsError,
  } = useCommits(name as string);

  const {
    data: repoDetails,
    isLoading: repoLoading,
    isError: repoError,
  } = useRepoDetails(name as string);

  if (repoLoading || commitsLoading) {
    return <p>Loading...</p>;
  }
  if (repoError || commitsError) {
    return <p>Error fetching data</p>;
  }
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">{name}</h1>
      <p className="w-full bg-gray-900 p-6 rounded-lg">
        {repoDetails?.description}
      </p>
      <h2 className="text-xl font-semibold mt-4">Last 5 Commits:</h2>
      <ul className="mt-2">
        {commits?.map((commit) => (
          <li key={commit.sha} className="border p-2 mt-2 rounded">
            <p className="font-semibold">{commit.commit.author.name}</p>
            <p className="text-gray-600">{commit.commit.message}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
