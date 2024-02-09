import { http } from '@/utils/http';
import { useMutation } from '@tanstack/react-query';

const deleteCategory = (categoryId: number) => {
  return http.delete(`/categories/${categoryId}`);
};

export function useDeleteCategory() {
  return useMutation({
    mutationKey: ['deleteCategory'],
    mutationFn: ({ categoryId }: { categoryId: number }) => deleteCategory(categoryId),
  });
}
