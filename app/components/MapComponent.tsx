// components/mapbox.tsx
import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

// Set the access token globally or use the environment variable directly
mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN || "";

const MapComponent = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-74.006); // Default longitude (New York City)
  const [lat, setLat] = useState(40.7128); // Default latitude (New York City)
  const [zoom, setZoom] = useState(9); // Default zoom level

  useEffect(() => {
    if (map.current) return; // Initialize map only once

    map.current = new mapboxgl.Map({
      container: mapContainer.current!,
      style: "mapbox://styles/mapbox/streets-v11", // Map style
      center: [lng, lat],
      zoom: zoom,
    });
  }, []);

  return (
    <div>
      <div
        className="map-container"
        ref={mapContainer}
        style={{ width: "100%", height: "500px" }}
      />
    </div>
  );
};
