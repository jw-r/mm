import { Txt } from '@/components/shared/Txt';
import { useCategoryStore } from '@/stores/categoryStore';

export function MainPage() {
  const { selectedCategory } = useCategoryStore();

  return (
    <main className="flex flex-col p-12">
      <Txt typography="h1">{selectedCategory?.name || '카테고리'}</Txt>
    </main>
  );
}
