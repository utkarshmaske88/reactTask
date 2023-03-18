import { Button, Input, Select, Radio, Checkbox, Row, Col } from "antd";
import { RightOutlined, PlusOutlined, ReloadOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const { Option } = Select;

export default function Payment() {
  return (
    <>
      <div
        style={{
          marginLeft: "4.2%",
          fontFamily: `"Inter", sans-serif`,
          fontWeight: 700,
          fontSize: "20px",
          lineHeight: "120%",
          letterSpacing: "0.0025em",
          color: "#030037",
        }}
      >
        02 Payment Setup
      </div>
      <div
        style={{
          marginLeft: "4.2%",
          color: "#030037",
          fontFamily: `Inter`,
          marginBottom: "2%",
        }}
      >
        Set up payments for the client
      </div>
      <Row
        style={{
          //   marginLeft: "4%",
          display: "flex",
          justifyContent: "space-around",
        }}
        gutter={[16, 16]}
      >
        <Input style={{ width: "90%" }} placeholder="Comapny Name" />
        <Col
          style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          span={10}
        >
          <Select placeholder="Select State">
            <Option value="option1">Option 1</Option>
            <Option value="option2">Option 2</Option>
            <Option value="option3">Option 3</Option>
          </Select>
          <Select placeholder="Select No of Site Access">
            <Option value="option1">Option 1</Option>
            <Option value="option2">Option 2</Option>
            <Option value="option3">Option 3</Option>
          </Select>

          <Input placeholder="Discount %" />
          <div>Payment Mode</div>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            <Checkbox
              style={{
                fontFamily: "Inter",
                fontWeight: 400,
              }}
            >
              NetBanking
            </Checkbox>
            <Checkbox
              style={{
                fontFamily: "Inter",
                fontWeight: 400,
              }}
            >
              Cheque
            </Checkbox>
            <Checkbox
              style={{
                fontFamily: "Inter",
                fontWeight: 400,
              }}
            >
              Upi
            </Checkbox>
            <Checkbox
              style={{
                fontFamily: "Inter",
                fontWeight: 400,
              }}
            >
              Cash
            </Checkbox>
            <Checkbox
              style={{
                fontFamily: "Inter",
                fontWeight: 400,
              }}
            >
              Other
            </Checkbox>
          </div>
        </Col>
        <Col span={10}>
          <Row gutter={[16, 16]}>
            <div style={{ display: "flex" }}>
              <Select placeholder="City" style={{ flex: 1 }}>
                <Option value="option1">Option 1</Option>
                <Option value="option2">Option 2</Option>
                <Option value="option3">Option 3</Option>
              </Select>
              <Input placeholder="Pincode" style={{ flex: 1 }} />
            </div>
            <Input
              placeholder="Rs payeble amount persite"
              prefix="Rs"
              suffix="Total Rs."
            />

            <Input placeholder="Reason" />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div
                style={{
                  fontFamily: "Inter",
                  fontWeight: 400,
                }}
              >
                Payment Status
              </div>
              <div
                style={{
                  display: "flex",
                  marginTop: "10%",
                  fontFamily: "Inter",
                  fontWeight: 400,
                }}
              >
                <Radio
                  style={{
                    fontFamily: "Inter",
                    fontWeight: 400,
                  }}
                >
                  Paid
                </Radio>
                <Radio
                  style={{
                    fontFamily: "Inter",
                    fontWeight: 400,
                  }}
                >
                  Pending
                </Radio>
              </div>
            </div>
          </Row>
        </Col>
      </Row>

      <div
        style={{
          gap: "1%",
          marginBottom: "2%",
          marginLeft: "4%",
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
    </>
  );
}
