import { Layout, theme } from "antd";
const { Content } = Layout;
import React from "react";
import { Route, Routes } from "react-router-dom";
import DeviceTree from "../components/DeviceTree/DeviceTree";

const ContentComponent = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Content
      style={{
        margin: "24px 16px 0",
        overflow: "initial",
      }}
    >
      <div
        style={{
          padding: 24,
          textAlign: "center",
          background: colorBgContainer,
        }}
      >
        <Routes>
          <Route element={<DeviceTree />} path="/tree" />
        </Routes>
      </div>
    </Content>
  );
};

export default ContentComponent;
