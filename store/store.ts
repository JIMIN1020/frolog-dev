import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

type User = {
  id: string;
  name: string;
  accessToken: string;
  refreshToken: string;
};

type Store = {
  // user
  user: User | null;
  setUser: (userData: User | null) => void;
  removeUser: () => void;

  // login popup
  isOpenLoginPopUp: boolean;
  setIsOpenLoginPopUp: (value: boolean) => void;
};

const useStore = create(
  devtools(
    persist<Store>(
      (set) => ({
        user: null,
        setUser: (userData) => set(() => ({ user: userData })),
        removeUser: () => set(() => ({ user: null })),
        isOpenLoginPopUp: false,
        setIsOpenLoginPopUp: (value) =>
          set(() => ({ isOpenLoginPopUp: value })),
      }),
      {
        name: 'store',
      }
    )
  )
);

export default useStore;
