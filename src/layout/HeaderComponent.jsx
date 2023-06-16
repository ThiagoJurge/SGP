import { Layout, theme } from "antd";
import Title from "antd/es/typography/Title";
import React from "react";
const { Header } = Layout;

const HeaderComponent = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <center>
      <Header
        style={{
          padding: 1,
          background: colorBgContainer,
        }}
      >
        <Title level={2}>SGP - Sistema de Gerenciamento Padtec</Title>
      </Header>
    </center>
  );
};

export default HeaderComponent;
