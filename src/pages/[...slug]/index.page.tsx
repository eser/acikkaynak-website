import { NextSeo } from "next-seo";
import { type CustomPage } from "@webclient/pages/_app.types";
import {
  allStaticPages,
  StaticPage,
  allPosts,
  Post,
} from "@contentlayer/generated";
import styles from "./index.module.css";

const getStaticPaths = async function getStaticPaths() {
  const paths = [...allStaticPages, ...allPosts].map((page) => page.url);

  return {
    paths,
    fallback: false,
  };
};

const getStaticProps = async function getStaticProps({ params }) {
  let page: StaticPage | Post;

  page = allStaticPages.find(
    (page) => page._raw.flattenedPath === `static/${params.slug}`,
  );

  if (!page) {
    page = allPosts.find((post) => post.url === `/${params.slug}`);
  }

  return {
    props: {
      page,
    },
  };
};

interface PageProps {
  page: StaticPage | Post;
}

const page: CustomPage = function page({ page }: PageProps) {
  const date =
    "date" in page && page.date
      ? new Date(page.date).toLocaleString("tr-TR")
      : null;
  const isPost = page.type === "Post";

  return (
    <>
      <NextSeo title={page.title} />

      <article className={styles.article}>
        <div className={styles.page}>
          <h1>{page.title}</h1>
          {date ? <time dateTime={date}>{date}</time> : null}
          {isPost && <span className={styles.topic}>{page.topic}</span>}
          <div
            className={styles.content}
            dangerouslySetInnerHTML={{
              __html: page.body.html,
            }}
          />
        </div>
      </article>
    </>
  );
};

export { getStaticPaths, getStaticProps, page, page as default };
