import { queryClient } from '@/providers/TanstackProvider';
import { http } from '@/utils/http';
import { useMutation } from '@tanstack/react-query';

interface CreateCategoryRequest {
  name: string;
}

const createCategory = (requestBody: CreateCategoryRequest) => {
  return http.post<CreateCategoryRequest, { id: number }>('/categories', requestBody);
};

export function useCreateCategory() {
  return useMutation({
    mutationKey: ['createCategory'],
    mutationFn: (data: CreateCategoryRequest) => createCategory({ ...data, name: data.name.trim() }),

    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['getCategories'] });
    },
  });
}
