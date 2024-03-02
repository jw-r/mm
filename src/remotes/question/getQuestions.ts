import { Question } from '@/models/type';
import { http } from '@/utils/http';
import { useQuery } from '@tanstack/react-query';

interface GetQuestionsResponse {
  documents: {
    id: number;
    documentName: string;
    createdAt: string;
    questions: Question[];
    status: 'UNPROCESSED' | 'PROCESSED';
  }[];
}

const getQuestions = ({ categoryId }: { categoryId: number }) => {
  return http.get<GetQuestionsResponse>(`/categories/${categoryId}/documents/questions`);
};

export function useGetQuestions({ categoryId }: { categoryId: number | undefined }) {
  return useQuery({
    queryKey: ['getQuestions', categoryId],
    queryFn: () => getQuestions({ categoryId } as { categoryId: number }),

    enabled: !!categoryId,

    select: (data) => data.documents,
  });
}
