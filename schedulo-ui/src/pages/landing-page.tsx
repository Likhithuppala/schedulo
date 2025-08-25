import "./landing-page.css";
import Button from "../common-components/button";
import { useNavigate } from "react-router-dom";
import ToggleTheme from "../common-components/toggle-theme";
import { useTheme } from "../context/theme-context";

const LandingPage = () => {
  const navigate = useNavigate();
  const { theme } = useTheme();

  return (
    <div className={`landing-page ${theme}`}>
      <div className="overlay" />

      {/* Top-right theme toggle */}
      <div className="theme-toggle-container">
        <ToggleTheme />
      </div>

      <div className="main-layout">
        <div className="header">
          <h1 className={`title ${theme}`}>Schedulo</h1>
        </div>
        <div className="button-container">
          <Button text="Login" onClick={() => navigate("/login")} />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
