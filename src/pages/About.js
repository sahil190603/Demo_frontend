import { Card } from "antd";
import React from "react";

const About = () => {
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
        style={{
          textAlign: "center",
          borderRadius: "2px",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          overflowY: "auto",
        }}
      >
        About
      </Card>
    </div>
  );
};

export default About;
