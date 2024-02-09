import { create } from 'zustand';

interface Category {
  id: string;
  name: string;
}

type State = {
  categories: Category[];
  selectedCategoryId: Category['id'];
};

type Actions = {
  selectCategory: (categoryId: Category['id']) => void;
  setCategories: (categories: Category[]) => void;
};

export const useCategoryStore = create<State & Actions>((set) => ({
  categories: [] as Category[],
  selectedCategoryId: '',
  selectCategory: (categoryId) => set({ selectedCategoryId: categoryId }),
  setCategories: (categories) => set({ categories }),
}));
