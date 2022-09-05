import { createContext } from "react";
import { type User } from "./types";

interface AuthContextType {
  user: User;
  loading: boolean;
  error?: any;
  login: (token: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType>(
  {} as AuthContextType,
);

export { AuthContext, AuthContext as default, type AuthContextType };
