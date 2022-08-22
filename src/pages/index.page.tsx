import { memo, useRef } from "react";
import Link from "next/link";
import Image from "next/future/image";
import { NextSeo } from "next-seo";
import { type CustomPage } from "@webclient/pages/_app.types";
import styles from "./index.module.css";
import openSourceImage from "./open-source.svg";

const TopicsList = function TopicsList() {
  const data = {
    categories: [
      {
        id: 0,
        title: "Açık Kaynak Yazılım",
        items: [
          {
            id: 1,
            isDraft: true,
            title: "Açık Kaynak Yazılım Nedir?",
            url: "",
            description: "Bu yazı henüz hazır değildir",
          },
          {
            id: 2,
            isDraft: true,
            title: "Özgür Yazılım ve Açık Kaynak arasındaki farklar",
            url: "",
            description: "Bu yazı henüz hazır değildir",
          },
          {
            id: 3,
            isDraft: true,
            title: "Lisanslar",
            url: "",
            description: "Bu yazı henüz hazır değildir",
          },
        ],
      },
      {
        id: 1,
        title: "Açık Kaynak Geliştirme",
        items: [
          {
            id: 1,
            isDraft: true,
            title: "Sürüm Kontrol Sistemleri",
            url: "",
            description: "Bu yazı henüz hazır değildir",
          },
          {
            id: 2,
            isDraft: true,
            title: "GitHub Platformu",
            url: "",
            description: "Bu yazı henüz hazır değildir",
          },
        ],
      },
      {
        id: 2,
        title: "Katılım",
        items: [
          {
            id: 1,
            isDraft: true,
            title: "Açık Kaynak projelerde katılım tanımlaması",
            url: "",
            description: "Bu yazı henüz hazır değildir",
          },
          {
            id: 2,
            isDraft: true,
            title: "Nasıl katılım sağlarım?",
            url: "",
            description: "Bu yazı henüz hazır değildir",
          },
          {
            id: 3,
            isDraft: true,
            title: "GitHub üzerinden katılım sağlamak",
            url: "",
            description: "Bu yazı henüz hazır değildir",
          },
        ],
      },
      {
        id: 3,
        title: "Organizasyon",
        items: [
          {
            id: 1,
            isDraft: true,
            title: "Açık Kaynak projeme katılımcı nasıl bulabilirim?",
            url: "",
            description: "Bu yazı henüz hazır değildir",
          },
          {
            id: 2,
            isDraft: true,
            title: "Katılım fıkrım var ama ingilizce eksiğim var",
            url: "",
            description: "Bu yazı henüz hazır değildir",
          },
          {
            id: 3,
            isDraft: true,
            title: "Katılım fikrim var ama teknik eksiğim var",
            url: "",
            description: "Bu yazı henüz hazır değildir",
          },
          {
            id: 4,
            isDraft: true,
            title: "Katılım fikrim var ama fikir danışmaya ihtiyacım var",
            url: "",
            description: "Bu yazı henüz hazır değildir",
          },
        ],
      },
    ],
  };

  return (
    <>
      {data?.categories?.map((category) => (
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
          <h2>Hoşgeldiniz 👋</h2>
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
          />
        </div>
      </section>

      <section ref={sectionRef} className={styles["learn-section"]}>
        <h1>Rehber</h1>

        <TopicsListMemoized />
      </section>
    </>
  );
};

export { Home, Home as default };
