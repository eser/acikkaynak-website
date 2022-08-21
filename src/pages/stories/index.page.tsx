import Link from "next/link";
import { NextSeo } from "next-seo";
import { type CustomPage } from "@webclient/pages/_app.types";
import { allStories, Story } from "contentlayer/generated";
import styles from "./index.module.css";

const getStaticProps = async function getStaticProps() {
  const stories: Story[] = allStories.sort((a, b) => {
    return new Date(a.date).getTime() - new Date(b.date).getTime();
  });

  return { props: { stories } };
};

const StoryCard = function StoryCard(story: Story) {
  const date = new Date(story.date).toLocaleString("tr-TR");

  return (
    <div className={styles.story}>
      <h3>
        <Link href={story.url}>
          <a>{story.title}</a>
        </Link>
      </h3>
      <time dateTime={date}>
        {date}
      </time>
      <div
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: story.body.html }}
      />
    </div>
  );
};

interface StoriesProps {
  stories: Story[];
}

const Stories: CustomPage = function Stories(props: StoriesProps) {
  return (
    <>
      <NextSeo title="Yazılar" />

      <section className={styles.section}>
        <h2>Yazılar</h2>

        <div className={styles.stories}>
          {props.stories.map((story, idx) => (
            <StoryCard
              key={idx}
              {...story}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export { getStaticProps, Stories, Stories as default, StoryCard };
