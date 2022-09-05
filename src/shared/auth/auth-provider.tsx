import { useRouter } from "next/router";
import { ReactNode, useEffect, useMemo, useState } from "react";
import * as sessions from "./sessions";
import { AuthContext } from "./auth-context";
import { type User } from "./types";

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
  }, [router.pathname /*location.pathname*/]);

  // Check if there is a currently active session
  // when the provider is mounted for the first time.
  //
  // If there is an error, it means there is no session.
  //
  // Finally, just signal the component that the initial load
  // is over.
  useEffect(() => {
    const getCurrentUser = async function getCurrentUser() {
      try {
        const user = await sessions.get();
        setUser(user);
      } finally {
        setLoadingInitial(false);
      }
    };

    getCurrentUser();
  }, []);

  // Flags the component loading state and posts the login
  // data to the server.
  //
  // An error means that the email/password combination is
  // not valid.
  //
  // Finally, just signal the component that loading the
  // loading state is over.
  async function login(token: string) {
    setLoading(true);

    try {
      const loggedUser = await sessions.login(token);
      setUser(loggedUser);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }

  // Call the logout endpoint and then remove the user
  // from the state.
  async function logout() {
    setLoading(true);

    try {
      await sessions.logout();
      setUser(undefined);
    } finally {
      setLoading(false);
    }
  }

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
      error,
      login,
      logout,
    }),
    [user, loading, error],
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
