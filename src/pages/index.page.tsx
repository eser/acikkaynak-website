import { memo, useRef } from "react";
import Link from "next/link";
import Image from "next/future/image";
import { NextSeo } from "next-seo";
import { type CustomPage } from "@webclient/pages/_app.types";
import styles from "./index.module.css";
import openSourceImage from "./open-source.svg";
import topics from "./topics.json";

const TopicsList = function TopicsList() {
  return (
    <>
      {topics?.categories?.map((category) => (
        <div key={category.id} className={styles.topics}>
          <h2 key={category.title}>{category.title}</h2>

          <ul>
            {category.items?.map((item) => (
              <li
                key={item.id}
                className={item.isDraft ? styles.draft : undefined}
                onClick={(e) => {
                  if (item.isDraft) {
                    e.preventDefault();
                  }
                }}
              >
                <a href={item.url}>
                  <h3>
                    {item.title}
                  </h3>
                  <div>{item.description}</div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
};

const TopicsListMemoized = memo(TopicsList);

const Home: CustomPage = function Home() {
  const sectionRef = useRef<HTMLElement>();

  return (
    <>
      <NextSeo />

      <section className={styles["hero-section"]}>
        <div className={styles["left-side"]}>
          <h2>Hoş geldiniz 👋</h2>
          <p>
            2015&apos;ten bu yana Türkiye&apos;deki ve Türkçe konuşan
            geliştiricilerin oluşturduğu açık kaynak ekosistemine katkıda
            bulunmak, insanları açık kaynak geliştirmeye motive etmek,
            farkındalık oluşturmak ve engelleri ortadan kaldırmak için faaliyet
            gösteriyoruz.
          </p>
          <div>
            <div className="buttons">
              <Link href="/about">
                <a>
                  Bilgi
                </a>
              </Link>
              <Link href="/">
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    sectionRef.current.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }}
                >
                  Rehber
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className={styles["right-side"]}>
          <Image
            src={openSourceImage}
            alt="Open Source"
            width="498"
            height="328"
            priority={true}
          />
        </div>
      </section>

      <section ref={sectionRef} className={styles["learn-section"]}>
        <a id="guide">
          <h1>Rehber</h1>
        </a>

        <TopicsListMemoized />
      </section>
    </>
  );
};

export { Home, Home as default };
