import { Question } from '@/models/type';
import { http } from '@/utils/http';
import { useSuspenseQuery } from '@tanstack/react-query';

interface GetQuestionsResponse {
  documents: {
    id: number;
    documentName: string;
    createdAt: string;
    questions: Question[];
  }[];
}

const getQuestions = ({ categoryId }: { categoryId: number }) => {
  return http.get<GetQuestionsResponse>(`/categories/${categoryId}/documents/questions`);
};

export function useGetQuestions({ categoryId }: { categoryId: number }) {
  return useSuspenseQuery({
    queryKey: ['getQuestions'],
    queryFn: () => getQuestions({ categoryId }),
  });
}
