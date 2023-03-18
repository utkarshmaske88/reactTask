import { Card, Button, Checkbox, Select } from "antd";
import {
  CheckOutlined,
  RightOutlined,
  ReloadOutlined,
} from "@ant-design/icons";
import "../../App.css";
import icon from "./sources/Icon Set.png";
import { Link } from "react-router-dom";
const checkboxOptions = [
  { label: "Home", value: "home" },
  { label: "Helpdesk", value: "helpdesk" },
  { label: "Assets", value: "assets" },
  { label: "Daily Tasks", value: "dailyTasks" },
  { label: "PPM", value: "ppm" },
  { label: "Employee ", value: "employe" },
  { label: "Employee ", value: "employe" },
  { label: "Profile", value: "Profile" },
];
export default function Modules() {
  return (
    <>
      <div
        style={{
          marginLeft: "4%",
          fontFamily: `Inter`,
          fontWeight: 700,
          fontSize: "20px",
          letterSpacing: "0.0025em",
          color: "#030037",
        }}
      >
        04 Modules Setup
      </div>
      <div
        style={{
          marginLeft: "4%",
          fontFamily: "Inter",
          fontWeight: 400,

          marginBottom: "2%",
          color: "#030037",
        }}
      >
        Select modules that client can use
      </div>
      <div
        style={{
          display: "flex",
          marginLeft: "4%",
          justifyContent: "center",
        }}
      >
        <div style={{ width: "60%" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            {checkboxOptions.map(({ label, value }) => (
              <Button
                className="btnwithcheckbox"
                key={value}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "50%",
                  marginBottom: 8,
                  marginRight: 8,
                  fontFamily: `Inter`,
                }}
              >
                <Checkbox></Checkbox>
                {label}
                <RightOutlined />
              </Button>
            ))}
          </div>
        </div>
        <Card
          title={
            <div
              style={{
                height: "50%",
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                fontFamily: `Inter`,
              }}
              className="cardwithbutton"
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  width: "100%",
                  marginBottom: "3%",
                  marginTop: "4%",
                }}
              >
                <img style={{ height: "25%", marginRight: "3%" }} src={icon} />
                <div>
                  <div>Daily Tasks</div>
                  <div
                    className="texted"
                    style={{ fontSize: "14px", fontWeight: 400 }}
                  >
                    Select the sub modules that the client can use
                  </div>
                </div>
              </div>{" "}
              <Button type="primary" icon={<CheckOutlined />}>
                <text
                  style={{
                    fontFamily: `Inter`,
                  }}
                >
                  Visible to client
                </text>
              </Button>
            </div>
          }
          bordered={false}
          style={{
            width: "70%",
            boxShadow: "0px 1px 5px rgba(3, 0, 55, 0.08)",
          }}
        >
          <Checkbox.Group
            className="checkboxgroup"
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Checkbox
              style={{
                fontFamily: `Inter`,
              }}
              value="A"
            >
              Show All Sub modules
            </Checkbox>
            <Checkbox
              style={{
                fontFamily: `Inter`,
              }}
              value="B"
            >
              Summary
            </Checkbox>
            <Checkbox
              style={{
                fontFamily: `Inter`,
              }}
              value="D"
            >
              view tasks
            </Checkbox>
            <Checkbox
              style={{
                fontFamily: `Inter`,
              }}
              value="E"
            >
              create new tasks
            </Checkbox>
            <Checkbox
              style={{
                fontFamily: `Inter`,
              }}
              value="F"
            >
              create new tasks
            </Checkbox>
            <Checkbox
              style={{
                fontFamily: `Inter`,
              }}
              value="G"
            >
              logbook
            </Checkbox>
            <Checkbox
              style={{
                fontFamily: `Inter`,
              }}
              value="H"
            >
              logsheet
            </Checkbox>
          </Checkbox.Group>
        </Card>
      </div>
      <div
        style={{
          marginLeft: "4%",
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
              to="/lastone"
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
