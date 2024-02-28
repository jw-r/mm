import { http } from '@/utils/http';
import { useQuery } from '@tanstack/react-query';

interface GetDocumentsResponse {
  documents: {
    id: number;
    documentName: string;
    createdAt: string;
    summary: string;
    status: 'UNPROCESSED' | 'PROCESSED' | 'COMPLETELY_FAILED' | 'PARTIAL_SUCCESS';
  }[];
}

const getDocuments = ({ categoryId }: { categoryId: number }) => {
  return http.get<GetDocumentsResponse>(`/categories/${categoryId}/documents`);
};

export function useGetDocuments({ categoryId }: { categoryId: number | undefined }) {
  return useQuery({
    queryKey: ['getDocuments', categoryId],
    queryFn: () => getDocuments({ categoryId: categoryId as number }),

    enabled: !!categoryId,

    select: (data) => data.documents,
  });
}
