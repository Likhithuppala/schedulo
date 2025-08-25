import BackButton from "../common-components/back-button";
import ToggleTheme from "../common-components/toggle-theme";
import AuthForm from "../common-components/auth-form";
import "./login-page.css";

const LoginPage = () => {
  return (
    <div className="login-page">
      <div className="top-bar">
        <BackButton to="/" />
        <ToggleTheme />
      </div>

      <div className="login-content">
        <h1 className="login-title">Login</h1>
        <AuthForm type="login" linkTo="/signin" linkText="Sign Up" />
      </div>
    </div>
  );
};

export default LoginPage;
