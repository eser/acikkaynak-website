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
                  <div className={styles["topic-content-left"]}>
                    <svg
                      id="topic"
                      height="32"
                      viewBox="0 0 91 91"
                      width="32"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ fill: "currentColor" }}
                    >
                      <g>
                        <path d="m41.61 62.66 10.39-2.66a1.71 1.71 0 0 0 .92-.48l36.17-36.19a5.14 5.14 0 0 0 0-7.26l-2.92-2.93a5.1 5.1 0 0 0 -3.64-1.5 5.1 5.1 0 0 0 -3.63 1.5l-6 6v-11.31a7.19 7.19 0 0 0 -7.22-7.18h-57.74a7.19 7.19 0 0 0 -7.18 7.18v62.64a7.19 7.19 0 0 0 7.18 7.18h27.42l17.27 12.35a1.75 1.75 0 0 0 2.77-1.42v-10.93h10.28a7.19 7.19 0 0 0 7.18-7.18v-19.83a1.75 1.75 0 0 0 -3.5 0v19.83a3.68 3.68 0 0 1 -3.68 3.68h-14.84a1.75 1.75 0 0 0 0 3.5h1.06v7.53l-15-10.71a1.73 1.73 0 0 0 -1-.32h-28a3.68 3.68 0 0 1 -3.68-3.68v-62.64a3.68 3.68 0 0 1 3.72-3.68h57.74a3.68 3.68 0 0 1 3.68 3.68v14.85l-26.63 26.63a1.75 1.75 0 0 0 -.48.92l-2.78 10.27a1.7 1.7 0 0 0 .44 1.7 1.82 1.82 0 0 0 1.7.46zm36.8-44.08 5.24 5.24-32 32-5.24-5.23zm-33.47 35.42 3.26 3.26-4.53 1.23zm37.59-38.86a1.63 1.63 0 0 1 1.16.48l2.92 2.92a1.63 1.63 0 0 1 0 2.31l-.49.49-5.23-5.23.49-.49a1.59 1.59 0 0 1 1.15-.48z" />
                        <path d="m17.27 18.35h14.26a1.75 1.75 0 0 0 0-3.5h-14.26a1.75 1.75 0 0 0 0 3.5z" />
                        <path d="m50.11 18.35a1.75 1.75 0 0 0 0-3.5h-10.9a1.75 1.75 0 1 0 0 3.5z" />
                        <path d="m17.27 33h6.73a1.75 1.75 0 0 0 0-3.5h-6.73a1.75 1.75 0 1 0 0 3.5z" />
                        <path d="m38.56 45.93a1.75 1.75 0 0 0 -1.75-1.75h-6.09a1.75 1.75 0 0 0 0 3.5h6.09a1.75 1.75 0 0 0 1.75-1.75z" />
                        <path d="m17.27 62.34h16.82a1.75 1.75 0 0 0 0-3.5h-16.82a1.75 1.75 0 1 0 0 3.5z" />
                        <path d="m60.09 18.35a1.75 1.75 0 0 0 0-3.5h-3.36a1.75 1.75 0 1 0 0 3.5z" />
                        <path d="m51.86 31.27a1.75 1.75 0 0 0 -1.75-1.75h-19a1.75 1.75 0 1 0 0 3.5h19a1.75 1.75 0 0 0 1.75-1.75z" />
                        <path d="m22.72 44.18h-3.72a1.75 1.75 0 1 0 0 3.5h3.77a1.75 1.75 0 1 0 0-3.5z" />
                      </g>
                    </svg>
                  </div>
                  <div className={styles["topic-content-right"]}>
                    <h3>
                      {item.title}
                    </h3>
                    <div>{item.description}</div>
                  </div>
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
            Açık kaynak ekosistemine katkıda bulunmak, insanları açık kaynak
            geliştirmeye motive etmek, farkındalık oluşturmak ve bu alanda
            içerik sağlamak için <a href="https://10forward.io/">10forward</a>
            {" "}
            meta-topluluğunun bir alt mecrası olarak ilgililere rehber olmaya
            çalışıyoruz.
            <br />
            <br />
            Bu girişim üzerinden açık kaynak hakkında{" "}
            <strong>içeriklere</strong> ve açık kaynak{" "}
            <strong>projelere</strong> erişebileceksiniz.
          </p>
          <div>
            <div className="buttons">
              <Link href="/about" passHref>
                <a>
                  Bilgi
                </a>
              </Link>
              <Link href="/" passHref>
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
