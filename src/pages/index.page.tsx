import Image from "next/future/image";
import { NextSeo } from "next-seo";
import { type CustomPage } from "@webclient/pages/_app.types";
import styles from "./index.module.css";
import openSourceImage from "./open-source.svg";

const Home: CustomPage = function Home() {
  return (
    <>
      <NextSeo title="Home" />

      <section className={styles["hero-section"]}>
        <div className={styles["left-side"]}>
          <p>
            2015&apos;ten bu yana açık kaynak farkındalığı oluşturuyor, topluluk
            faaliyetleri yürütüyor, proje geliştiriyor ve yardımlaşıyoruz
          </p>
          <div className="button">
            <a
              rel="noopener noreferrer"
              href="#"
            >
              Bilgi
            </a>
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

      <p>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </p>
    </>
  );
};

export { Home, Home as default };
