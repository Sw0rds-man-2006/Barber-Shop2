import { create } from "zustand";

const useAuthStore = create((set) => ({
  currentAuthPage: "login", // مقدار اولیه
  apiBaseUrl: "", // URL API شما
  setAuthPage: (page) => set({ currentAuthPage: page }), // متد تغییر صفحه
}));

export default useAuthStore;
