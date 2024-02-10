import { create } from 'zustand';

type State = {
  token: string | null;
};

type Actions = {
  setToken: (token: string) => void;
};

export const useUserStore = create<State & Actions>((set) => ({
  token: localStorage.getItem('pick-toss-token'),
  setToken: (token: string) => {
    localStorage.setItem('pick-toss-token', token);
    set({ token });
  },
}));
