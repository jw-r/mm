import { toast } from '@/components/ui/use-toast';
import { useCreateCategory } from '@/remotes/category/createCategory';
import { useDeleteCategory } from '@/remotes/category/deleteCategory';
import { useGetCategories } from '@/remotes/category/getCategories';
import { useCallback, useEffect } from 'react';
import { useCategoryStore } from '../stores/categoryStore';
import isEmptyString from '@/utils/isEmptyString';

export function useCategory() {
  const { data: categories } = useGetCategories();
  const { selectedCategory, selectCategory } = useCategoryStore();
  const { mutate: createCategoryMutate } = useCreateCategory();
  const { mutate: deleteCategoryMutate } = useDeleteCategory();

  const createCategory = useCallback(
    (categoryName: string) => {
      if (categories.map((category) => category.name).includes(categoryName)) {
        toast({ title: '이미 존재하는 카테고리입니다.' });
        return;
      }

      if (isEmptyString(categoryName)) {
        return;
      }

      createCategoryMutate(
        { name: categoryName.trim() },
        {
          onSuccess: ({ id }) => {
            selectCategory({ id, name: categoryName });
          },
        },
      );
    },
    [categories, createCategoryMutate, selectCategory],
  );

  const deleteCategory = (categoryId: number) => {
    deleteCategoryMutate(
      { categoryId },
      {
        onSuccess: () => {
          if (categoryId === selectedCategory?.id) {
            selectCategory(categories.find((category) => category.id !== selectedCategory?.id) || null);
          }
        },
      },
    );
  };

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

  return { categories, createCategory, deleteCategory };
}
