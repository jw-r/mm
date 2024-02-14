import { Outlet } from 'react-router-dom';
import { useEffect, useLayoutEffect, useState } from 'react';
import useRouter from '@/hooks/useRouter';
import { useGetUserInfo } from '@/remotes/user/getUserInfo';

export function AuthGuard() {
  const { push } = useRouter();
  const [init, setInit] = useState(false);
  const { data: user } = useGetUserInfo();

  useEffect(() => {
    setInit(true);
    if (!user) {
      push('/login');
    }
  }, [user, push]);

  useLayoutEffect(() => {
    const handleUnauthorized = () => {
      push('/login');
    };

    window.addEventListener('unauthorized', handleUnauthorized);

    return () => {
      window.removeEventListener('unauthorized', handleUnauthorized);
    };
  }, [push]);

  if (!init || !user) return null;
  return <Outlet />;
}
