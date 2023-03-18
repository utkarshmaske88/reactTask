import {
  SearchOutlined,
  VideoCameraOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Button, Layout, Menu, theme } from "antd";
import React, { useState } from "react";
import "../App.css";
import Viewclient from "./viewclient";
import Addclient from "./addclinet";
const { Content, Sider } = Layout;
const Main = () => {
  const [data, setdata] = useState(true);

  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout>
      <Layout>
        <Sider
          width={336}
          style={{
            background: colorBgContainer,
          }}
        >
          <div
            style={{
              width: "100%",
              height: "24px",
              fontFamily: "Nunito Sans",
              fontStyle: "normal",
              fontWeight: 700,
              fontSize: "20px",
              lineHeight: "120%",
              margin: "15px 0px 15px 25px ",
              color: "#233244",
              fontFamily: `Inter`,
            }}
          >
            Company Name
          </div>
          <Button
            style={{
              borderRadius: "20px",
              padding: " 0 50% 0 10%",
            }}
            icon={<SearchOutlined />}
          >
            Search
          </Button>
          <div
            style={{
              color: "#B8BABC",
              fontFamily: `Inter`,
              fontWeight: 700,
              fontSize: "16px",
              padding: "15px",
              marginLeft: "10px",
            }}
          >
            CLIENT MASTER
          </div>

          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            items={[
              {
                key: "1",
                icon: <UserOutlined onClick={() => setdata(true)} />,
                label: (
                  <>
                    <text
                      style={{
                        padding: " 10px 190px 10px 0px",
                      }}
                      onClick={() => setdata(true)}
                    >
                      View Clinet
                    </text>
                  </>
                ),
              },
              {
                key: "2",
                icon: <VideoCameraOutlined onClick={() => setdata(false)} />,
                label: (
                  <text
                    style={{
                      padding: " 10px 190px 10px 0px",
                    }}
                    onClick={() => setdata(false)}
                  >
                    Add Clinet
                  </text>
                ),
              },
            ]}
          />
        </Sider>
        <Layout
          style={{
            padding: "0 24px 24px",
          }}
        >
          <div
            style={{
              fontSize: 20,
              fontWeight: 700,
              fontFamily: `Inter`,
              marginTop: "15px",
              display: "flex",
            }}
          >
            {data ? "View Client" : "Add Client"}
            <Button
              className="buttonforhide"
              style={{ display: "none", marginLeft: "2%" }}
            >
              {data ? (
                <text onClick={() => setdata(false)}>Add Client</text>
              ) : (
                <text onClick={() => setdata(true)}>View Client</text>
              )}
            </Button>
          </div>
          <Breadcrumb
            style={{
              margin: "16px 0",
            }}
          >
            <Breadcrumb.Item>Client Master</Breadcrumb.Item>
            <Breadcrumb.Item>
              {data ? "View Client" : "Add Client"}
            </Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Content>
            {data ? <Viewclient /> : <Addclient />}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};
export default Main;
