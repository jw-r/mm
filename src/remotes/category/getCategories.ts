import { Category } from '@/models/type';
import { useCategoryStore } from '@/stores/categoryStore';
import { http } from '@/utils/http';
import { useSuspenseQuery } from '@tanstack/react-query';

interface GetCategoriesResponse {
  categories: Category[];
}

const getCategories = () => {
  return http.get<GetCategoriesResponse>('/categories');
};

export function useGetCategories() {
  const { setCategories } = useCategoryStore();

  return useSuspenseQuery({
    queryKey: ['getCategories'],
    queryFn: () => getCategories(),

    meta: {
      onSuccess: (data: { categories: Category[] }) => {
        setCategories(data.categories);
      },
    },
  });
}
