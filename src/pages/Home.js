import React from "react";
import { Card } from "antd";
import { Carousel } from "antd";
import MediaQueryHandler from "../components/Hooks/MediaQueryhandler";

function Home() {
  const { isMobile } = MediaQueryHandler();

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
          alignItems: "center",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Carousel
          autoplay
          autoplaySpeed={3000}
          arrows
          style={{
            maxWidth: isMobile ? "calc(98vw - 40px)" : "calc(-185px + 95vw)",
          }}
        >
          <div>
            <h3 style={carouselItemStyle}>Slide 1</h3>
          </div>
          <div>
            <h3 style={carouselItemStyle}>Slide 2</h3>
          </div>
          <div>
            <h3 style={carouselItemStyle}>Slide 3</h3>
          </div>
          <div>
            <h3 style={carouselItemStyle}>Slide 4</h3>
          </div>
        </Carousel>
      </Card>
    </div>
  );
}

const carouselItemStyle = {
  height:"calc(90vh - 150px)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "24px",
  fontWeight: "bold",
  backgroundColor: "gray",
  borderRadius: "2px",
  margin: "3px",
};

export default Home;
