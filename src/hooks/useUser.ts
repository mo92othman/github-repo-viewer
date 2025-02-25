import { useQuery } from '@tanstack/react-query';
import { fetchUserData } from '@/lib/api';

export const useUser = () => {
  return useQuery({
    queryKey: ['user'],
    queryFn: fetchUserData,
  });
};
