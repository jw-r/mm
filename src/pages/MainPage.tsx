import Sidebar from '@/components/Sidebar';
import { Txt } from '@/components/shared/Txt';
import { useCategoryStore } from '@/stores/categoryStore';

export function MainPage() {
  const { categories, selectedCategoryId } = useCategoryStore();
  const categoryName = categories.find((category) => category.id === selectedCategoryId)?.name || '';

  return (
    <div className="flex">
      <Sidebar />
      <main className="flex flex-col p-12">
        <Txt typography="h1">{categoryName}</Txt>
      </main>
    </div>
  );
}
