/* eslint-disable @typescript-eslint/no-explicit-any */
import { tmdbApi } from "@/lib/axios";
import { create } from "zustand";

interface ModalState {
  isOpen: boolean;
  trailerKey: string | undefined;
  openModal: (trailerKey: string) => void;
  closeModal: () => void;
  handlePlayTrailer: (
    movieId: string,
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
}

export const useModalStore = create<ModalState>((set, get) => ({
  isOpen: false,
  trailerKey: undefined,
  openModal: (trailerKey: string) => {
    set({ isOpen: true, trailerKey });
    document.body.style.overflow = "hidden";
  },
  closeModal: () => {
    set({ isOpen: false, trailerKey: undefined });
    document.body.style.overflow = "unset";
  },
  handlePlayTrailer: async (
    movieId,
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.stopPropagation();
    e.preventDefault();
    const res = await tmdbApi.get(`/movie/${movieId}/videos`, {
      params: {
        language: "en-US",
      },
    });
    const trailer = res.data.results.find(
      (v: any) => v.type === "Trailer" && v.site === "YouTube"
    );
    get().openModal(trailer?.key);
  },
}));
