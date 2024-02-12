import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import ClipLoader from 'react-spinners/ClipLoader';
import { Center } from './Center';

export function ClipSuspense() {
  return (
    <Suspense
      fallback={
        <Center>
          <ClipLoader color="black" size={24} />
        </Center>
      }
    >
      <Outlet />
    </Suspense>
  );
}
