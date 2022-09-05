import { useContext } from "react";
import { AuthContext } from "./auth-context";

const useAuth = function useAuth() {
  return useContext(AuthContext);
};

export { useAuth, useAuth as default };
