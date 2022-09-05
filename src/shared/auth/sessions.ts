import { type Provider, type User } from "./types";

const getProviders = function getProviders(): Provider[] {
  const providers = localStorage.getItem("auth_providers");

  if (providers === null) {
    return [];
  }

  return JSON.parse(providers);
};

const setProviders = function setProviders(providers: Provider[]): void {
  localStorage.setItem("auth_providers", JSON.stringify(providers));
};

const login = async function login(
  provider: Provider,
  token: string,
): Promise<void> {
  const providers = getProviders();

  localStorage.setItem(`auth_${provider}_token`, token);
  setProviders([provider, ...providers.filter((p) => p !== provider)]);
};

const logout = async function logout(provider: Provider): Promise<void> {
  const providers = getProviders();

  localStorage.removeItem(`auth_${provider}_token`);
  setProviders(providers.filter((p) => p !== provider));
};

const get = async function get(): Promise<User> {
  const providers = getProviders();

  if (providers.length === 0) {
    return { isAuthenticated: false };
  }

  return {
    isAuthenticated: true,
    provider: providers[0],
    username: "anonymous",
  };
};

export { get, login, logout };
