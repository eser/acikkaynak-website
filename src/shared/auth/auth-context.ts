import { createContext } from "react";
import { type Provider, type User } from "./types";

interface AuthContextType {
  user: User;
  loading: boolean;
  ready: boolean;
  error?: any;
  login: (provider: Provider, token: string) => void;
  logout: (provider: Provider) => void;
}

const AuthContext = createContext<AuthContextType>(
  {} as AuthContextType,
);

export { AuthContext, AuthContext as default, type AuthContextType };
