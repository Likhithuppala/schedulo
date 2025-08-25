import { Button } from "antd";
import { LeftOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import "./back-button.css";

interface BackButtonProps {
  to?: string; // optional, defaults to "/"
}

const BackButton: React.FC<BackButtonProps> = ({ to = "/" }) => {
  const navigate = useNavigate();

  return (
    <Button
      type="text"
      shape="circle"
      icon={<LeftOutlined />}
      onClick={() => navigate(to)}
      className="back-button"
    />
  );
};

export default BackButton;
