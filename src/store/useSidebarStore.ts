import { create } from "zustand";

interface HeaderStore {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  handleOpen: () => void;
  handleClose: () => void;
}

export const useSidebarStore = create<HeaderStore>((set) => ({
  isOpen: false,
  setIsOpen: (value: boolean) => set({ isOpen: value }),
  handleOpen: () => set({ isOpen: true }),
  handleClose: () => set({ isOpen: false }),
}));
