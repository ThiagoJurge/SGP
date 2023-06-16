import { Button, Card, Collapse, Modal, Tabs } from "antd";
import { useEffect, useState } from "react";
import { apiPadtec } from "../../api/api";
import Paragraph from "antd/es/typography/Paragraph";

const DeviceInfo = ({ family, keys }) => {
  function familyModel() {
    this.ops = async function (endpoint) {
      try {
        const response = await apiPadtec.get(`/card/card/${endpoint}`);
        setData(response.data);
      } catch (error) {
        return error;
      }
    };
  }

  const model = new familyModel();
  const [data, setData] = useState([]);
  useEffect(() => {
    model.ops(keys);
  }, [keys]);

  const itemsOPS = [
    {
      key: "1",
      label: `OPS A`,
      children: `Content of Tab Pane 1`,
    },
    {
      key: "2",
      label: `OPS B`,
      children: `Content of Tab Pane 2`,
    },
  ];

  const items = [
    {
      key: "1",
      label: "Informações Gerais",
      children: <Card></Card>,
    },
    {
      key: "2",
      label: "Informações da OPS",
      children: (
        <Card>
          <Paragraph code>
            {Object.keys(data).length > 0 && data.state.desc}
          </Paragraph>
          <Tabs defaultActiveKey="1" items={itemsOPS} />
        </Card>
      ),
    },
  ];
  return (
    <>
      {Object.keys(data).length > 0 ? (
        <Collapse
          style={{ width: "70%" }}
          items={items}
          defaultActiveKey={["2"]}
        />
      ) : null}
    </>
  );
};
export default DeviceInfo;
