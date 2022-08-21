import { useEffect, useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import Image from "next/future/image";
import { ThemeSwitcher } from "./theme-switcher";
import LogoImage from "./logo.svg";
import LogoDarkImage from "./logo-dark.svg";
import styles from "./header.module.css";

interface HeaderProps {
}

const Header = (props: HeaderProps) => {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return null;
  }

  return (
    <nav className={styles.nav}>
      <div>
        <Link href="/">
          <a>
            <Image
              src={(theme === "dark") ? LogoDarkImage : LogoImage}
              alt="açık-kaynak.org Logo"
              width="350"
              height="70"
            />
          </a>
        </Link>
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
            <Link href="/stories">
              <a>
                yazılar
              </a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>
                hakkında
              </a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>
                destek
              </a>
            </Link>
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
