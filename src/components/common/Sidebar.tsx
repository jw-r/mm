/* eslint-disable react-refresh/only-export-components */
import { ChangeEvent, FormEventHandler, MouseEventHandler, useEffect, useState } from 'react';
import { Txt } from '../shared/Txt';
import { Button } from '../ui/button';
import { Plus, X } from 'lucide-react';
import { useCategoryStore } from '@/stores/categoryStore';
import { useGetCategories } from '@/remotes/category/getCategories';
import { useCreateCategory } from '@/remotes/category/createCategory';
import { Input } from '../ui/input';
import { useDeleteCategory } from '@/remotes/category/deleteCategory';

function Sidebar() {
  const { data } = useGetCategories();
  const { selectedCategory, selectCategory } = useCategoryStore();
  const { mutate: createCategory } = useCreateCategory();
  const { mutate: deleteCategory } = useDeleteCategory();

  const [hoverCategoryId, setHoverCategoryId] = useState<number | null>();
  const [isInputOpen, setIsInputOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const handleClickCategory: MouseEventHandler<HTMLButtonElement> = (e) => {
    const target = e.target as HTMLButtonElement;

    if (target.id && target.name) {
      selectCategory({ id: Number(target.id), name: target.name });
    }
  };

  const onSubmitCategoryInput: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    handleCreateCategory(inputValue);
  };

  const handleCreateCategory = (categoryName: string) => {
    setIsInputOpen(false);
    setInputValue('');

    if (categoryName.replace(/\s+/g, '') === '') {
      return;
    }

    createCategory(
      { name: categoryName.trim() },
      {
        onSuccess: ({ id }) => {
          selectCategory({ id, name: categoryName });
        },
      },
    );
  };

  const handleDeleteCategory = (categoryId: number) => {
    deleteCategory(
      { categoryId },
      {
        onSuccess: () => {
          if (categoryId === selectedCategory?.id) {
            selectCategory(data.categories[0]);
          }
        },
      },
    );
  };

  useEffect(() => {
    selectCategory(data?.categories[0]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (data.categories.length === 0) {
      selectCategory(null);
    }
  }, [data.categories.length, selectCategory]);

  return (
    <div className="hidden space-y-6 p-4 sm:block md:p-8 lg:py-12">
      <div className="w-36 lg:w-52">
        <Txt typography="h3">카테고리</Txt>
        <div className="h-[2px] w-full bg-foreground" />
      </div>
      <div className="flex w-36 flex-col space-y-2 lg:w-52">
        {data.categories.map((category) => (
          <div
            key={category.id}
            className="relative"
            onMouseEnter={() => setHoverCategoryId(category.id)}
            onMouseLeave={() => setHoverCategoryId(null)}
          >
            <Button
              id={String(category.id)}
              key={category.id}
              name={category.name}
              variant={selectedCategory?.id === category.id ? 'secondary' : 'ghost'}
              className="w-full justify-between"
              onClick={handleClickCategory}
            >
              {category.name}
            </Button>
            {hoverCategoryId === category.id && (
              <X
                onClick={() => handleDeleteCategory(category.id)}
                size={20}
                className="absolute right-2 top-[50%] translate-y-[-50%] cursor-pointer rounded-sm opacity-70 transition-opacity hover:opacity-100 hover:outline-none hover:ring-2 hover:ring-ring hover:ring-offset-1"
              />
            )}
          </div>
        ))}
        {isInputOpen ? (
          <form onSubmit={onSubmitCategoryInput}>
            <Input
              autoFocus
              onBlur={() => handleCreateCategory(inputValue)}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)}
            />
          </form>
        ) : (
          <Button variant="ghost" onClick={() => setIsInputOpen(true)}>
            <Plus size={16} />
          </Button>
        )}
      </div>
    </div>
  );
}

export default Sidebar;
