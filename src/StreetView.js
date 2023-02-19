import React from "react";
import { GoogleMap, StreetViewPanorama } from "@react-google-maps/api";

function StreetView({latitude, longitude}) {
    console.log('latitude, longitude in StreetView')
  console.log(latitude, longitude)
  const containerStyle = {
    height: "400px",
    width: "800px"
  };
  const center = {
    latitude: latitude,
    longitude: latitude,
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