import { type User } from "./types";

const login = async function login(token: string): Promise<User> {
  localStorage.setItem("auth_token", token);

  return { isAuthenticated: false };
};

const logout = async function logout(): Promise<void> {
  localStorage.removeItem("auth_token");
};

const get = async function get(): Promise<User> {
  const token = localStorage.getItem("auth_token");

  if (token === null) {
    return { isAuthenticated: false };
  }
};

export { get, login, logout };
