import { useRepos } from '@/hooks/useRepos';
import RepoListItem from './RepoListItem';
import { useState } from 'react';
import PaginationButton from '@/components/common/PaginationButton';

export default function RepoList() {
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 12;
  const { data: repos = [], isLoading, error } = useRepos();

  // Handle pagination logic
  const startIndex = (currentPage - 1) * perPage;
  const paginatedRepos = repos?.slice(startIndex, startIndex + perPage);

  const handleNextPage = () => {
    if (repos && startIndex + perPage < repos.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  if (isLoading) return <p>Loading repositories...</p>;
  if (error) return <p>Error loading repositories</p>;

  console.log(repos?.length);

  return (
    <div className="ml-8 mr-8 mt-4 mb-8">
      <h1 className="w-full bg-gray-900 p-6 rounded-lg">Repo List</h1>
      <ul className="grid grid-cols-2 sm:grid-cols-3 gap-6 mt-4">
        {paginatedRepos?.map((repo) => (
          <RepoListItem
            key={repo.id}
            name={repo.name}
            description={repo.description}
          />
        ))}
      </ul>
      <div className="flex justify-center mt-4 space-x-4">
        <PaginationButton
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          label="Previous"
        />
        <PaginationButton
          onClick={handleNextPage}
          disabled={startIndex + perPage >= repos.length}
          label="Next"
        />
      </div>
    </div>
  );
}
