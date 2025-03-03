import { useQuery } from '@tanstack/react-query';
import { fetchUserRepos } from '@/lib/api';
import { Repository } from '@/lib/types';

export const useRepos = (username: string, page: number, perPage: number) => {
  return useQuery<Repository[]>({
    queryKey: ['repos', page, perPage],
    queryFn: () => fetchUserRepos(username, page, perPage),
  });
};
