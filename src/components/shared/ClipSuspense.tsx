import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import ClipLoader from 'react-spinners/ClipLoader';

export function ClipSuspense() {
  return (
    <Suspense
      fallback={
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <ClipLoader color="black" size={24} />
        </div>
      }
    >
      <Outlet />
    </Suspense>
  );
}
