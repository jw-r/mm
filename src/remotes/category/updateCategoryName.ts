import { http } from '@/utils/http';
import { useMutation } from '@tanstack/react-query';

interface UpdateCategoryNameRequest {
  newName: string;
}

interface Data {
  id: number;
  newName: UpdateCategoryNameRequest;
}

const updateCategoryName = ({ id, newName }: Data) => {
  return http.patch<UpdateCategoryNameRequest>(`/categories/${id}`, newName);
};

export function useCreateCategory() {
  return useMutation({
    mutationKey: ['createCategory'],
    mutationFn: (data: Data) => updateCategoryName(data),
  });
}
