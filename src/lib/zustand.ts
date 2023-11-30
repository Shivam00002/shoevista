import create from "zustand";

interface User {
  displayName: string | null;
  photoURL: string | null;
  // Add other properties as needed
}

interface Store {
  user: User | null;
  setUser: (newUser: User | null) => void;
}

const MyuseStore = create<Store>((set) => ({
  user: null,
  setUser: (newUser) => set({ user: newUser }),
}));

export default MyuseStore;


 export const useCartStore = create((set) => ({
  cartItems: [],
  addToCart: (item: any) => set((state: { cartItems: any; }) => ({ cartItems: [...state.cartItems, item] })),
}));

