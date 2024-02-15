import { queryClient } from '@/providers/TanstackProvider';
import { http } from '@/utils/http';
import { useMutation } from '@tanstack/react-query';

interface CreateDocumentRequest {
  file: File;
  userDocumentName: string;
  categoryId: number;
  documentFormat: 'MARKDOWN';
}

const createDocument = (requestBody: CreateDocumentRequest) => {
  const formData = new FormData();
  formData.append('file', requestBody.file);
  formData.append('userDocumentName', requestBody.userDocumentName);
  formData.append('categoryId', String(requestBody.categoryId));
  formData.append('documentFormat', requestBody.documentFormat);

  return http.post<FormData, { id: number }>('/documents', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

export function useCreateDocument() {
  return useMutation({
    mutationKey: ['createDocument'],
    mutationFn: (data: CreateDocumentRequest) => createDocument(data),

    onSettled: () => {
      queryClient.invalidateQueries();
    },
  });
}
