import Sidebar from '@/components/Sidebar';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { Outlet } from 'react-router-dom';

export function SidebarLayout() {
  return (
    <div className="flex">
      <ErrorBoundary fallback={<div>에러가 발생했어요</div>}>
        <Suspense fallback={<div>Loading...</div>}>
          <Sidebar />
        </Suspense>
      </ErrorBoundary>
      <Outlet />
    </div>
  );
}
