import { http } from '@/utils/http';
import { useSuspenseQuery } from '@tanstack/react-query';

interface GetQuestionSetIdResponse {
  questionSetId?: string;
  message?: 'QUESTION_SET_NOT_READY' | 'DOCUMENT_NOT_CREATED_YET';
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
