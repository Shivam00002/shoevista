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
  addToCart: (item: any) =>
    set((state: any) => {
      // Check if the item is already in the cart
      const isItemInCart = state.cartItems.some(
        (cartItem: any) => cartItem.title === item.title
      );

      // If the item is not in the cart, add it
      if (!isItemInCart) {
        return {
          cartItems: [...state.cartItems, item],
        };
      }

      // If the item is already in the cart, do not add it again
      return state;
    }),
  removeFromCart: (index: number) =>
    set((state: any) => {
      const updatedCartItems = [...state.cartItems];
      updatedCartItems.splice(index, 1);
      return { cartItems: updatedCartItems };
    }),
}));
