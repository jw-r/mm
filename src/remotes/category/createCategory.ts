import { http } from '@/utils/http';
import { useMutation, useQueryClient } from '@tanstack/react-query';

interface CreateCategoryRequest {
  name: string;
}

const createCategory = (requestBody: CreateCategoryRequest) => {
  return http.post<CreateCategoryRequest, { id: number }>('/categories', requestBody);
};

export function useCreateCategory() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ['createCategory'],
    mutationFn: (data: CreateCategoryRequest) => createCategory({ ...data, name: data.name.trim() }),

    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['getCategories'] });
    },
  });
}
