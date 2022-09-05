enum Provider {
  GITHUB = "github",
}

interface User {
  isAuthenticated: boolean;
  provider?: Provider;
  username?: string;
}

export { Provider, type User };
