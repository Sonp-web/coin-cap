import { Radio, Flex } from "antd";
import type { CheckboxGroupProps } from "antd/es/checkbox";
import "./style.css";
const ThemeChoice: React.FC = () => {
  const options: CheckboxGroupProps<string>["options"] = [
    { label: "Светлый", value: "light" },
    { label: "Темный", value: "dark" },
    { label: "Система", value: "system" },
  ];
  return (
    <Flex align="center" gap="small" className="theme-choice_wrapper">
      <p className="theme-choice_title">Тема</p>
      <Radio.Group
        block
        options={options}
        defaultValue="dark"
        optionType="button"
        buttonStyle="solid"
        className="theme-choice"
      />
    </Flex>
  );
};
export default ThemeChoice;
