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
