import { CheckCircleOutlined, CloseCircleOutlined } from "@ant-design/icons";
import { Card } from "antd";

export const GeneralInfo = ({ data, way }) => {
  const gridStyle = {
    width: "33%",
    textAlign: "center",
  };
  function validIfExistis(value) {
    if (Object.keys(data.config).length > 0) {
      return value;
    } else {
      return null;
    }
  }
  return (
    <>
      {Object.keys(data).length > 0 && (
        <Card size="small">
          <Card.Grid style={gridStyle} hoverable={false}>
            Modo Automático:{" "}
            {validIfExistis(
              data.config[`general-ops-information-${way}`].automaticMode
            ) ? (
              <CheckCircleOutlined style={{ color: "green" }} />
            ) : (
              <CloseCircleOutlined style={{ color: "red" }} />
            )}
          </Card.Grid>
          <Card.Grid style={gridStyle} hoverable={false}>
            Lockout:{" "}
            {validIfExistis(
              data.config[`general-ops-information-${way}`].lockout
            ) ? (
              <CheckCircleOutlined style={{ color: "green" }} />
            ) : (
              <CloseCircleOutlined style={{ color: "red" }} />
            )}
          </Card.Grid>
          <Card.Grid style={gridStyle} hoverable={false}>
            Tempo de Hold-off:{" "}
            {validIfExistis(
              data.config[`general-ops-information-${way}`].holdOffTime
            )}
          </Card.Grid>
          <Card.Grid style={gridStyle} hoverable={false}>
            Proteção Reversivel:{" "}
            {validIfExistis(
              data.config[`general-ops-information-${way}`].reverseProtection
            ) ? (
              <CheckCircleOutlined style={{ color: "green" }} />
            ) : (
              <CloseCircleOutlined style={{ color: "red" }} />
            )}
          </Card.Grid>
          <Card.Grid style={gridStyle} hoverable={false}>
            Freeze:{" "}
            {validIfExistis(
              data.config[`general-ops-information-${way}`].freeze
            ) ? (
              <CheckCircleOutlined style={{ color: "green" }} />
            ) : (
              <CloseCircleOutlined style={{ color: "red" }} />
            )}
          </Card.Grid>
          <Card.Grid style={gridStyle} hoverable={false}>
            Tempo de Restauração:{" "}
            {validIfExistis(
              data.config[`general-ops-information-${way}`].restoreTime
            )}
          </Card.Grid>
        </Card>
      )}
    </>
  );
};
