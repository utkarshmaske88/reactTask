import { Button, Popover, List, Dropdown, Space, Tooltip } from "antd";
import { message } from "antd";
import React from "react";
import { useState } from "react";
import {
  SearchOutlined,
  DownloadOutlined,
  DownOutlined,
  UserOutlined,
  MoreOutlined,
  ArrowLeftOutlined,
  LeftOutlined,
  RightOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";

const handleMenuClick = (e) => {
  message.info("Click on menu item.");
  console.log("click", e);
};
const content = (
  <div>
    <p>View Details</p>
    <p>Block Acess</p>
    <p>Delete</p>
    <p>Edit</p>
  </div>
);
const items = [
  {
    label: "1st menu item",
    email: "managment@infosys.com",
    phone: "1234567890",
    contact: "satish roy",
    fascilator: "--",
    Sites: "12",
    Tenants: "--",
    Tenantgroups: "--",
    icon: <MoreOutlined />,
  },
  {
    label: "2nd menu item",
    key: "2",
    icon: <UserOutlined />,
  },
  {
    label: "3rd menu item",
    key: "3",
    icon: <UserOutlined />,
    danger: true,
  },
  {
    label: "4rd menu item",
    key: "4",
    icon: <UserOutlined />,
    danger: true,
    disabled: true,
  },
];
const menuProps = {
  items,
  onClick: handleMenuClick,
};

const data = [
  {
    label: "infosys",
    email: "managment@infosys.com",
    phone: "1234567890",
    contact: "satish roy",
    fascilator: "--",
    Sites: "12",
    Tenants: "--",
    Tenantgroups: "--",
    icon: (
      <Popover content={content}>
        <MoreOutlined />
      </Popover>
    ),
  },
  {
    label: "infosys",
    email: "managment@infosys.com",
    phone: "1234567890",
    contact: "satish roy",
    fascilator: "--",
    Sites: "12",
    Tenants: "--",
    Tenantgroups: "--",
    icon: (
      <Popover content={content}>
        <MoreOutlined />
      </Popover>
    ),
  },
  {
    label: "infosys",
    email: "managment@infosys.com",
    phone: "1234567890",
    contact: "satish roy",
    fascilator: "--",
    Sites: "12",
    Tenants: "--",
    Tenantgroups: "--",
    icon: (
      <Popover content={content}>
        <MoreOutlined />
      </Popover>
    ),
  },
  {
    label: "infosys",
    email: "managment@infosys.com",
    phone: "1234567890",
    contact: "satish roy",
    fascilator: "--",
    Sites: "12",
    Tenants: "--",
    Tenantgroups: "--",
    icon: (
      <Popover content={content}>
        <MoreOutlined />
      </Popover>
    ),
  },
  {
    label: "infosys",
    email: "managment@infosys.com",
    phone: "1234567890",
    contact: "satish roy",
    fascilator: "--",
    Sites: "12",
    Tenants: "--",
    Tenantgroups: "--",
    icon: (
      <Popover content={content}>
        <MoreOutlined />
      </Popover>
    ),
  },
  {
    label: "infosys",
    email: "managment@infosys.com",
    phone: "1234567890",
    contact: "satish roy",
    fascilator: "--",
    Sites: "12",
    Tenants: "--",
    Tenantgroups: "--",
    icon: (
      <Popover content={content}>
        <MoreOutlined />
      </Popover>
    ),
  },
  {
    label: "infosys",
    email: "managment@infosys.com",
    phone: "1234567890",
    contact: "satish roy",
    fascilator: "--",
    Sites: "12",
    Tenants: "--",
    Tenantgroups: "--",
    icon: (
      <Popover content={content}>
        <MoreOutlined />
      </Popover>
    ),
  },
  {
    label: "infosys",
    email: "managment@infosys.com",
    phone: "1234567890",
    contact: "satish roy",
    fascilator: "--",
    Sites: "12",
    Tenants: "--",
    Tenantgroups: "--",
    icon: (
      <Popover content={content}>
        <MoreOutlined />
      </Popover>
    ),
  },
  {
    label: "infosys",
    email: "managment@infosys.com",
    phone: "1234567890",
    contact: "satish roy",
    fascilator: "--",
    Sites: "12",
    Tenants: "--",
    Tenantgroups: "--",
    icon: (
      <Popover content={content}>
        <MoreOutlined />
      </Popover>
    ),
  },
  {
    label: "infosys",
    email: "managment@infosys.com",
    phone: "1234567890",
    contact: "satish roy",
    fascilator: "--",
    Sites: "12",
    Tenants: "--",
    Tenantgroups: "--",
    icon: (
      <Popover content={content}>
        <MoreOutlined />
      </Popover>
    ),
  },
  {
    label: "infosys",
    email: "managment@infosys.com",
    phone: "1234567890",
    contact: "satish roy",
    fascilator: "--",
    Sites: "12",
    Tenants: "--",
    Tenantgroups: "--",
    icon: (
      <Popover content={content}>
        <MoreOutlined />
      </Popover>
    ),
  },
];

function Viewclient() {
  return (
    <>
      <List
        size="default"
        header={
          <div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "1%",
              }}
            >
              <div>
                <Button
                  style={{
                    borderRadius: "20px",
                    padding: " 0 20px 0 20%",
                  }}
                  icon={<SearchOutlined />}
                >
                  Search
                </Button>
              </div>
              <div>
                <Space wrap>
                  <Dropdown menu={menuProps}>
                    <Button>
                      <Space>
                        Button
                        <DownOutlined />
                      </Space>
                    </Button>
                  </Dropdown>
                </Space>{" "}
                <Button icon={<DownloadOutlined />}>Export</Button>
              </div>
            </div>
            <div
              className="navbar"
              style={{
                display: "flex",
                backgroundColor: "#F8F0FE",
                justifyContent: "space-between ",
                // width: "100%",
                marginTop: "5px",
                padding: "10px 25px 10px 10px ",
                marginLeft: "-22px",
              }}
            >
              <div>Company Name</div>
              <div style={{ width: "10%" }}>Email Adress</div>
              <div style={{ width: "6%" }}>Phone no</div>
              <div style={{ width: "9%" }}>Contact person</div>
              <div style={{ width: "5%" }}>Fascilator</div>
              <div style={{ width: "5%" }}>Sites</div>
              <div style={{ width: "5%" }}>Tenants</div>
              <div style={{ width: "10%" }}>Tenant Groups</div>
              <div style={{ width: "5%" }}>Actions</div>
            </div>
          </div>
        }
        pagination={{
          position: "bottom",
          align: "center",
          pageSizeOptions: ["10", "20", "30", "40"],
          itemRender: (page, type) => {
            if (type === "prev") {
              return (
                <Button className="pagination-button">
                  <LeftOutlined /> Previous
                </Button>
              );
            }
            if (type === "next") {
              return (
                <Button className="pagination-button">
                  Next <RightOutlined />
                </Button>
              );
            }
            return (
              <Button
                style={{ paddingBottom: "2px" }}
                className="pagination-button"
              >
                {page}
              </Button>
            );
          },
        }}
        bordered
        dataSource={data}
        renderItem={(item) => (
          <>
            <List.Item
              style={{
                display: "flex",
                justifyContent: "space-between ",
              }}
            >
              <div>{item.label}</div>
              <div style={{ width: "12%" }}>{item.email}</div>
              <div style={{ width: "5%" }}>{item.phone}</div>
              <div style={{ width: "9%" }}>{item.contact}</div>
              <div style={{ width: "5%" }}>{item.fascilator}</div>
              <div style={{ width: "5%" }}>{item.Sites}</div>
              <div style={{ width: "5%" }}>{item.Tenants}</div>
              <div style={{ width: "5%" }}>{item.Tenantgroups}</div>
              <div style={{ width: "5%" }}>{item.icon}</div>
            </List.Item>
          </>
        )}
      />
    </>
  );
}
export default Viewclient;
