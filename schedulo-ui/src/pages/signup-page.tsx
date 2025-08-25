import BackButton from "../common-components/back-button";
import ToggleTheme from "../common-components/toggle-theme";
import AuthForm from "../common-components/auth-form";
import "./signup-page.css";

const SignUpPage = () => {
  return (
    <div className="signin-page">
      <div className="top-bar">
        <BackButton to="/" />
        <ToggleTheme />
      </div>

      <div className="signin-content">
        <h1 className="signin-title">Sign Up</h1>
        <AuthForm type="signin" linkTo="/login" linkText="Login" />
      </div>
    </div>
  );
};

export default SignUpPage;
