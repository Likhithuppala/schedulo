import "./landing-page.css";
import Button from "../common-components/button";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-page">
      <div className="overlay" />
      <div className="main-layout">
        <header className="header fade-in">
          <h1 className="glossy-title">Schedulo</h1>
        </header>

        <footer className="footer fade-in-delay">
          <Button text="Login" onClick={() => navigate("/login")} />
        </footer>
      </div>
    </div>
  );
};

export default LandingPage;
