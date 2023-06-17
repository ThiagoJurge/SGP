import { Card, Result } from "antd";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { LoadingOutlined } from "@ant-design/icons";
import OPSInfo from "../OPSInfo/OPSInfo"; 

const DeviceInfo = () => {

  
  const [component, setComponent] = useState(<LoadingOutlined />);
  const deviceKey = useParams().id;
  const deviceFamily = useParams().family;

  useEffect(() => {
    if (deviceFamily == "ops") {
      return setComponent(<OPSInfo deviceKey={deviceKey} />);
    } else {
      return setComponent("Conteúdo indisponível"
      );
    }
  }, [deviceKey]);
  return <>{component}</>;
};
export default DeviceInfo;
