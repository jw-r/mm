import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { FormEventHandler, ReactNode, useState } from 'react';
import { CategoryUpdateFormDialog } from './CategoryUpdateFormDialog';
import { CategoryDeleteConfirm } from './CategoryDeleteConfirm';
import { Category } from '@/models/type';
import { useUpdateCategoryName } from '@/remotes/category/updateCategoryName';
import { useDeleteCategory } from '@/remotes/category/deleteCategory';
import { toast } from '../ui/use-toast';
import { useCategoryStore } from '@/stores/categoryStore';
import isEmptyString from '@/utils/isEmptyString';
import { useGetCategories } from '@/remotes/category/getCategories';

interface CategoryDropdownMenuProps {
  category: Category;
  trigger: ReactNode;
  isTriggerVisible: boolean;
}

export function CategoryDropdownMenu({ category, trigger, isTriggerVisible: isVisible }: CategoryDropdownMenuProps) {
  const { data: categories } = useGetCategories();
  const { selectedCategory, selectCategory } = useCategoryStore();
  const { mutate: deleteCategory } = useDeleteCategory();
  const { mutate: updateCategory } = useUpdateCategoryName();
  const [open, setIsOpen] = useState(false);

  const handleSubmit: FormEventHandler = (e) => {
    e.preventDefault();

    const newCategoryName = ((e.target as HTMLFormElement)[0] as HTMLInputElement).value;
    if (isEmptyString(newCategoryName) || newCategoryName === category.name) {
      return;
    }

    updateCategory(
      { id: category.id, newName: newCategoryName },
      {
        onError: () =>
          toast({
            title: '카테고리를 변경하지 못했어요',
            description: '잠시 후 다시 시도해주세요',
          }),
        onSettled: () => setIsOpen(false),
      },
    );
  };

  const handleConfirm = () => {
    deleteCategory(
      { categoryId: category.id },
      {
        onSuccess: () => {
          if (category.id === selectedCategory?.id) {
            selectCategory(categories.find((category) => category.id !== selectedCategory?.id) || null);
          }
        },
        onError: () =>
          toast({
            title: '카테고리를 삭제하지 못했어요',
            description: '잠시 후 다시 시도해주세요',
          }),
        onSettled: () => setIsOpen(false),
      },
    );
  };

  return (
    <DropdownMenu open={open} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild onClick={() => setIsOpen(true)}>
        <div
          className={`absolute right-1 top-[50%] translate-y-[-50%] cursor-pointer py-2 text-foreground/60 ${!isVisible && 'invisible'}`}
        >
          {trigger}
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <CategoryUpdateFormDialog triggerLabel="수정" placeholder={category.name} handleSubmit={handleSubmit} />
        <CategoryDeleteConfirm triggerLabel="삭제" handleConfirm={handleConfirm} />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
