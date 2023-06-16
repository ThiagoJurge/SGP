import { Card, Col, Divider, Row } from "antd";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import TreeView from "../TreeView/TreeView";
import DeviceInfo from "../Devices/DeviceInfo/DeviceInfo";

const DeviceTree = () => {
  const key = useParams().key;
  const [view, setView] = useState(true);

  return (
    <Card>
      <Row gutter={10}>
        <Col
          span={5}
          style={{
            overflow: "auto",
            height: "100vh",
          }}
        >
          <TreeView />
        </Col>
        <Col span={1}>
          <Divider type="vertical" style={{ height: "100%" }} />
        </Col>
        <Col span={18}>
          <DeviceInfo />
        </Col>
      </Row>
    </Card>
  );
};

export default DeviceTree;
