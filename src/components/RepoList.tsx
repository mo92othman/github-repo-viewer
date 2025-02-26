import { useRepos } from '@/hooks/useRepos';
import RepoListItem from './RepoListItem';

export default function RepoList() {
  const { data: repos, isLoading, error } = useRepos();

  if (isLoading) return <p>Loading repositories...</p>;
  if (error) return <p>Error loading repositories</p>;

  console.log(repos?.length);

  return (
    <div className="ml-8 mr-8 mt-4">
      <h1 className="w-full bg-gray-900 p-6 rounded-lg">Repo List</h1>
      <ul className="grid grid-cols-3 gap-6 mt-4 ">
        {repos?.map((repo) => (
          <RepoListItem
            key={repo.id}
            name={repo.name}
            description={repo.description}
          />
        ))}
      </ul>
    </div>
  );
}
