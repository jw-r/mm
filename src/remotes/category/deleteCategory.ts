import { http } from '@/utils/http';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const deleteCategory = (categoryId: number) => {
  return http.delete(`/categories/${categoryId}`);
};

export function useDeleteCategory() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ['deleteCategory'],
    mutationFn: ({ categoryId }: { categoryId: number }) => deleteCategory(categoryId),

    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['getCategories'] });
    },
  });
}
