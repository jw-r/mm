import { QueryCache, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactNode } from 'react';

declare module '@tanstack/react-query' {
  export interface QueryMeta {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onSuccess?: (data: any) => void;
  }
}

// eslint-disable-next-line react-refresh/only-export-components
export const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onSuccess: (data, query) => {
      if (query.meta && query.meta.onSuccess) {
        query.meta.onSuccess(data);
      }
    },
  }),
});

function TanstackProvider({ children }: { children: ReactNode }) {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}

export { TanstackProvider };
