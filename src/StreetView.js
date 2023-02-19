import React from "react";
import { GoogleMap, StreetViewPanorama } from "@react-google-maps/api";

function StreetView({lat, lng}) {
  const containerStyle = {
    height: "400px",
    width: "800px"
  };
  const center = {
    lat: lat,
    lng: lng
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