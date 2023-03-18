import { Form, Input, Button, Radio } from "antd";

import { RightOutlined, ReloadOutlined } from "@ant-design/icons";

import left from "./sources/Frame 432.png";
import right from "./sources/Frame 433.png";
import center from "./sources/Frame 434.png";
import "../../App.css";
import { Link } from "react-router-dom";
export default function ThemeSetup() {
  return (
    <Form style={{ marginLeft: "4%" }} layout="vertical" autoComplete="off">
      <div
        style={{
          fontFamily: `Inter`,
          fontWeight: 700,
          fontSize: "20px",
          lineHeight: "120%",
          letterSpacing: "0.0025em",
          color: "#030037",
        }}
      >
        03 Theme Setup
      </div>
      <div
        style={{
          color: "#030037",
          fontFamily: `Inter`,
          marginBottom: "2%",
        }}
      >
        Add the information for client to get more personalized setup{" "}
      </div>
      <Form.Item name="name" label="Primary Color">
        <Input />
        <div
          style={{
            fontFamily: `Inter`,
          }}
        >
          Add a hex value
        </div>
      </Form.Item>
      <div
        style={{
          fontFamily: `Inter`,
        }}
      >
        Login Theme
      </div>
      <div
        style={{
          fontFamily: `Inter`,
        }}
      >
        Select the look and feel of the login page
      </div>
      <Radio
        style={{
          fontFamily: `Inter`,
        }}
      >
        Use Color
      </Radio>
      <Form.Item
        style={{
          width: "10%",
        }}
      >
        <Input />
      </Form.Item>
      <div
        style={{
          fontFamily: `Inter`,
        }}
      >
        Where Should be the login modal?
      </div>
      <div style={{ display: "flex", gap: "1%", flexWrap: "wrap" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <img style={{ width: "120px" }} src={left} />
          <Radio>Left</Radio>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <img style={{ width: "120px" }} src={right} />
          <Radio
            style={{
              fontFamily: `Inter`,
            }}
          >
            Right
          </Radio>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <img style={{ width: "130px" }} src={center} />
          <Radio
            style={{
              fontFamily: `Inter`,
            }}
          >
            Center
          </Radio>
        </div>
      </div>
      <div
        style={{
          gap: "1%",
          display: "flex",
          marginTop: "2%",
          marginBottom: "2%",
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
          <text
            style={{
              textAlign: "left",
              fontFamily: "Inter",
              fontWeight: 400,
              color: "white",
            }}
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
          </text>
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
    </Form>
  );
}
