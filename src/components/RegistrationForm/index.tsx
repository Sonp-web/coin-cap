import RegistrationFormButton from "../RegistrationFormButton";
import { Flex, Form, Input, Checkbox, Button } from "antd";
import {
  GoogleOutlined,
  AppleOutlined,
  CreditCardOutlined,
} from "@ant-design/icons";
import "./style.css";
export type ButtonType = {
  icon: React.ReactNode;
  text: string;
};
type RegistrationFormType = {
  email: string;
  password: string;
  agreement: boolean;
};
const RegistrationForm: React.FC = () => {
  const buttons: ButtonType[] = [
    { icon: <GoogleOutlined />, text: "Продолжить с Google" },
    { icon: <AppleOutlined />, text: "Продолжить с Apple" },
    { icon: <CreditCardOutlined />, text: "Продолжить с Кошельком" },
  ];
  const [form] = Form.useForm();

  const onFinish = (values: RegistrationFormType) => {
    console.log("Received values of form: ", values);
  };

  return (
    <>
      <Flex vertical gap="medium">
        {buttons.map((item) => (
          <RegistrationFormButton
            icon={item.icon}
            text={item.text}
            key={crypto.randomUUID()}
          />
        ))}
      </Flex>
      <p className="registration-form-descr">
        Или продолжить с электронной почтой
      </p>
      <Form
        form={form}
        name="register"
        onFinish={onFinish}
        layout="vertical"
        className="login-form"
      >
        <Form.Item
          name="email"
          label="Адрес эл. почты"
          rules={[
            {
              type: "email",
              message:
                "E-mail, который вы ввели, имеет неправильный формат. Пожалуйста, проверьте.",
            },
            {
              required: true,
              message: "Please input your E-mail!",
            },
          ]}
        >
          <Input placeholder="Введите ваш адрес эл. почты..." />
        </Form.Item>

        <Form.Item
          name="password"
          label="Пароль"
          rules={[{ required: true, message: "Please input your Password!" }]}
        >
          <Input type="password" placeholder="Введите свой пароль" />
        </Form.Item>

        <Form.Item name="agreement" valuePropName="checked">
          <Checkbox className="registration-form-checkbox">
            Я хочу получать последние криптовалютные новости о результатах
            исследований, программах вознаграждения, текущих событиях, листингах
            и не только от CoinMarketCap по электронной почте.
          </Checkbox>
        </Form.Item>
        <Form.Item>
          <Button
            block
            type="primary"
            htmlType="submit"
            className="login-form_button"
          >
            Создать аккаунт
          </Button>
        </Form.Item>
      </Form>
      <p className="registration-form-footer">
        Продолжая, вы принимаете Условия использования и Политику
        конфиденциальности CoinMarketCap.
      </p>
    </>
  );
};
export default RegistrationForm;
