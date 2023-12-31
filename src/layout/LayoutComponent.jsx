import { Layout } from "antd";
import React from "react";
import SiderComponent from "./SiderComponent";
import HeaderComponent from "./HeaderComponent";
import ContentComponent from "./ContentComponent";
import FooterComponent from "./FooterComponent";

const LayoutComponent = () => {
  return (
    <Layout
      className="site-layout"
      style={{
        marginLeft: '80px',
      }}
    >
      <SiderComponent />
      <Layout
        style={{
          minHeight: "100vh",
          maxHeight: "auto",
        }}
      >
        {/* <HeaderComponent /> */}
        <ContentComponent />
        <FooterComponent />
      </Layout>
    </Layout>
  );
};

export default LayoutComponent;
