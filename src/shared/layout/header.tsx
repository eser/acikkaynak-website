import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Image from "next/future/image";
import { useAuth } from "@webclient/shared/auth/use-auth";
import { ActiveLink } from "@webclient/shared/react/next-link-active";
import { ThemeSwitcher } from "./theme-switcher";
import LogoImage from "./logo.svg";
import LogoDarkImage from "./logo-dark.svg";
import styles from "./header.module.css";
import Conditional from "../react/conditional";
import { useRouter } from "next/router";

interface HeaderProps {
}

const Header = (props: HeaderProps) => {
  const [mounted, setMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { events: routerEvents } = useRouter();
  const auth = useAuth();
  const { theme } = useTheme();

  const toggleMenu = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
      document.body.style.overflow = "";
    } else {
      setIsMenuOpen(true);
      document.body.style.overflow = "hidden";
    }
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = "";
  };

  useEffect(() => {
    routerEvents.on("routeChangeComplete", closeMenu);
    return () => {
      routerEvents.off("routeChangeComplete", closeMenu);
    };
  }, [routerEvents]);

  useEffect(() => {
    return function cleanup() {
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return null;
  }

  return (
    <nav className={styles.nav}>
      <div className={styles["button-menu-logo-wrapper"]}>
        <div className={styles["button-menu"]}>
          <button onClick={toggleMenu}>
            <svg
              data-hide={isMenuOpen}
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Open menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
            <svg
              data-hide={!isMenuOpen}
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Close menu</title>
              <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
            </svg>
          </button>
        </div>
        <div className={styles.logo}>
          <ActiveLink href="/" activeClassName={styles.active}>
            <a>
              <Image
                src={(theme === "dark") ? LogoDarkImage : LogoImage}
                alt="açık-kaynak.org"
                priority={true}
              />
            </a>
          </ActiveLink>
        </div>
      </div>
      <div className={styles.search}>
        {/* TODO: search */}
      </div>
      <div className={styles["menu-outer"]}>
        <div
          className={[styles["menu-inner"], isMenuOpen ? styles.open : []].join(
            " ",
          )}
        >
          <Conditional if={auth.ready && auth.user.isAuthenticated}>
            <span>
              Hoş geldin {auth.user.username} ({auth.user.provider})
            </span>
          </Conditional>
          <ul>
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
              <a
                className={styles.btn}
                href="https://github.com/acikkaynak/acikkaynak"
              >
                GitHub
              </a>
            </li>
          </ul>
          <div className={styles["theme-switcher-wrapper"]}>
            <ThemeSwitcher />
          </div>
          <div className="hidden">
            {/* TODO: auth */}
            giriş yap
          </div>
        </div>
      </div>
    </nav>
  );
};

export { Header, Header as default };
