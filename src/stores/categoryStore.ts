import { Category } from '@/models/type';
import { create } from 'zustand';

type State = {
  selectedCategory: Category | null;
};

type Actions = {
  selectCategory: (category: Category | null) => void;
};

export const useCategoryStore = create<State & Actions>((set) => ({
  selectedCategory: null,
  selectCategory: (categoryId) => set({ selectedCategory: categoryId }),
}));
