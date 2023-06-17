import {
  CaretRightOutlined,
  CheckCircleTwoTone,
  CloseCircleTwoTone,
  ClockCircleTwoTone,
  LineChartOutlined,
  ToolOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Button, Col, Row, Timeline } from "antd";
import { apiPadtec } from "../../../api/api";
import { useState } from "react";
import { OPSGraph } from "./OPSGraph";

export const RouteInfo = ({ way, by, data }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [endpoint, setEndpoint] = useState(false);

  const showModal = (endpoint) => {
    setEndpoint(endpoint);
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  function formatWay(way) {
    if (way == "protectionRoute") {
      return "Rota de Trabalho";
    } else {
      return "Rota de Proteção";
    }
  }

  function checkRoute(route) {
    if (route == "work") {
      return "working";
    } else {
      return route;
    }
  }

  function getLed(way, by) {
    if (way == "A") {
      return `${checkRoute(by)}1`;
    } else {
      return `${checkRoute(by)}2`;
    }
  }

  function formatState(state) {
    if (state == "GREEN") {
      return <CheckCircleTwoTone twoToneColor={"green"} />;
    } else if (state == "RED") {
      return <CloseCircleTwoTone twoToneColor={"red"} />;
    } else {
      return <ClockCircleTwoTone twoToneColor={"gray"} />;
    }
  }

  const items = [
    {
      children: (
        <Row>
          <Col span={22}>
            Limiar Superior de comutação:{" "}
            {Object.keys(data).length > 0
              ? data.config[`op${by === "work" ? "s" : ""}-${by}-route-${way}`][
                  "highPinSwitchingThreshold"
                ]
              : null}
          </Col>
          <Col span={2}>
            <Button icon={<ToolOutlined />} />
          </Col>
        </Row>
      ),
      dot: <CaretRightOutlined />,
    },
    {
      children: (
        <Row>
          <Col span={22}>
            {`Limiar Inferior de comutação: ${
              Object.keys(data).length > 0
                ? data.config[
                    `op${by === "work" ? "s" : ""}-${by}-route-${way}`
                  ]["lowPinSwitchingThreshold"]
                : null
            }`}
          </Col>
          <Col span={2}>
            <Button icon={<ToolOutlined />} />
          </Col>
        </Row>
      ),
      dot: <CaretRightOutlined />,
    },
    {
      children: (
        <Row>
          <Col span={22}>
            Potência de Entrada:{" "}
            {Object.keys(data).length > 0
              ? data.config[`op${by === "work" ? "s" : ""}-${by}-route-${way}`][
                  "pin"
                ].toFixed(2)
              : null}
          </Col>
          <Col span={2}>
            <Button
              icon={<LineChartOutlined />}
              onClick={() =>
                showModal(
                  `/card/advanced/INPUT_POWER/${data.state[
                    "part-number"
                  ].replace("#", "/")}/${checkRoute(
                    by
                  )} Route ${way}/null/null/15m`
                )
              }
            />
          </Col>
        </Row>
      ),
      dot:
        Object.keys(data).length > 0 &&
        formatState(data.state.leds[getLed(way, by)]),
    },
    {
      children: (
        <Row>
          <Col span={22}>
            Via atual:{" "}
            {Object.keys(data).length > 0
              ? formatWay(
                  data.config[
                    `op${by === "work" ? "s" : ""}-${by}-route-${way}`
                  ]["routeTo"]
                )
              : null}
          </Col>
          <Col span={2}>
            <Button icon={<SettingOutlined />} />
          </Col>
        </Row>
      ),
      dot: <CaretRightOutlined />,
    },
  ];

  return (
    Object.keys(data).length > 0 && (
      <>
        <Timeline items={items} style={{ textAlign: "left" }} />
        <OPSGraph
          handleCancel={handleCancel}
          handleOk={handleOk}
          isModalOpen={isModalOpen}
          endpoint={endpoint}
        />
      </>
    )
  );
};
