import { useState } from "react";
import { Input, Button } from "antd";
import { Link } from "react-router-dom";
import "./auth-form.css";

interface AuthFormProps {
  type: "login" | "signin";
  linkTo: string;
  linkText: string;
}

const AuthForm: React.FC<AuthFormProps> = ({ type, linkTo, linkText }) => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // TODO: Replace with API call later
    setTimeout(() => {
      setLoading(false);
      alert(`${type === "login" ? "Logged in" : "Signed up"} successfully!`);
    }, 1000);
  };

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <Input placeholder="Email" type="email" className="auth-input" required />
      <Input.Password placeholder="Password" className="auth-input" required />

      {type === "signin" && (
        <Input.Password
          placeholder="Confirm Password"
          className="auth-input"
          required
        />
      )}

      <Button
        type="primary"
        htmlType="submit"
        loading={loading}
        className="auth-button"
      >
        {type === "login" ? "Login" : "Sign Up"}
      </Button>

      {/* Footer text */}
      <div className="auth-footer">
        {type === "login"
          ? "Don't have an account?"
          : "Already have an account?"}
        <Link to={linkTo}>{linkText}</Link>
      </div>
    </form>
  );
};

export default AuthForm;
