import { Card, Col, List, Row, Tabs, Timeline } from "antd";
import React from "react";
import { RouteInfo } from "./OPSRouteInfo";
import { OPSInfos } from "./OPSInfos";

const OPSTabs = ({ data }) => {
  
  const items = [
    {
      key: "1",
      label: `OPS A`,
      children: <OPSInfos way="A" data={data} />,
    }, data.state.model == "OPS-HB" ? 
    {
      key: "2",
      label: `OPS B`,
      children: <OPSInfos way="B" data={data} />,
    } : null
  ];

  return <Tabs items={items} tabPosition="left" type="card" />;
};

export default OPSTabs;
