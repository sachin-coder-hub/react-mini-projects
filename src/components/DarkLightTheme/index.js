import useLocalStorage from "./useLocalStorage";
import styles from "./theme.css";

export default function LightDarkMode() {
  const [theme, setTheme] = useLocalStorage("theme", "dark");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <div className="light-dark-mode" data-theme={theme}>
      <div className="container">
        <p>Hello world !</p>
        <button onClick={toggleTheme}>Switch</button>
      </div>
    </div>
  );
}
