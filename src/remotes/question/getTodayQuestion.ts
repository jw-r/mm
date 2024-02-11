import { Category } from '@/models/type';
import { http } from '@/utils/http';
import { useQuery } from '@tanstack/react-query';

interface GetTodayQuestionResponse {
  questions: {
    id: number;
    question: string;
    answer: string;
    category: Category;
    document: {
      id: number;
      name: string;
    };
  }[];
}

const getTodayQuestion = ({ questionSetId }: { questionSetId: string }) => {
  return http.get<GetTodayQuestionResponse>(`/question-sets/${questionSetId}`);
};

export function useTodayQuestion({ questionSetId }: { questionSetId: string | undefined }) {
  return useQuery({
    queryKey: ['getQuestionSetId', questionSetId],
    queryFn: () => getTodayQuestion({ questionSetId } as { questionSetId: string }),

    enabled: !!questionSetId,
  });
}
