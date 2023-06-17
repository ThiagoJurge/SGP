import React, { useEffect, useState } from "react";
import { Card, Modal } from "antd";
import {
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { apiPadtec } from "../../../api/api";

export const OPSGraph = ({ isModalOpen, handleCancel, handleOk, endpoint }) => {
  const [data, setData] = useState([]);
  function getData(x, y) {
    const options = {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    };
    return {
      Horário: new Intl.DateTimeFormat("en-GB", options).format(new Date(x)),
      Potência: y,
    };
  }
  function CustomTooltip({ payload, label, active }) {
    if (active) {
      return (
        <Card style={{ textAlign: "left" }} size="small">
          <p>Horário: {label}</p>
          <p>Potência: {payload[0].value}</p>
        </Card>
      );
    }

    return null;
  }

  async function fetchData(endpoint) {
    try {
      const response = await apiPadtec.get(endpoint);
      console.log(response.data);
      setData(response.data.map((item) => getData(item.x, item.y)));
      console.log(data);
    } catch (error) {}
  }

  useEffect(() => {
    if (isModalOpen) {
      fetchData(endpoint);
    }
  }, [isModalOpen]);

  return (
    isModalOpen && (
      <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Fechar"
        cancelButtonProps={{ hidden: "true" }}
        style={{ width: '90%', maxWidth: '800px', height: '90%', maxHeight: '600px' }}
      >
          <LineChart
            width={500}
            height={300}
            data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <XAxis dataKey="Horário" />
            <YAxis dataKey="Potência" />
            <Legend />
            <Line dataKey="Potência" scale={"dBm"} type={"monotone"} />
            <Tooltip content={<CustomTooltip />} />
          </LineChart>
      </Modal>
    )
  );
};
