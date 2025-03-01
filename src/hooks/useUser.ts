import { useQuery } from '@tanstack/react-query';
import { fetchUserData } from '@/lib/api';

export const useUser = (username: string) => {
  return useQuery({
    queryKey: ['user'],
    queryFn: () => fetchUserData(username),
  });
};
