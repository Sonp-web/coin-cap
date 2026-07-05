import { Flex, Typography, Form, Input, Button } from "antd";
import type { FormProps } from "antd";
import "./style.css";
const Subscribe: React.FC = () => {
  type FieldType = {
    email: string;
  };

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo,
  ) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <section className="subscribe-section">
      <Flex className="subscribe-wrapper">
        <Flex
          vertical
          style={{ alignItems: "self-start" }}
          className="subscribe-first"
        >
          <Typography.Title level={2} className="subscribe-title">
            Главные новости мира криптовалют. Где угодно. Когда угодно.
          </Typography.Title>
          <Typography.Paragraph className="subscribe-subtitle">
            Я хочу получать последние криптовалютные новости о результатах
            исследований, программах вознаграждения, текущих событиях, листингах
            и не только от CoinMarketCap по электронной почте.
          </Typography.Paragraph>
          <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            layout="inline"
            className="subscribe-form"
          >
            <Form.Item<FieldType> name="email" className="subscribe-input">
              <Input placeholder="Введите адрес электронной очереди" />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="subscribe-btn"
              >
                Подтвердить
              </Button>
            </Form.Item>
          </Form>
        </Flex>
        <img
          src="https://s2.coinmarketcap.com/static/cloud/img/newsletter_bg_dark.svg?_=0e37661"
          className="subscribe-img"
        />
      </Flex>
    </section>
  );
};
export default Subscribe;
