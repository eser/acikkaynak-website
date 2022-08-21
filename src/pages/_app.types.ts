import { type AppProps } from "next/app";
import { type NextPage } from "next";

type CustomPage = NextPage;

type CustomAppProps = AppProps & {
  Component: CustomPage;
};

export { type CustomAppProps, type CustomPage };
