import { Category } from '@/models/type';
import { http } from '@/utils/http';
import { useSuspenseQuery } from '@tanstack/react-query';

export interface GetCategoriesResponse {
  categories: Category[];
}

const getCategories = () => {
  return http.get<GetCategoriesResponse>('/categories');
};

export function useGetCategories() {
  return useSuspenseQuery({
    queryKey: ['getCategories'],
    queryFn: () => getCategories(),

    select: (data) => data.categories,

    gcTime: 3600 * 1000,
    staleTime: 3600 * 1000,
  });
}
