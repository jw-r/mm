import { http } from '@/utils/http';
import { useSuspenseQuery } from '@tanstack/react-query';

interface GetDocumentsResponse {
  documents: {
    id: number;
    documentName: string;
    createdAt: string;
  }[];
}

const getDocuments = ({ categoryId }: { categoryId: number }) => {
  return http.get<GetDocumentsResponse>(`/categories/${categoryId}/documents`);
};

export function useGetDocuments({ categoryId }: { categoryId: number }) {
  return useSuspenseQuery({
    queryKey: ['getDocuments'],
    queryFn: () => getDocuments({ categoryId }),
  });
}
