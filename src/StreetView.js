import React from "react";
import { GoogleMap, StreetViewPanorama } from "@react-google-maps/api";

function StreetView({ latitude, longitude }) {
  const streetViewContainerStyle = {
    height: "400px",
    width: "700px",
  };
  const center = {
    lat: latitude,
    lng: longitude,
  };
  return (
    <GoogleMap
      mapContainerStyle={streetViewContainerStyle}
      center={center}
      zoom={10}
    >
      <StreetViewPanorama
        id="street-view"
        mapContainerStyle={streetViewContainerStyle}
        position={center}
        visible={true}
      />
    </GoogleMap>
  );
}

export default StreetView;
