import { useLocation, useNavigate } from 'react-router-dom';
import QS from 'qs';
import { useEffect } from 'react';
import { LOCAL_TOKEN_NAME } from '@/constants';

export function Oauth() {
  const navigate = useNavigate();
  const { search } = useLocation();

  useEffect(() => {
    const queryParams = QS.parse(search, { ignoreQueryPrefix: true }) as { ['access-token']?: string };
    const token = queryParams['access-token'] || '';

    localStorage.setItem(LOCAL_TOKEN_NAME, token);

    navigate('/');
  }, [search, navigate]);

  return null;
}
