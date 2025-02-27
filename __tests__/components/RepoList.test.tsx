import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import RepoList from '@/components/RepoList';
import { useRepos } from '@/hooks/useRepos';

// Mock the `useRepos` hook
jest.mock('@/hooks/useRepos', () => ({
  useRepos: jest.fn(),
}));

describe('RepoList Component', () => {
  it('should render a list of repositories when data is successfully fetched', () => {
    // Mock the hook to simulate a successful data fetch
    const mockRepos = [
      { id: 1, name: 'Repo 1', description: 'Description 1' },
      { id: 2, name: 'Repo 2', description: 'Description 2' },
    ];

    (useRepos as jest.Mock).mockReturnValue({
      data: mockRepos,
      isLoading: false,
      error: null,
    });

    render(<RepoList />);

    // Check if the repo names are in the document
    expect(screen.getByText('Repo 1')).toBeInTheDocument();
    expect(screen.getByText('Repo 2')).toBeInTheDocument();
    expect(screen.getByText('Description 1')).toBeInTheDocument();
    expect(screen.getByText('Description 2')).toBeInTheDocument();
  });
  it('should display an error message when there is an error fetching repositories', () => {
    // Mock the hook to simulate an error
    (useRepos as jest.Mock).mockReturnValue({
      data: [],
      isLoading: false,
      error: new Error('Error loading repositories'),
    });

    render(<RepoList />);

    // Check if the error message is in the document
    expect(screen.getByText('Error loading repositories')).toBeInTheDocument();
  });
});
