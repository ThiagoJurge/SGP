import React, { useState } from "react";
import MenuComponent from "./MenuComponent";
import { Button, Image, Layout, theme } from "antd";
import { RootIcon } from "../icons/Icons";
import Logo from "../assets/logo.png";
import Title from "antd/es/typography/Title";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
const { Sider } = Layout;

const SiderComponent = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Sider
      trigger={null}
      theme="light"
      collapsed
      style={{
        overflow: "auto",
        height: "100vh",
        position: "fixed",
        left: 0,
        top: 0,
        bottom: 0,
      }}
    >
      <div className="demo-logo-vertical">
        <Image src={Logo} preview={false} />
      </div>

      <MenuComponent />
    </Sider>
  );
};

export default SiderComponent;
