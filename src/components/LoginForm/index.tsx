import { Button, Form, Input } from "antd";
import "./style.css";
const LoginForm: React.FC = () => {
  type LoginFormResult = {
    email: string;
    password: string;
  };
  const onFinish = (values: LoginFormResult) => {
    console.log("Received values of form: ", values);
  };
  const [form] = Form.useForm();
  return (
    <Form
      form={form}
      name="login"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      className="login-form"
      layout="vertical"
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

      <Form.Item>
        <Button
          block
          type="primary"
          htmlType="submit"
          className="login-form_button"
        >
          Войти
        </Button>
      </Form.Item>
    </Form>
  );
};
export default LoginForm;
