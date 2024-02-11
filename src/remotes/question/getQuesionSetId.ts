import { http } from '@/utils/http';
import { useSuspenseQuery } from '@tanstack/react-query';

interface GetQuestionSetIdResponse {
  questionSetId: string;
  message: string;
}

const getQuestionSetId = () => {
  return http.get<GetQuestionSetIdResponse>('/question-sets/today');
};

export function useGetQuestionSetId() {
  return useSuspenseQuery({
    queryKey: ['getQuestionSetId'],
    queryFn: () => getQuestionSetId(),
  });
}
