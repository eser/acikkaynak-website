import styles from "./footer.module.css";
import TenFwdLogoImage from "./10forward-logo.svg";
import TenFwdLogoDarkImage from "./10forward-logo-dark.svg";
import Image from "next/future/image";
import Link from "next/link";
import CcByNcSaImage from "./cc-by-nc-sa.svg";
import { useTheme } from "next-themes";

interface FooterProps {}

const Footer = (props: FooterProps) => {
  const { theme } = useTheme();

  return (
    <footer className={styles.footer}>
      <div className={styles["footer-inner"]}>
        <a href="https://10forward.io/">
          <Image
            src={theme === "dark" ? TenFwdLogoDarkImage : TenFwdLogoImage}
            alt="10forward"
            className={styles.logo}
          />
        </a>
        <p>
          Site içerisinde gördüğünüz içerikler&nbsp;
          <a
            rel="license"
            href="http://creativecommons.org/licenses/by-nc-sa/4.0/"
          >
            Creative Commons Attribution-NonCommercial-ShareAlike 4.0
            International License
          </a>
          &nbsp;ile lisanslanmıştır.
        </p>

        <a
          rel="license"
          href="http://creativecommons.org/licenses/by-nc-sa/4.0/"
        >
          <Image
            alt="Creative Commons Attribution-NonCommercial-ShareAlike 4.0"
            src={CcByNcSaImage}
          />
        </a>

        <div className={styles.nav}>
          <Link href="/projects/" passHref>
            <a>projeler</a>
          </Link>
          <div className={styles.vr}></div>
          <Link href="/about/" passHref>
            <a>hakkında</a>
          </Link>
          <div className={styles.vr}></div>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/acikkaynak"
          >
            github
          </a>
        </div>
      </div>
    </footer>
  );
};

export { Footer, Footer as default };
