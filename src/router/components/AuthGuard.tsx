import { Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import useRouter from '@/hooks/useRouter';
import { useGetUserInfo } from '@/remotes/user/getUserInfo';

export function AuthGuard() {
  const { push } = useRouter();
  const [init, setInit] = useState(false);
  const { data: user } = useGetUserInfo();

  useEffect(() => {
    setInit(true);
    if (!user) {
      push('/');
    }
  }, [user]);

  useEffect(() => {
    const handleUnauthorized = () => {
      push('/login');
    };

    window.addEventListener('unauthorized', handleUnauthorized);

    return () => {
      window.removeEventListener('unauthorized', handleUnauthorized);
    };
  }, []);

  if (!init && !user) return null;
  return <Outlet />;
}
