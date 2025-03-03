import { useQuery } from '@tanstack/react-query';
import { fetchRepoDetails } from '@/lib/api';

type RepoDetails = {
  name: string;
  description: string;
};

export const useRepoDetails = (username: string, repoName: string) => {
  return useQuery<RepoDetails>({
    queryKey: ['repoDetails', repoName],
    queryFn: () => fetchRepoDetails(username, repoName),
  });
};
