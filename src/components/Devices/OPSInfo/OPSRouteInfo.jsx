import { Timeline } from "antd";

export const RouteInfo = ({ way, by, data }) => {
  function formatWay(way) {
    if (way == "protectionRoute") {
      return "Rota de Trabalho";
    } else {
      return "Rota de Proteção";
    }
  }
  const items = [
    {
      children: `Limiar Superior de comutação: ${
        Object.keys(data).length > 0
          ? data.config[`op${by === "work" ? "s" : ""}-${by}-route-${way}`][
              "highPinSwitchingThreshold"
            ]
          : 0
      } `,
    },
    {
      children: `Limiar Inferior de comutação: ${
        Object.keys(data).length > 0
          ? data.config[`op${by === "work" ? "s" : ""}-${by}-route-${way}`][
              "lowPinSwitchingThreshold"
            ]
          : null
      }`,
    },
    {
      children: `Potência de Entrada: ${
        Object.keys(data).length > 0
          ? data.config[`op${by === "work" ? "s" : ""}-${by}-route-${way}`][
              "pin"
            ].toFixed(2)
          : null
      }`,
    },
    {
      children: `Via atual: ${
        Object.keys(data).length > 0
          ? formatWay(
              data.config[`op${by === "work" ? "s" : ""}-${by}-route-${way}`][
                "routeTo"
              ]
            )
          : null
      }`,
    },
  ];

  return <Timeline items={items} style={{ textAlign: "left" }} />;
};
