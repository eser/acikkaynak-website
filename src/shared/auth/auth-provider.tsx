import { useRouter } from "next/router";
import { ReactNode, useCallback, useEffect, useMemo, useState } from "react";
import * as sessions from "./sessions";
import { AuthContext } from "./auth-context";
import { type Provider, type User } from "./types";

interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider = function AuthProvider(
  props: AuthProviderProps,
): JSX.Element {
  const router = useRouter();
  const [user, setUser] = useState<User>();
  const [error, setError] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [loadingInitial, setLoadingInitial] = useState<boolean>(true);

  // If we change page, reset the error state.
  useEffect(() => {
    if (error !== null) {
      setError(null);
    }
  }, [error, router.pathname /*location.pathname*/]);

  const validateCurrentUser = async function validateCurrentUser() {
    const user = await sessions.get();
    setUser(user);
  };

  // Check if there is a currently active session
  // when the provider is mounted for the first time.
  //
  // If there is an error, it means there is no session.
  //
  // Finally, just signal the component that the initial load
  // is over.
  useEffect(() => {
    const doGetCurrentUser = async function doGetCurrentUser() {
      try {
        await validateCurrentUser();
      } finally {
        setLoadingInitial(false);
      }
    };

    doGetCurrentUser();
  }, []);

  // Flags the component loading state and posts the login
  // data to the server.
  //
  // An error means that the email/password combination is
  // not valid.
  //
  // Finally, just signal the component that loading the
  // loading state is over.
  const login = useCallback(function login(provider: Provider, token: string) {
    const doLogin = async function doLogin(provider: Provider, token: string) {
      setLoading(true);

      try {
        await sessions.login(provider, token);
        await validateCurrentUser();
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    doLogin(provider, token);
  }, []);

  // Call the logout endpoint and then remove the user
  // from the state.
  const logout = useCallback(function logout(provider: Provider) {
    const doLogout = async function doLogout(provider: Provider) {
      setLoading(true);

      try {
        await sessions.logout(provider);
        await validateCurrentUser();
      } finally {
        setLoading(false);
      }
    };

    doLogout(provider);
  }, []);

  // Make the provider update only when it should.
  // We only want to force re-renders if the user,
  // loading or error states change.
  //
  // Whenever the `value` passed into a provider changes,
  // the whole tree under the provider re-renders, and
  // that can be very costly! Even in this case, where
  // you only get re-renders when logging in and out
  // we want to keep things very performant.
  const memoedValue = useMemo(
    () => ({
      user,
      loading,
      ready: !loadingInitial,
      error,
      login,
      logout,
    }),
    [user, loading, loadingInitial, error, login, logout],
  );

  // We only want to render the underlying app after we
  // assert for the presence of a current user.
  return (
    <AuthContext.Provider value={memoedValue}>
      {!loadingInitial && props.children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthProvider as default };
