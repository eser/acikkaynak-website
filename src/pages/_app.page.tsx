import { DefaultSeo } from "next-seo";
import { ThemeProvider } from "next-themes";
import { type CustomAppProps } from "./_app.types";
import { Layout } from "@webclient/shared/layout/index";
import { defaults } from "@webclient/shared/defaults";
import "@webclient/shared/globals.css";

const components = {
  // h1: Header
};

const CustomApp = function CustomApp(appProps: CustomAppProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <Layout appProps={appProps}>
        <DefaultSeo
          titleTemplate={`${defaults.siteName} - %s`}
          defaultTitle={defaults.siteName}
          openGraph={{
            type: "website",
            locale: defaults.locale,
            url: defaults.webSiteUrl,
            site_name: defaults.siteName,
          }}
          twitter={{
            // handle: defaults.creatorTwitterHandle,
            site: defaults.twitterHandle,
            cardType: "summary_large_image",
          }}
        />
        <appProps.Component {...appProps.pageProps} />
      </Layout>
    </ThemeProvider>
  );
};

export { CustomApp, CustomApp as default };
