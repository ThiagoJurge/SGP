import { Result } from "antd";
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
      return setComponent(
        <Result
          status="warning"
          title="Recurso ainda indisponível"
          subTitle={
            <>
              <p>Este componente será implementado em uma versão futura.</p>
              <p> Componente: {deviceFamily}</p>
            </>
          }
        />
      );
    }
  }, [deviceKey]);
  return <>{component}</>;
};
export default DeviceInfo;
