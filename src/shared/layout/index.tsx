import { type ReactNode } from "react";
import Head from "next/head";
import { Header } from "./header";
import { Footer } from "./footer";
import { type CustomAppProps } from "@webclient/pages/_app.types";
import styles from "./index.module.css";

interface LayoutProps {
  appProps: CustomAppProps;
  children: ReactNode;
}

const Layout = function Layout(props: LayoutProps) {
  return (
    <>
      <Head>
        <html lang="tr-TR" />
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className={styles.app}>
        <Header />
        <main>{props.children}</main>
        <Footer />
      </div>
    </>
  );
};

export { Layout, Layout as default };
