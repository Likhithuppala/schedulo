import { useTheme } from "../context/theme-context";
import { SunOutlined, MoonOutlined } from "@ant-design/icons";
import "./toggle-theme.css";

const ToggleTheme = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className="theme-toggle-btn"
      onClick={toggleTheme}
      aria-label="Toggle Theme"
    >
      {theme === "light" ? (
        <MoonOutlined className="theme-icon dark-icon" />
      ) : (
        <SunOutlined className="theme-icon light-icon" />
      )}
    </button>
  );
};

export default ToggleTheme;
