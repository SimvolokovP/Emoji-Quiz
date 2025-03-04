import { create } from "zustand";
import { IUser } from "../models/IUser";

interface UserState {
  user: IUser | null;
  setUsername: (username: string) => void;
}

export const useUser = create<UserState>((set) => ({
  user: { username: "" },
  setUsername: (username: string) => {
    set((state) => ({
      user: state.user ? { ...state.user, username } : null,
    }));
  },
}));
