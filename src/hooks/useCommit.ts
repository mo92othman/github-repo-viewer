import { useQuery } from '@tanstack/react-query';
import { fetchCommits } from '@/lib/api';
import { Commit } from '@/lib/types';

export const useCommits = (username: string, repoName: string) => {
  return useQuery<Commit[]>({
    queryKey: ['commits', repoName],
    queryFn: () => fetchCommits(username, repoName),
  });
};
