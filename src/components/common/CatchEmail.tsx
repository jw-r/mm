import useRouter from '@/hooks/useRouter';
import QS from 'qs';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function CatchEmail() {
  const { push } = useRouter();
  const { search } = useLocation();

  useEffect(() => {
    const { question_set_id } = QS.parse(search, { ignoreQueryPrefix: true }) as { ['question_set_id']?: string };
    if (!question_set_id) {
      throw new Error();
    }

    push(`/quiz/${question_set_id}`);
  }, []);

  return null;
}
