import Category from '@/components/Category';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export function CategoryLayout() {
  return (
    <div className="flex flex-col sm:flex-row sm:justify-center">
      <Suspense fallback={<div>Loading...</div>}>
        <Category />
      </Suspense>
      <Outlet />
    </div>
  );
}
