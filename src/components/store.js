import { create } from "zustand";

export const useStore = create((set) => ({
  inViewFeature: null,
  setInViewFeature: (feature) => set({ inViewFeature: feature }),
}));
