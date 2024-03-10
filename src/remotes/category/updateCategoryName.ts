import { http } from '@/utils/http';
import { useMutation, useQueryClient } from '@tanstack/react-query';

interface UpdateCategoryNameRequest {
  newName: string;
}

interface Data {
  id: number;
  newName: string;
}

const updateCategoryName = ({ id, newName }: Data) => {
  return http.patch<UpdateCategoryNameRequest>(`/categories/${id}`, { newName });
};

export function useUpdateCategoryName() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ['createCategory'],
    mutationFn: (data: Data) => updateCategoryName({ ...data, newName: data.newName.trim() }),

    onSettled: () => queryClient.invalidateQueries({ queryKey: ['getCategories'] }),
  });
}
