import { type ReactNode } from "react";
import Head from "next/head";
import { Header } from "./header";
import { Footer } from "./footer";
import { type CustomAppProps } from "@webclient/pages/_app.types";

interface LayoutProps {
  appProps: CustomAppProps;
  children: ReactNode;
}

const Layout = function Layout(props: LayoutProps) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
      </Head>
      <Header />
      <main>
        {props.children}
      </main>
      <Footer />
    </>
  );
};

export { Layout, Layout as default };
