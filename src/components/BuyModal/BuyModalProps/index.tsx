import type { BuyModalType } from "..";
import type { FormProps } from "antd";
import { Button, Form, Input } from "antd";
import { useAppDispatch } from "../../../hooks/hooks";
import { getCoinData } from "../../../api/coinData";
import "./style.css";
import { useForm } from "antd/es/form/Form";
type FieldType = {
  count: string;
};

export const BuyModalProps: React.FC<BuyModalType> = ({ url }) => {
  const dispatch = useAppDispatch();
  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    dispatch(getCoinData({ url, count: values.count }));
    form.resetFields();
  };

  const [form] = useForm();
  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo,
  ) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div
      onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
        e.stopPropagation()
      }
    >
      <Form
        form={form}
        name="buy"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item<FieldType>
          label="Количество"
          name="count"
          className="buy-modal-title"
        >
          <Input />
        </Form.Item>

        <div style={{ textAlign: "center" }}>
          <Button type="primary" htmlType="submit">
            Купить
          </Button>
        </div>
      </Form>
    </div>
  );
};
