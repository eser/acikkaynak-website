import Head from "next/head";
import { allStories } from "contentlayer/generated";

export async function getStaticPaths() {
  const paths = allStories.map((story) => story.url);
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const story = allStories.find((story) => story._raw.flattenedPath === `stories/${params.slug}`);

  return {
    props: {
      story,
    },
  };
}

const StoryLayout = ({ story }) => {
  const date = new Date(story.date).toLocaleString("tr-TR");

  return (
    <>
      <Head>
        <title>{story.title}</title>
      </Head>
      <article className="mx-auto max-w-2xl py-16">
        <div className="mb-6 text-center">
          <h1 className="mb-1 text-3xl font-bold">{story.title}</h1>
          <time dateTime={date} className="text-sm text-slate-600">
            {date}
          </time>
        </div>
        <div
          className="cl-story-body"
          dangerouslySetInnerHTML={{ __html: story.body.html }}
        />
      </article>
    </>
  );
};

export default StoryLayout;
