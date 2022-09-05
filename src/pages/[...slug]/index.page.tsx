import { NextSeo } from "next-seo";
import { type CustomPage } from "@webclient/pages/_app.types";
import { allStaticPages, StaticPage } from "@contentlayer/generated";
import styles from "./index.module.css";

const getStaticPaths = async function getStaticPaths() {
  const paths = allStaticPages.map((staticPage) => staticPage.url);

  return {
    paths,
    fallback: false,
  };
};

const getStaticProps = async function getStaticProps({ params }) {
  const staticPage = allStaticPages.find((staticPage) =>
    staticPage._raw.flattenedPath === `static/${params.slug}`
  );

  return {
    props: {
      staticPage,
    },
  };
};

interface StaticPageProps {
  staticPage: StaticPage;
}

const StaticPage: CustomPage = function StaticPage(props: StaticPageProps) {
  const date = new Date(props.staticPage.date).toLocaleString("tr-TR");

  return (
    <>
      <NextSeo title={props.staticPage.title} />

      <article className={styles.article}>
        <div className={styles.page}>
          <h1>{props.staticPage.title}</h1>
          <time dateTime={date}>
            {date}
          </time>
          <div
            className={styles.content}
            dangerouslySetInnerHTML={{ __html: props.staticPage.body.html }}
          />
        </div>
      </article>
    </>
  );
};

export { getStaticPaths, getStaticProps, StaticPage, StaticPage as default };
