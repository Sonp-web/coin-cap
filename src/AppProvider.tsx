import { ConfigProvider } from "antd";
interface AppProvidersProps {
  children: React.ReactNode;
}
export const AppProvider: React.FC<AppProvidersProps> = ({
  children,
}: AppProvidersProps) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          fontFamily: "Inter, sans-serif",
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
};
