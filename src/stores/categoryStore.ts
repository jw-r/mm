import { Category } from '@/models/type';
import { create } from 'zustand';

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
  selectedCategoryId: 0,
  selectCategory: (categoryId) => set({ selectedCategoryId: categoryId }),
  setCategories: (categories) => set({ categories }),
}));
