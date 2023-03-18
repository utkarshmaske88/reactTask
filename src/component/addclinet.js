import { Tabs, Button, Select, Row, Col } from "antd";
import Payment from "./addclient/paymentsetup";
import ThemeSetup from "./addclient/themesetup";
import Create from "./addclient/create";
import "../App.css";
import Modules from "./addclient/modulessetup";
const { TabPane } = Tabs;

export default function Addclient() {
  return (
    <Tabs >
      <TabPane tab="CREATE PROFILE" key="1">
        <Create />
      </TabPane>
      <TabPane tab="PAYMENT SETUP" key="2">
        <Payment />
      </TabPane>
      <TabPane tab="THEME SETUP" key="3">
        <ThemeSetup />
      </TabPane>
      <TabPane tab="MODULES SETUP" key="4">
        <Modules />
      </TabPane>
    </Tabs>
  );
}
