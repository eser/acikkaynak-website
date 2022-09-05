import { useEffect } from "react";
import { useRouter } from "next/router";
import { nextRouterQueryParam } from "@webclient/shared/react/next-router-query-param";

const Login = function Login() {
  const router = useRouter();

  useEffect(() => {
    if (!router.isReady) {
      return;
    }

    const doRedirectToLogin = async function doRedirectToLogin() {
      const redirectUri = new URL(process.env.NEXT_PUBLIC_GITHUB_CALLBACK_URL);
      redirectUri.searchParams.set(
        "redirect_uri",
        nextRouterQueryParam(router.query.redirect_uri, "/"),
      );

      const authUrl =
        `http://github.com/login/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID}&redirect_uri=${redirectUri.toString()}`;

      router.push(authUrl);
    };

    doRedirectToLogin();
  }, [router, router.isReady]);

  return null;
};

export { Login, Login as default };
