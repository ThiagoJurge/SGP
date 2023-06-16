import { Card, Collapse, Divider } from "antd";
import React, { useEffect, useState } from "react";
import { apiPadtec } from "../../../api/api";
import OPSTabs from "./OPSTabs";
import Paragraph from "antd/es/typography/Paragraph";

const OPSInfo = ({ deviceKey }) => {
  const [data, setData] = useState([]);

  async function fetchData() {
    try {
      const response = await apiPadtec.get(`/card/card/${deviceKey}`);
      setData(response.data);
    } catch (error) {}
  }

  useEffect(() => {
    fetchData(deviceKey);
  }, [deviceKey]);

  const items = [
    {
      key: "1",
      label: "Informações Gerais",
      showArrow: false,
      children: <p>Bom dia</p>,
    },
    {
      key: "2",
      label: "Informações da OPS",
      showArrow: false,
      children: (
        <Card>
          <OPSTabs data={data} />
        </Card>
      ),
    },
  ];

  return (
    <>
    <Card title='Descrição'>
    <Paragraph code>
      {Object.keys(data).length > 0 ? data.state.desc : null}
      </Paragraph>
      </Card>
      <Divider type="horizontal"/>
      <Collapse items={items} accordion defaultActiveKey={["2"]} />
    </>
  );
};

export default OPSInfo;
