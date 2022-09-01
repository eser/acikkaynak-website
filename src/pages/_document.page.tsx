import { Head, Html, Main, NextScript } from "next/document";

const CustomDocument = function CustomDocument() {
  return (
    <Html lang="tr-TR">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export { CustomDocument, CustomDocument as default };
