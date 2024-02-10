import { useUserStore } from '@/stores/userStore';
import { useLocation, useNavigate } from 'react-router-dom';
import QS from 'qs';
import { useEffect } from 'react';

export function Oauth() {
  const navigate = useNavigate();
  const { search } = useLocation();
  const { setToken } = useUserStore();

  useEffect(() => {
    const queryParams = QS.parse(search, { ignoreQueryPrefix: true }) as { ['access-token']?: string };
    const token = queryParams['access-token'];

    if (token) {
      setToken(token);
    }

    navigate('/');
  }, [search, setToken, navigate]);

  return null;
}
