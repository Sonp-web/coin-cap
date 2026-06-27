import React, { useState } from "react";
import { Button, Modal, Tabs, Radio, Row, Col, Flex } from "antd";
import type { TabsProps } from "antd";
import { RightOutlined, CheckCircleFilled } from "@ant-design/icons";
import type { RadioChangeEvent } from "antd";
import "./style.css";
import {
  DollarOutlined,
  EuroOutlined,
  PoundOutlined,
  WalletOutlined,
} from "@ant-design/icons";
const ProfileSettings: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<string>("currency");

  const [selectedValueCurrency, setSelectedValueCurrency] =
    useState<string>("USD");
  const [selectedValueLanguage, setSelectedValueLanguage] =
    useState<string>("Русский");

  const openModal = (tab: string) => {
    setActiveTab(tab);
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const handleChangeCurrency = (e: RadioChangeEvent) => {
    setSelectedValueCurrency(e.target.value);
    handleCancel();
  };
  const handleChangeLanguage = (e: RadioChangeEvent) => {
    setSelectedValueLanguage(e.target.value);
    handleCancel();
  };

  const optionsCurrency = [
    {
      label: "United States Dollar",
      value: "USD",
      icon: <DollarOutlined style={{ color: "#16C784", fontSize: "18px" }} />,
    },
    {
      label: "Euro",
      value: "EUR",
      icon: <EuroOutlined style={{ color: "#4A90D9", fontSize: "18px" }} />,
    },
    {
      label: "Russian Ruble",
      value: "RUB",
      icon: <WalletOutlined style={{ color: "#FF6B6B", fontSize: "18px" }} />,
    },
    {
      label: "British Pound Sterling",
      value: "GBP",
      icon: <PoundOutlined style={{ color: "#FFD93D", fontSize: "18px" }} />,
    },
    {
      label: "Japanese Yen",
      value: "JPY",
      icon: <WalletOutlined style={{ color: "#FF9F43", fontSize: "18px" }} />,
    },
    {
      label: "Chinese Yuan",
      value: "CNY",
      icon: <WalletOutlined style={{ color: "#E17055", fontSize: "18px" }} />,
    },
  ];
  const optionsLanguage = [
    { label: "EN", value: "English" },
    { label: "RU", value: "Русский" },
    { label: "DE", value: "Deutsch" },
    { label: "FR", value: "Français" },
    { label: "ES", value: "Español" },
    { label: "ZH", value: "中文" },
    { label: "JA", value: "日本語" },
    { label: "KO", value: "한국어" },
    { label: "IT", value: "Italiano" },
    { label: "PT", value: "Português" },
  ];

  const items: TabsProps["items"] = [
    {
      key: "currency",
      label: "Currency",
      children: (
        <div>
          <Radio.Group
            onChange={handleChangeCurrency}
            value={selectedValueCurrency}
            className="profile-settings_radio-group"
          >
            {" "}
            <Row gutter={[12, 12]}>
              {optionsCurrency.map((option) => (
                <Col span={6} key={option.value}>
                  <Radio.Button
                    value={option.value}
                    className="grid-radio-button"
                    style={{ width: "100%", textAlign: "center" }}
                  >
                    <Flex justify="space-between" text-align="center">
                      <Flex gap="small">
                        {option.icon}
                        <Flex vertical align="flex-start">
                          <p className="profile-settings_choice-title">
                            {option.label}
                          </p>
                          <p className="profile-settings_choice-subtitle">
                            {option.value}
                          </p>
                        </Flex>
                      </Flex>

                      {selectedValueCurrency === option.value && (
                        <CheckCircleFilled className="profile-settings_icon" />
                      )}
                    </Flex>
                  </Radio.Button>
                </Col>
              ))}
            </Row>
          </Radio.Group>
        </div>
      ),
    },
    {
      key: "language",
      label: "Language",
      children: (
        <div>
          <Radio.Group
            onChange={handleChangeLanguage}
            value={selectedValueLanguage}
            className="profile-settings_radio-group"
          >
            {" "}
            <Row gutter={[12, 12]}>
              {optionsLanguage.map((option) => (
                <Col span={6} key={option.value}>
                  <Radio.Button
                    value={option.value}
                    className="grid-radio-button"
                    style={{ width: "100%", textAlign: "center" }}
                  >
                    <Flex justify="space-between" text-align="center">
                      <Flex vertical align="flex-start">
                        <p className="profile-settings_choice-title">
                          {option.value}
                        </p>
                        <p className="profile-settings_choice-subtitle">
                          {option.label}
                        </p>
                      </Flex>
                      {selectedValueLanguage === option.value && (
                        <CheckCircleFilled className="profile-settings_icon" />
                      )}
                    </Flex>
                  </Radio.Button>
                </Col>
              ))}
            </Row>
          </Radio.Group>
        </div>
      ),
    },
  ];

  return (
    <div className="profile-settings">
      <Button
        className="profile-list-button"
        onClick={() => openModal("currency")}
      >
        <span>Настройки валюты</span>
        <span className="profile-settings_value">
          {selectedValueCurrency}
          <RightOutlined />
        </span>
      </Button>

      <Button
        className="profile-list-button"
        onClick={() => openModal("language")}
      >
        <span>Настройки языка</span>
        <span className="profile-settings_value">
          {selectedValueLanguage}
          <RightOutlined />
        </span>
      </Button>

      <Modal
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
        width={980}
        className="settings-modal"
      >
        <Tabs
          activeKey={activeTab}
          items={items}
          onChange={setActiveTab}
          className="settings-tabs profile-settings"
        />
      </Modal>
    </div>
  );
};

export default ProfileSettings;
