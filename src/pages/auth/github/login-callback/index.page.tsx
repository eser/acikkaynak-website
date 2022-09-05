import { useEffect } from "react";
import { useRouter } from "next/router";
import { Provider } from "@webclient/shared/auth/types";
import { useAuth } from "@webclient/shared/auth/use-auth";
import { nextRouterQueryParam } from "@webclient/shared/react/next-router-query-param";

const Callback = function Callback() {
  const router = useRouter();
  const auth = useAuth();

  useEffect(() => {
    if (!router.isReady) {
      return;
    }

    const doGetCode = async function doGetCode() {
      if (router.query.code === undefined) {
        return;
      }

      const code = nextRouterQueryParam(router.query.code);
      if (code !== undefined) {
        auth.login(Provider.GITHUB, code);
      }

      const redirectUri = nextRouterQueryParam(router.query.redirect_uri, "/");
      router.push(redirectUri);
    };

    doGetCode();
  }, [router, router.isReady, auth]);

  return null;
};

export { Callback, Callback as default };
