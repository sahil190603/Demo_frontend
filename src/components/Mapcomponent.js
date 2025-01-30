import React from "react";
import MediaQueryHandler from "./Hooks/MediaQueryhandler";
import { Divider } from "antd";

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
    overflow: "hidden",
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
        <p>123 Street Name</p>
        <p>City, Country</p>
        <p>Email: contact@example.com</p>
        <p>Phone: +123 456 7890</p>
      </div>

      {!isMobile && <Divider type="vertical" style={{ height: "300px" }} />}

      <div style={{ justifyContent: "flex-end", flex: 1 }}>
        <div style={mapContainerStyle}>
          <div style={mapOuterStyle}>
            <div style={gmapCanvasStyle}>
              {selectedTab === "1" && (
                <iframe
                  style={gmapIframeStyle}
                  src="https://maps.google.com/maps?width=600&height=400&hl=en&q=University%20of%20Oxford&t=&z=14&ie=UTF8&iwloc=B&output=embed"
                  title="Google Map of University of Oxford"
                ></iframe>
              )}
              {selectedTab === "2" && (
                <iframe
                  style={gmapIframeStyle}
                  src="https://maps.google.com/maps?width=600&height=400&hl=en&q=IIM&t=&z=14&ie=UTF8&iwloc=B&output=embed"
                  title="Google Map of IIM"
                ></iframe>
              )}
              {selectedTab === "3" && (
                <iframe
                  style={gmapIframeStyle}
                  src="https://maps.google.com/maps?width=600&height=400&hl=en&q=IIT%20mu&t=&z=14&ie=UTF8&iwloc=B&output=embed"
                  title="Google Map of IIT mu"
                ></iframe>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MapComponent;
