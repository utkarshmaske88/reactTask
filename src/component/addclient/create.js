import { Tabs, Button, Input, Select, Row, Col } from "antd";
import { RightOutlined, PlusOutlined, ReloadOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const { TabPane } = Tabs;
const { Option } = Select;

export default function Create() {
  return (
    <>
      <div
        style={{
          fontFamily: `Inter`,
          fontWeight: 700,
          marginLeft: "4.2%",
          fontSize: "20px",
          lineHeight: "120%",
          letterSpacing: "0.0025em",

          color: "#030037",
        }}
      >
        01 Create Client Profile
      </div>
      <div
        style={{
          fontFamily: `Inter`,
          fontWeight: 400,
          marginLeft: "4.2%",
          color: "#030037",
          marginBottom: "1%",
        }}
      >
        Add some basic information realted to the client
      </div>
      <div
        style={{
          fontFamily: `Inter`,
          marginLeft: "4%",
          display: "flex",
          flexDirection: " row",
          gap: "1%",
          alignItems: "center",
          marginBottom: "2%",
        }}
      >
        <PlusOutlined
          style={{
            display: "flex",
            flexDirection: " row",
            justifyContent: "center",
            alignItems: "center",
            border: "0.5px solid #E6E6E6",
            width: "120px",
            height: "120px",
            borderRadius: "150px",
          }}
        />
        Comapny Logo
      </div>

      <Row
        style={{
          display: "flex",
          justifyContent: "space-around",
        }}
        gutter={[16, 16]}
      >
        <Col
          style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          span={10}
        >
          <Input required={true} placeholder="Comapny Name" />
          <Select placeholder="Select Buisness Catagory">
            <Option value="option1">Option 1</Option>
            <Option value="option2">Option 2</Option>
            <Option value="option3">Option 3</Option>
          </Select>
          <Input placeholder="Comapny Email Address" />
          <Select placeholder="Select State">
            <Option value="option1">Option 1</Option>
            <Option value="option2">Option 2</Option>
            <Option value="option3">Option 3</Option>
          </Select>
          <Input placeholder="GST Number" />
        </Col>
        <Col span={10}>
          <Row gutter={[16, 16]}>
            <Input placeholder="WebSite" />
            <Select placeholder="Select Facility ">
              <Option value="option1">Option 1</Option>
              <Option value="option2">Option 2</Option>
              <Option value="option3">Option 3</Option>
            </Select>
            <Input placeholder="Mobile Number" />
            <div style={{ display: "flex" }}>
              <Select placeholder="City" style={{ flex: 1 }}>
                <Option value="option1">Option 1</Option>
                <Option value="option2">Option 2</Option>
                <Option value="option3">Option 3</Option>
              </Select>
              <Input placeholder="Pincode" style={{ flex: 1 }} />
            </div>
            <Input placeholder="Fax Number" />
          </Row>
        </Col>
      </Row>
      <div
        style={{
          marginLeft: "4%",
          marginBottom: "2%",
          gap: "1%",
          display: "flex",
          marginTop: "2%",
        }}
      >
        <Button
          style={{
            display: "flex",
            flexDirection: "row-reverse",
            alignItems: "center",
          }}
          icon={<RightOutlined />}
          type="primary"
        >
         
          <Link
            style={{
              textAlign: "left",
              fontFamily: "Inter",
              fontWeight: 400,
              textDecoration: "none",
              color: "white",
            }}
          >
            Save & Continue
          </Link>
        </Button>
        <Button
          style={{
            display: "flex",
            flexDirection: "row-reverse",
            alignItems: "center",
          }}
          icon={<ReloadOutlined />}
        >
          <text
            style={{
              fontFamily: "Inter",
              fontWeight: 400,
            }}
          >
            Reset
          </text>
        </Button>
      </div>
    </>
  );
}
