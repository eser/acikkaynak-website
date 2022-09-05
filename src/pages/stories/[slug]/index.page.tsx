import { NextSeo } from "next-seo";
import { type CustomPage } from "@webclient/pages/_app.types";
import { allStories, Story } from "@contentlayer/generated";
import styles from "./index.module.css";

const getStaticPaths = async function getStaticPaths() {
  const paths = allStories.map((story) => story.url);

  return {
    paths,
    fallback: false,
  };
};

const getStaticProps = async function getStaticProps({ params }) {
  const story = allStories.find((story) =>
    story._raw.flattenedPath === `stories/${params.slug}`
  );

  return {
    props: {
      story,
    },
  };
};

interface StoryProps {
  story: Story;
}

const Story: CustomPage = function Story(props: StoryProps) {
  const date = new Date(props.story.date).toLocaleString("tr-TR");

  return (
    <>
      <NextSeo title={`Yazılar - ${props.story.title}`} />

      <article className={styles.article}>
        <div className={styles.story}>
          <h1>{props.story.title}</h1>
          <time dateTime={date}>
            {date}
          </time>
          <div
            className={styles.content}
            dangerouslySetInnerHTML={{ __html: props.story.body.html }}
          />
        </div>
      </article>
    </>
  );
};

export { getStaticPaths, getStaticProps, Story, Story as default };
