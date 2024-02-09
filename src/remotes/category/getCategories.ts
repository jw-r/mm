import { Category } from '@/models/type';
import { http } from '@/utils/http';
import { useSuspenseQuery } from '@tanstack/react-query';

interface GetCategoriesResponse {
  categories: Category[];
}

const getCategories = () => {
  return http.get<GetCategoriesResponse>('/categories');
};

export function useGetCategories() {
  return useSuspenseQuery({
    queryKey: ['getCategories'],
    queryFn: () => getCategories(),
  });
}
