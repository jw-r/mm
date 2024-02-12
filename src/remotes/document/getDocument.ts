import { Category, Question } from '@/models/type';
import { http } from '@/utils/http';
import { useQuery } from '@tanstack/react-query';

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
  return http.get<GetDocumentsResponse>(`/documents/${documentId}`);
};

export function useGetDocument({ documentId, polling }: { documentId: number | undefined; polling?: boolean }) {
  return useQuery({
    queryKey: ['getDocuments', documentId],
    queryFn: () => getDocument({ documentId: documentId as number }),

    refetchInterval: polling ? 1000 : false,

    enabled: !!documentId,
  });
}
