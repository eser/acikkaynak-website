import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { Conditional } from "@webclient/shared/react/conditional";
import Link from "next/link";
import styles from "./theme-switcher.module.css";

interface ThemeSwitcherProps {
}

const ThemeSwitcher = (props: ThemeSwitcherProps) => {
  const { theme, setTheme } = useTheme();

  return (
    <div>
      <Link href="/">
        <Conditional
          if={theme !== "dark"}
          then={
            <a
              href="/"
              onClick={(e) => {
                setTheme("dark");
                e.preventDefault();
              }}
            >
              <MoonIcon className={styles.icon} />
            </a>
          }
          otherwise={
            <a
              href="/"
              onClick={(e) => {
                setTheme("light");
                e.preventDefault();
              }}
            >
              <SunIcon className={styles.icon} />
            </a>
          }
        />
      </Link>
    </div>
  );
};

export { ThemeSwitcher, ThemeSwitcher as default };
