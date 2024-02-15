import { queryClient } from '@/providers/TanstackProvider';
import { http } from '@/utils/http';
import { useMutation } from '@tanstack/react-query';

const deleteDocument = (documentId: number) => {
  return http.delete(`/documents/${documentId}`);
};

export function useDeleteDocument() {
  return useMutation({
    mutationKey: ['deleteDocument'],
    mutationFn: ({ documentId }: { documentId: number }) => deleteDocument(documentId),

    onSettled: () => {
      queryClient.invalidateQueries();
    },
  });
}
