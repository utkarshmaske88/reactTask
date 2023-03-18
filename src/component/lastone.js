import { Button, Card } from "antd";
import img1 from "./homeSource/User.png";
import img2 from "./homeSource/User (2).png";
import img3 from "./homeSource/Icon Block.png";
export default function Lastone() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <Card
        style={{
          width: 300,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <img style={{ width: "100px" }} src={img1} />
          <div>ISS Facility Services</div>
          <div>4 Clients</div>
          <Button style={{ background: "#F8F9FD", width: "100%" }}>
            ADD FCM
          </Button>
          <Button style={{ background: "#F8F9FD", width: "100%" }}>
            View All
          </Button>
        </div>
      </Card>
      <Card
        style={{
          width: 300,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <img style={{ width: "100px" }} src={img2} />
          <div>ISS Facility Services</div>
          <div>4 Clients</div>
          <Button style={{ background: "#F8F9FD", width: "100%" }}>
            ADD FCM
          </Button>
          <Button style={{ background: "#F8F9FD", width: "100%" }}>
            View All
          </Button>
        </div>
      </Card>
      <Card
        style={{
          width: 300,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <img style={{ width: "100px" }} src={img3} />
          <div>ISS Facility Services</div>
          <div>4 Clients</div>
          <Button style={{ background: "#F8F9FD", width: "100%" }}>
            ADD FCM
          </Button>
          <Button block style={{ background: "#F8F9FD", width: "100%" }}>
            View All
          </Button>
        </div>
      </Card>
    </div>
  );
}
