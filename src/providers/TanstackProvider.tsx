import { QueryCache, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactNode, useState } from 'react';

function TanstackProvider({ children }: { children: ReactNode }) {
  const [queryClient] = useState(
    new QueryClient({
      defaultOptions: {
        queries: {
          retry: 0,
        },
      },
      queryCache: new QueryCache(),
    }),
  );

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}

export { TanstackProvider };
