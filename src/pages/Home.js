import React from "react";
import { Card } from "antd";

function Home() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "calc(100vh - 85px)",
      }}
    >
      <Card
      className="transition-card"
        style={{
          textAlign: "center",
          borderRadius: "2px",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h2 className="text">Your Content</h2>
      </Card>
    </div>
  );
}

export default Home;

