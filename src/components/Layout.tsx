import { ErrorBoundary } from 'react-error-boundary';
import { ReactNode, Suspense } from 'react';
import { Header } from './Header';
import Sidebar from './Sidebar';

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <div className="flex">
        <ErrorBoundary fallback={<div>에러가 발생했어요</div>}>
          <Suspense fallback={<div>Loading...</div>}>
            <Sidebar />
          </Suspense>
        </ErrorBoundary>
        {children}
      </div>
    </div>
  );
}
