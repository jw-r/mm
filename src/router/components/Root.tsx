import { Center } from '@/components/shared/Center';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { Outlet } from 'react-router-dom';
import { RouteChangeTracker } from './RouteChangeTracker';

export function Root() {
  return (
    <div className="min-h-screen">
      <RouteChangeTracker />
      <ErrorBoundary fallback={<Center>알 수 없는 에러가 발생했어요, 잠시 후 다시 시도해주세요</Center>}>
        <Suspense fallback={<Center>Loading...</Center>}>
          <Outlet />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}
