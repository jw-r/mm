import { MouseEventHandler, useEffect } from 'react';
import { Txt } from './shared/Txt';
import { Button } from './ui/button';
import { Plus } from 'lucide-react';
import { useCategoryStore } from '@/stores/categoryStore';
import { Category } from '@/models/type';

const dummy: Category[] = [
  {
    id: 1,
    name: '네트워크',
  },
  {
    id: 2,
    name: '운영체제',
  },
  {
    id: 3,
    name: '도메인 주도 개발',
  },
  {
    id: 4,
    name: '데이터베이스',
  },
  {
    id: 5,
    name: '알고리즘',
  },
];

function Sidebar() {
  const { selectCategory, selectedCategoryId, categories, setCategories } = useCategoryStore();

  const onClickCategory: MouseEventHandler<HTMLButtonElement> = (e) => {
    const target = e.target as HTMLElement;

    if (target.id) {
      selectCategory(Number(target.id));
    }
  };

  useEffect(() => {
    if (categories.length === 0) {
      setCategories(dummy);
      selectCategory(dummy[0].id);
    }
  }, []);

  return (
    <div className="space-y-6 px-10 py-12">
      <div>
        <Txt typography="h3">카테고리</Txt>
        <div className="h-[2px] w-40 bg-foreground" />
      </div>
      <div className="flex flex-col space-y-2">
        {categories.map((category) => (
          <Button
            id={String(category.id)}
            key={category.id}
            variant={selectedCategoryId === category.id ? 'secondary' : 'ghost'}
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

export default Sidebar;
