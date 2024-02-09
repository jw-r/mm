import { Category, Question } from '@/models/type';
import { http } from '@/utils/http';
import { useSuspenseQuery } from '@tanstack/react-query';

interface GetDocumentsResponse {
  id: number;
  status: 'PROCESSED' | 'UNPROCESSED';
  category: Category;
  documentName: string;
  format: 'MARKDOWN';
  createdAt: string;
  questions: Question[];
  content: string; // 내용을 문자열로 받음
}

const getDocument = ({ documentId }: { documentId: number }) => {
  return http.get<GetDocumentsResponse>(`/categories/${documentId}/documents`);
};

export function useGetDocument({ documentId }: { documentId: number }) {
  return useSuspenseQuery({
    queryKey: ['getDocuments'],
    queryFn: () => getDocument({ documentId }),
  });
}
