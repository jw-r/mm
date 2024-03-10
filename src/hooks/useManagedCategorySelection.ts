import { useGetCategories } from '@/remotes/category/getCategories';
import { useCategoryStore } from '@/stores/categoryStore';
import { useEffect } from 'react';

function useManagedCategorySelection() {
  const { data: categories } = useGetCategories();
  const { selectedCategory, selectCategory } = useCategoryStore();

  useEffect(() => {
    if (selectedCategory === null) {
      selectCategory(categories[0] || null);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (categories.length === 0) {
      selectCategory(null);
    }
  }, [categories.length, selectCategory]);
}

export default useManagedCategorySelection;
