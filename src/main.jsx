import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
const { darkAlgorithm, compactAlgorithm } = theme;
import { ConfigProvider, theme } from "antd";
import "antd/dist/reset.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ConfigProvider
      theme={{
        algorithm: [darkAlgorithm, compactAlgorithm],
        token: {
          colorFill: "#000",
          wireframe: true,
          colorPrimary: "#2F54EB",
        },
      }}
    >
      <App />
    </ConfigProvider>
  </BrowserRouter>
);
