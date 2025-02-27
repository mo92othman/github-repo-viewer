import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import RepoListItem from '@/components/RepoListItem';

describe('RepoListItem Component', () => {
  const mockRepo = {
    name: 'repo-name',
    description: 'This is a sample repo description',
  };

  it('should render repo name and description correctly', () => {
    render(
      <RepoListItem name={mockRepo.name} description={mockRepo.description} />,
    );

    // Check if the name and description are rendered in the document
    expect(screen.getByText(mockRepo.name)).toBeInTheDocument();
    expect(screen.getByText(mockRepo.description)).toBeInTheDocument();
  });

  it('should render a link with the correct href', () => {
    render(
      <RepoListItem name={mockRepo.name} description={mockRepo.description} />,
    );

    // Find the link and check the `href` attribute
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', `/repo/${mockRepo.name}`);
  });
});
