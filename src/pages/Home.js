import React, { useState } from "react";
import { Card, Tabs, Carousel, Tooltip } from "antd";
import MediaQueryHandler from "../components/Hooks/MediaQueryhandler";
import MapComponent from "../components/Mapcomponent";

function Home() {
  const { isMobile } = MediaQueryHandler();
  const [selectedTab, setSelectedTab] = useState("1");

  const carouselItemStyle = {
    height: isMobile ? "calc(90vh - 400px)" : "calc(90vh - 300px)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "24px",
    fontWeight: "bold",
    backgroundColor: "gray",
    borderRadius: "2px",
    margin: "3px",
  };

  const onChange = (key) => {
    setSelectedTab(key);
  };

  
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
        <Tabs
          onChange={onChange}
          tabBarGutter={10}
          type="card"
          size={isMobile ? "small": "large"}
          centered={true} 
          items={new Array(3).fill(null).map((_, i) => {
            const id = String(i + 1);
            return {
              label: (
                <div
                  style={{
                    width: isMobile
                      ? "calc(33vw - 73px)"
                      : "calc(-190px + 30vw)",
                    textOverflow: 'ellipsis',
                    overflow: 'hidden'
                  }}
                >
                 <Tooltip placement="top" title={`Bhuyangdev ${id}`} >
                  Bhuyangdev {id}
                  </Tooltip>
                </div>
              ),
              key: id,
            };
          })}
        />
        <Carousel
          autoplay
          autoplaySpeed={3000}
          arrows
          style={{
            maxWidth: isMobile ? "calc(98vw - 77px)" : "calc(-190px + 91vw)",
          }}
          //   73 , 180 , + 95vw
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
        <Card style={{ marginTop: "20px", borderRadius: "2px" }}>
          <MapComponent selectedTab={selectedTab} />
        </Card>
      </Card>
    </div>
  );
}

export default Home;
