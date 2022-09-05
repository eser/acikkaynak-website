import { useEffect, useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import Image from "next/future/image";
import { useAuth } from "@webclient/shared/auth/use-auth";
import { ActiveLink } from "@webclient/shared/react/next-link-active";
import { ThemeSwitcher } from "./theme-switcher";
import LogoImage from "./logo.svg";
import LogoDarkImage from "./logo-dark.svg";
import styles from "./header.module.css";
import Conditional from "../react/conditional";

interface HeaderProps {
}

const Header = (props: HeaderProps) => {
  const [mounted, setMounted] = useState(false);
  const auth = useAuth();
  const { theme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return null;
  }

  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <ActiveLink href="/" activeClassName={styles.active}>
          <a>
            <Image
              src={(theme === "dark") ? LogoDarkImage : LogoImage}
              alt="açık-kaynak.org"
              width="350"
              height="70"
              priority={true}
            />
          </a>
        </ActiveLink>
      </div>
      <div className={styles["button-menu"]}>
        <button>
          <svg
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div className={styles.links}>
        <ul>
          <li>
            <Conditional if={auth.ready && auth.user.isAuthenticated}>
              Hoş geldin {auth.user.username} ({auth.user.provider})
            </Conditional>
          </li>
          {
            /* <li>
            <Link href="/stories">
              <a>
                yazılar
              </a>
            </Link>
          </li> */
          }
          <li>
            <ActiveLink href="/" activeClassName={styles.active}>
              <a>
                rehber
              </a>
            </ActiveLink>
          </li>
          <li>
            <ActiveLink href="/projects/" activeClassName={styles.active}>
              <a>
                projeler
              </a>
            </ActiveLink>
          </li>
          <li>
            <ActiveLink href="/about/" activeClassName={styles.active}>
              <a>
                hakkında
              </a>
            </ActiveLink>
          </li>
          <li>
            <ActiveLink href="/contributing/" activeClassName={styles.active}>
              <a>
                katkı sağlamak
              </a>
            </ActiveLink>
          </li>
          <li>
            <Link href="https://github.com/acikkaynak/acikkaynak">
              <button>
                GitHub
              </button>
            </Link>
          </li>
          <li>
            <ThemeSwitcher />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export { Header, Header as default };
