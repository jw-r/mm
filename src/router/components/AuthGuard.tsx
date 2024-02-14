import { Outlet } from 'react-router-dom';
import { useEffect, useLayoutEffect, useState } from 'react';
import useRouter from '@/hooks/useRouter';

export function AuthGuard() {
  const { push } = useRouter();
  const [init, setInit] = useState(false);

  useEffect(() => {
    setInit(true);
  }, []);

  useLayoutEffect(() => {
    const handleUnauthorized = () => {
      push('/login');
    };

    window.addEventListener('unauthorized', handleUnauthorized);

    return () => {
      window.removeEventListener('unauthorized', handleUnauthorized);
    };
  }, [push]);

  if (!init) return null;
  return <Outlet />;
}
