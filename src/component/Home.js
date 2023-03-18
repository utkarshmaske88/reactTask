import { Input, Button } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import axios from "axios";
import img1 from "./homeSource/Group 2.png";
import img2 from "./homeSource/Rectangle 267.png";
import "../App.css";
const Homepage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [data, setdata] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    if (!password) {
      setdata("Password is Required");
    }
    axios
      .post("https://reqres.in/api/login", {
        email: username,
        password: password,
      })
      .then((response) => {
        setdata("Token is :" + response.data.token);
      })
      .catch((error) => {});
  };

  return (
    <div
      className="newhome-container"
      style={{
        display: "flex",
        width: "100%",
        height: "100%",
      }}
    >
      <div
        className="login-container"
        style={{
          width: "40%",
          height: "100vh",
          display: "flex",
          alignContent: "center",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            width: "80%",
            display: "flex",
            alignContent: "center",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <h1>Login</h1>
          <Input
            prefix={<UserOutlined />}
            placeholder="Username"
            value={username}
            onChange={handleUsernameChange}
            style={{ marginBottom: "10px" }}
          />
          <Input.Password
            style={{ marginBottom: "10px" }}
            prefix={<LockOutlined />}
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
          />
          <Button
            style={{
              width: "100%",
              backgroundColor: "#1334B3",
              marginBottom: "10px",
            }}
            type="primary"
            onClick={handleLogin}
          >
            <text style={{ color: "white" }}>Login</text>
          </Button>
          <Button style={{ width: "100%", marginBottom: "10px" }}>
            Forgot Password
          </Button>
          {data}
        </div>
        <div style={{ fontWeight: 400, textAlign: "center" }}>
          <Button shape="round">
            <Link to="/clientmaster">Client Master</Link>
          </Button>
        </div>
      </div>
      <view style={{ width: "60%" }}>
        <div className="imageab" style={{ position: "absolute" }}>
          <img
            style={{ width: "124%", height: "100vh" }}
            src={img2}
            alt="Your image"
          />
        </div>
        <div
          className="imagere"
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            justifyItems: "center",
            position: "relative",
          }}
        >
          <img
            src={img1}
            alt="Your image"
            style={{ marginTop: "5%", width: "60%" }}
          />

          <div
            style={{
              color: "white",
            }}
          >
            <div
              style={{
                color: "white",
                fontFamily: "Inter",
                fontWeight: 700,
                fontSize: "32px",
              }}
            >
              360 Solution For Asset Managment
            </div>
            <div style={{ color: "white", fontFamily: "Inter" }}>
              this is where you will receive best information about your account
            </div>
          </div>
        </div>
      </view>
    </div>
  );
};

export default Homepage;
