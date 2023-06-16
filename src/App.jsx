import { useEffect, useState } from "react";
import LayoutComponent from "./layout/LayoutComponent";
import { Result, theme } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import './Scrollbar.css'; // Import the CSS file

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  const {
    token: { colorBgContainer },
  } = theme.useToken()

  return (
    <>
    {loading ? (
      <Result
        style={{
          background: colorBgContainer,
          width: "100vw",
          height: "100vh",
          textAlign: "center",
          justifyContent: "center",
          alignItems: "center",
          display: "-webkit-flex",
          color: "white",
        }}
        icon={<LoadingOutlined color={colorBgContainer} />}
      />
    ) : (
      <LayoutComponent/>
    )}
    </>
  );
}

export default App;
