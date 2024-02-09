import { MouseEventHandler, useState } from 'react';
import { Txt } from './shared/Txt';
import { Button } from './ui/button';
import { Plus } from 'lucide-react';

const categories = [
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
  const [selectedCategoryId, setSelectedCategoryId] = useState('1');

  const selectCategory: MouseEventHandler<HTMLButtonElement> = (e) => {
    const target = e.target as HTMLElement;

    if (target.id) {
      setSelectedCategoryId(target.id);
    }
  };

  return (
    <div className="space-y-6 py-12 pl-10">
      <div>
        <Txt typography="h3">카테고리</Txt>
        <div className="h-[2px] w-40 bg-foreground" />
      </div>
      <div className="flex flex-col space-y-2">
        {categories.map((category) => (
          <Button
            id={String(category.id)}
            variant={selectedCategoryId === String(category.id) ? 'secondary' : 'ghost'}
            className="w-full justify-start"
            onClick={selectCategory}
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
