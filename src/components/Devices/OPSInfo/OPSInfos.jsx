import { Card, Col, Row } from "antd";
import { GeneralInfo } from "./OPSGeneralInfo";
import { RouteInfo } from "./OPSRouteInfo";

export const OPSInfos = ({ way, data }) => (
    <Row gutter={10}>
      <Col span={24}>
        <Card title="Geral" size="small" hoverable>
          <GeneralInfo data={data} way={way}/>
        </Card>
        <Row gutter={10}>
          <Col span={12}>
            <Card title="Rota de Trabalho" size="small" hoverable>
              <RouteInfo by={"work"} way={way} data={data}/>
            </Card>
          </Col>
          <Col span={12}>
            <Card title="Rota de Proteção" size="small" hoverable>
              <RouteInfo by={"protection"} way={way} data={data}/>
            </Card>
          </Col>
        </Row>
      </Col>
    </Row>
  );