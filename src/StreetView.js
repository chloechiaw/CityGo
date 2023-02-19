import React from "react";
import { GoogleMap, StreetViewPanorama } from "@react-google-maps/api";

function StreetView({latitude, longitude}) {
  const containerStyle = {
    height: "400px",
    width: "800px"
  };
  const center = {
    lat: latitude,
    lng: longitude
  };
  return (
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
      <StreetViewPanorama
        id="street-view"
        mapContainerStyle={containerStyle}
        position={center}
        visible={true}
      />
    </GoogleMap>
  );
}

export default StreetView;