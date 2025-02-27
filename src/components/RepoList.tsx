import { useRepos } from '@/hooks/useRepos';
import RepoListItem from './RepoListItem';
import { useState } from 'react';
import PaginationButton from '@/components/common/PaginationButton';
import { RiGitRepositoryCommitsFill } from 'react-icons/ri';
import { ClipLoader } from 'react-spinners';

export default function RepoList() {
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 12;

  // Fetch repos with pagination parameters
  const { data: repos = [], isLoading, error } = useRepos(currentPage, perPage);

  // Handle pagination logic
  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  if (isLoading)
    return (
      <div className="flex items-center justify-center h-screen">
        <ClipLoader color="#3498db" size={40} />
      </div>
    );
  if (error) return <p>Error loading repositories</p>;

  return (
    <div className="ml-8 mr-8 mt-4 mb-8">
      <div className="flex items-center justify-center">
        <div className="flex items-center justify-center space-x-2 w-1/2 bg-gray-300 p-6 rounded-lg dark:bg-gray-800">
          <h1 className="text-3xl">Repo List</h1>
          <RiGitRepositoryCommitsFill size={30} />
        </div>
      </div>

      <ul className="grid grid-cols-2 sm:grid-cols-3 gap-6 mt-4">
        {repos?.map((repo) => (
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
          disabled={repos.length < perPage}
          label="Next"
        />
      </div>
    </div>
  );
}
