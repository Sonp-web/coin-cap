import { Flex } from "antd";
import "./style.css";
import { CaretUpOutlined, CaretDownOutlined } from "@ant-design/icons";
type ArrowsUpDownType = {
  isDone: number;
};
const ArrowsUpDown: React.FC<ArrowsUpDownType> = ({ isDone }) => {
  return (
    <Flex vertical className="arrows-up-down">
      <CaretUpOutlined
        style={isDone == 1 ? { color: "#fff" } : { color: "#646b80" }}
      />
      <CaretDownOutlined
        style={isDone == -1 ? { color: "#fff" } : { color: "#646b80" }}
      />
    </Flex>
  );
};
export default ArrowsUpDown;
