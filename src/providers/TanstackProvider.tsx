'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState } from 'react';
// import { queryClient } from './react-query';

// const queryClient = new QueryClient();

interface TanstackProviderProps {
  children: React.ReactNode;
}

export const TanstackProvider = ({ children }: TanstackProviderProps) => {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
