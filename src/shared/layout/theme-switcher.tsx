import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { Conditional } from "@webclient/shared/react/conditional";
import Link from "next/link";
import styles from "./theme-switcher.module.css";

interface ThemeSwitcherProps {
}

const ThemeSwitcher = (_props: ThemeSwitcherProps) => {
  const { theme, setTheme } = useTheme();

  const switchToTheme = function switchToTheme(targetTheme: string) {
    return (event: React.MouseEvent) => {
      event.preventDefault();
      setTheme(targetTheme);
    };
  };

  return (
    <div>
      <Conditional
        if={theme !== "dark"}
        then={
          <Link href="/">
            <a onClick={switchToTheme("dark")}>
              <MoonIcon className={styles.icon} />
            </a>
          </Link>
        }
        otherwise={
          <Link href="/">
            <a onClick={switchToTheme("light")}>
              <SunIcon className={styles.icon} />
            </a>
          </Link>
        }
      />
    </div>
  );
};

export { ThemeSwitcher, ThemeSwitcher as default };
