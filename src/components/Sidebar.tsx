/* eslint-disable react-refresh/only-export-components */
import { MouseEventHandler } from 'react';
import { Txt } from './shared/Txt';
import { Button } from './ui/button';
import { Plus } from 'lucide-react';
import { useCategoryStore } from '@/stores/categoryStore';
import { useGetCategories } from '@/remotes/category/getCategories';
import withSuspense from './shared/hocs/withSuspense';

function Sidebar() {
  const { data } = useGetCategories();
  const { selectedCategory, selectCategory } = useCategoryStore();

  const onClickCategory: MouseEventHandler<HTMLButtonElement> = (e) => {
    const target = e.target as HTMLButtonElement;

    if (target.id && target.name) {
      selectCategory({ id: Number(target.id), name: target.name });
    }
  };

  return (
    <div className="space-y-6 px-10 py-12">
      <div>
        <Txt typography="h3">카테고리</Txt>
        <div className="h-[2px] w-40 bg-foreground" />
      </div>
      <div className="flex flex-col space-y-2">
        {data.categories.map((category) => (
          <Button
            id={String(category.id)}
            name={category.name}
            key={category.id}
            variant={selectedCategory?.id === category.id ? 'secondary' : 'ghost'}
            className="w-full justify-start"
            onClick={onClickCategory}
          >
            {category.name}
          </Button>
        ))}
        <Button variant="ghost">
          <Plus size={16} />
        </Button>
      </div>
    </div>
  );
}

export default withSuspense(Sidebar, { fallback: <div>Loading...</div> });
