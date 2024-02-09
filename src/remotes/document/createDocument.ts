import { http } from '@/utils/http';
import { useMutation } from '@tanstack/react-query';

interface CreateDocumentRequest {
  userDocumentName: string;
  categoryId: number;
  documentFormat: 'MARKDOWN';
}

const createDocument = (requestBody: CreateDocumentRequest) => {
  return http.post<CreateDocumentRequest>('/documents', requestBody);
};

export function useCreateDocument() {
  return useMutation({
    mutationKey: ['createDocument'],
    mutationFn: (data: CreateDocumentRequest) => createDocument(data),
  });
}
