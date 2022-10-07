import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { Conditional } from "@webclient/shared/react/conditional";
import styles from "./theme-switcher.module.css";

interface ThemeSwitcherProps {}

const ThemeSwitcher = (_props: ThemeSwitcherProps) => {
  const { theme, setTheme } = useTheme();

  const switchToTheme = function switchToTheme(targetTheme: string) {
    return (event: React.MouseEvent) => {
      event.preventDefault();
      setTheme(targetTheme);
    };
  };

  return (
    <Conditional
      if={theme !== "dark"}
      then={
        <button onClick={switchToTheme("dark")}>
          <MoonIcon className={styles.icon} />
        </button>
      }
      otherwise={
        <button onClick={switchToTheme("light")}>
          <SunIcon className={styles.icon} />
        </button>
      }
    />
  );
};

export { ThemeSwitcher, ThemeSwitcher as default };
