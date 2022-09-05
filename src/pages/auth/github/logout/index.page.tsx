import { useEffect } from "react";
import { useRouter } from "next/router";
import { Provider } from "@webclient/shared/auth/types";
import { useAuth } from "@webclient/shared/auth/use-auth";
import { nextRouterQueryParam } from "@webclient/shared/react/next-router-query-param";

const Logout = function Logout() {
  const router = useRouter();
  const auth = useAuth();

  useEffect(() => {
    if (!router.isReady) {
      return;
    }

    const doRedirectToLogout = async function doRedirectToLogout() {
      auth.logout(Provider.GITHUB);

      const redirectUri = nextRouterQueryParam(router.query.redirect_uri, "/");

      router.push(redirectUri);
    };

    doRedirectToLogout();
  }, [router, router.isReady, auth]);

  return null;
};

export { Logout, Logout as default };
