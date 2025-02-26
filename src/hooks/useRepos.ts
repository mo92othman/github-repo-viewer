import { useQuery } from '@tanstack/react-query';
import { fetchUserRepos } from '@/lib/api';
import { Repository } from '@/lib/types';

export const useRepos = () => {
  return useQuery<Repository[]>({
    queryKey: ['repos'],
    queryFn: fetchUserRepos,
  });
};
