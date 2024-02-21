import { ChangeEvent, MouseEventHandler, useState } from 'react';
import { Txt } from '@/components/Txt';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { MoreVertical } from 'lucide-react';
import { FolderOpen } from 'lucide-react';
import { CategoryDeleteConfirm } from './components/CategoryDeleteConfirm';
import { useCategory } from './hooks/useCategory';
import { useCategoryStore } from './stores/categoryStore';
import { CategoryDropdownMenu } from './components/CategoryDropdownMenu';
import { NewCategoryInput } from './components/NewCategoryInput';

function Category() {
  const { categories, createCategory, deleteCategory } = useCategory();
  const { selectedCategory, selectCategory } = useCategoryStore();

  const [hoverCategoryId, setHoverCategoryId] = useState<number | null>();
  const [newCategoryName, setNewCategoryName] = useState('');

  const handleClickCategory: MouseEventHandler<HTMLButtonElement> = (e) => {
    const $button = e.currentTarget as HTMLButtonElement;

    if ($button.id && $button.name) {
      selectCategory({ id: Number($button.id), name: $button.name });
    }
  };

  const handleCreateCategory = (categoryName: string) => {
    setNewCategoryName('');

    createCategory(categoryName);
  };

  return (
    <>
      <div id="desktop-view" className="hidden space-y-6 p-4 sm:block md:p-8 lg:py-12">
        <div className="w-36 lg:w-52">
          <Txt typography="h3">카테고리</Txt>
          <div className="h-[2px] w-full bg-foreground" />
        </div>
        <div className="flex w-36 flex-col space-y-2 lg:w-52">
          {categories.map((category) => (
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
                className="w-full justify-start overflow-x-scroll pr-6 scrollbar-hide"
                onClick={handleClickCategory}
              >
                <div className="flex items-center">
                  <FolderOpen size={16} className="mr-2 text-foreground/70" />
                  <div>{category.name}</div>
                </div>
              </Button>

              <CategoryDropdownMenu
                isTriggerVisible={hoverCategoryId === category.id}
                trigger={<MoreVertical />}
                content={<CategoryDeleteConfirm trigger="삭제" deleteCategory={() => deleteCategory(category.id)} />}
              />
            </div>
          ))}

          <NewCategoryInput
            toggleTrigger={<Plus size={16} />}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setNewCategoryName(e.target.value)}
            close={() => handleCreateCategory(newCategoryName)}
          />
        </div>
      </div>

      <div id="mobile-view" className="mb-2 mt-4 flex w-full px-4 sm:hidden">
        <div className="whitespace-nowrap rounded-lg p-2 font-semibold shadow-sm">카테고리</div>
        <div className="ml-2 flex space-x-2 overflow-x-scroll scrollbar-hide">
          {categories.map((category) => (
            <div key={category.id} className="relative">
              <Button
                id={String(category.id)}
                key={category.id}
                name={category.name}
                variant={selectedCategory?.id === category.id ? 'secondary' : 'ghost'}
                className="pr-6"
                onClick={handleClickCategory}
              >
                {category.name}
              </Button>

              <CategoryDropdownMenu
                isTriggerVisible={true}
                trigger={<MoreVertical size={18} />}
                content={<CategoryDeleteConfirm trigger="삭제" deleteCategory={() => deleteCategory(category.id)} />}
              />
            </div>
          ))}

          <NewCategoryInput
            toggleTrigger={<Plus size={16} />}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setNewCategoryName(e.target.value)}
            close={() => handleCreateCategory(newCategoryName)}
          />
        </div>
      </div>
    </>
  );
}

export default Category;
