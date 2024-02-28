import { toast } from '@/components/ui/use-toast';
import { useCreateCategory } from '@/remotes/category/createCategory';
import { useDeleteCategory } from '@/remotes/category/deleteCategory';
import { useGetCategories } from '@/remotes/category/getCategories';
import { useCallback, useEffect } from 'react';
import { useCategoryStore } from '../stores/categoryStore';

export function useCategory() {
  const { data: categories } = useGetCategories();
  const { selectedCategory, selectCategory } = useCategoryStore();
  const { mutate: createCategoryMutate } = useCreateCategory();
  const { mutate: deleteCategoryMutate } = useDeleteCategory();

  const isExistCategory = useCallback(
    (categoryName: string) => {
      return categories.filter((category) => category.name === categoryName).length > 0;
    },
    [categories],
  );

  const createCategory = useCallback(
    (categoryName: string) => {
      if (isExistCategory(categoryName)) {
        toast({
          title: '이미 존재하는 카테고리입니다.',
        });
      }

      if (categoryName.replace(/\s+/g, '') === '') {
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
    [createCategoryMutate, selectCategory, isExistCategory],
  );

  const deleteCategory = (categoryId: number) => {
    deleteCategoryMutate(
      { categoryId },
      {
        onSuccess: () => {
          if (categoryId === selectedCategory?.id) {
            selectCategory(categories[0]);
          }
        },
      },
    );
  };

  useEffect(() => {
    if (selectedCategory === null) {
      selectCategory(categories[0]);
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
