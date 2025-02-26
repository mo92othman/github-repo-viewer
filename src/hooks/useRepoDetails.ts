import { useQuery } from '@tanstack/react-query';
import { fetchRepoDetails } from '@/lib/api';

type RepoDetails = {
  name: string;
  description: string;
};

export const useRepoDetails = (repoName: string) => {
  return useQuery<RepoDetails>({
    queryKey: ['repoDetails', repoName],
    queryFn: () => fetchRepoDetails(repoName),
  });
};
