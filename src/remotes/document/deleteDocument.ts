import { http } from '@/utils/http';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const deleteDocument = (documentId: number) => {
  return http.delete(`/documents/${documentId}`);
};

export function useDeleteDocument() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ['deleteDocument'],
    mutationFn: ({ documentId }: { documentId: number }) => deleteDocument(documentId),

    onSettled: () => {
      queryClient.invalidateQueries();
    },
  });
}
