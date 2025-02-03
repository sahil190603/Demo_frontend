import React from "react";
import MediaQueryHandler from "./Hooks/MediaQueryhandler";
import { Divider } from "antd";
import { locations } from "../Constant";

function MapComponent({ selectedTab }) {
  const { isMobile } = MediaQueryHandler();

  const mapContainerStyle = {
    width: "100%",
  };

  const mapOuterStyle = {
    textAlign: "right",
    width: "100%",
    height: isMobile ? "170px" : "300px",
  };

  const gmapCanvasStyle = { 
    background: "none !important",
    width: "100%",
    height: isMobile ? "170px" : "300px",
    borderRadius: "3px",
  };

  const gmapIframeStyle = {
    height: "100%",
    width: "100%",
    border: "0",
  };


  const location = locations[selectedTab] || locations["1"]; 

  return (
    <div
      style={{
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        alignItems: "center",
        gap: isMobile ? "20px" : "5px",
      }}
    >
      <div style={{ flex: 1 }}>
        <h2>Our Location</h2>
        <p>{location.address}</p>
        <p>Email: contact@example.com</p>
        <p>Phone: +123 456 7890</p>
      </div>

      {!isMobile && <Divider type="vertical" style={{ height: "300px" }} />}

      <div style={{ justifyContent: "flex-end", flex: 1 }}>
        <div style={mapContainerStyle}>
          <div style={mapOuterStyle}>
            <div style={gmapCanvasStyle}>
              <iframe
                style={gmapIframeStyle}
                src={location.mapUrl}
                title={`Google Map of ${location.address}`}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MapComponent;
