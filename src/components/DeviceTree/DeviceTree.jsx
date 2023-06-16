import {
  Col,
  Divider,
  Row,
} from "antd";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import TreeView from "../TreeView/TreeView";

const DeviceTree = () => {
  const key = useParams().key;
  const [view, setView] = useState(true);

  return (
    <>
      <Row>
        <Col
          style={{
            overflow: "auto",
            height: "300px",
            width: '20%'
          }}
        >
          <TreeView />
        </Col>
        <Col hidden={view} style={{width: '80%'}}>
          <Divider type="vertical" />
          {/* <DeviceInfo family={keys.family} keys={keys.id} /> */}
        </Col>
      </Row>
    </>
  );
};

export default DeviceTree;
