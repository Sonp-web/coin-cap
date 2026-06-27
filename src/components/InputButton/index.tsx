import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import "./style.css";
const InputButton: React.FC = () => {
  return (
    <Input
      prefix={<SearchOutlined className="search-outlined" />}
      placeholder="Поиск..."
      className="input-header"
      readOnly
    />
  );
};
export default InputButton;
