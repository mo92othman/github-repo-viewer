'use client';
import { useParams } from 'next/navigation';
import { useCommits } from '@/hooks/useCommit';

export default function RepoDetailPage() {
  const { name } = useParams();

  const { data: commits, isLoading, isError } = useCommits(name as string);
  console.log(commits);
  console.log(name);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (isError) {
    return <p>Error fetching commits</p>;
  }
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">{name}</h1>
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
