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

  // input
  searchValue: string;
  setSearchValue: (value: string) => void;

  searchForReviewValue: string;
  setSearchForReviewValue: (value: string) => void;

  // login popup
  isOpenLoginPopUp: boolean;
  setIsOpenLoginPopUp: (value: boolean) => void;

  // mypage popup
  isOpenMyPageEdit: boolean;
  setIsOpenMyPageEdit: (value: boolean) => void;

  // like sheet
  isOpenLike: boolean;
  setIsOpenLike: (value: boolean) => void;

  // comment sheet
  isOpenComment: boolean;
  setIsOpenComment: (value: boolean) => void;

  // mypage edit state
  isEditing: boolean;
  setIsEditing: (value: boolean) => void;
};

const useStore = create(
  devtools(
    persist<Store>(
      (set) => ({
        user: null,
        setUser: (userData) => set(() => ({ user: userData })),
        removeUser: () => set(() => ({ user: null })),
        searchValue: '',
        setSearchValue: (value) => set(() => ({ searchValue: value })),
        searchForReviewValue: '',
        setSearchForReviewValue: (value) =>
          set(() => ({ searchForReviewValue: value })),
        isOpenLoginPopUp: false,
        setIsOpenLoginPopUp: (value) =>
          set(() => ({ isOpenLoginPopUp: value })),
        isOpenLike: false,
        setIsOpenLike: (value) => set(() => ({ isOpenLike: value })),
        isOpenComment: false,
        setIsOpenComment: (value) => set(() => ({ isOpenComment: value })),
        isOpenMyPageEdit: false,
        setIsOpenMyPageEdit: (value) =>
          set(() => ({ isOpenMyPageEdit: value })),
        isEditing: false,
        setIsEditing: (value) => set(() => ({ isEditing: value })),
      }),

      {
        name: 'store',
      }
    )
  )
);

export default useStore;
