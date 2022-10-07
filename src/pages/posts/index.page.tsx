import Link from "next/link";
import { NextSeo } from "next-seo";
import { type CustomPage } from "@webclient/pages/_app.types";
import { allPosts, Post } from "@contentlayer/generated";
import styles from "./index.module.css";

const getStaticProps = async function getStaticProps() {
  const posts: Post[] = allPosts.sort((a, b) => {
    return new Date(a.date).getTime() - new Date(b.date).getTime();
  });

  return {
    props: {
      posts,
    },
  };
};

const SinglePost = function SinglePost(post: Post) {
  const date = post.date ? new Date(post.date).toLocaleString("tr-TR") : null;

  return (
    <>
      <div className={styles.post}>
        <h3>
          <Link href={post.url}>
            <a>{post.title}</a>
          </Link>
        </h3>
        {date ? <time dateTime={date}>{date}</time> : null}
        <span className={styles.topic}>{post.topic}</span>
        <div className={styles.content}>
          <p>{post.excerpt}</p>
        </div>
      </div>
    </>
  );
};

interface StoriesProps {
  posts: Post[];
}

const posts: CustomPage = function posts(props: StoriesProps) {
  return (
    <>
      <NextSeo title="Yazılar" />

      <section className={styles.section}>
        <h1>Yazılar</h1>

        <div className={styles.posts}>
          {props.posts.map((post, idx) => (
            <SinglePost key={idx} {...post} />
          ))}
        </div>
      </section>
    </>
  );
};

export { getStaticProps, posts, posts as default };
