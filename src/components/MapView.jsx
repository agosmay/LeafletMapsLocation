
import { MapContainer, TileLayer } from "react-leaflet";
import Markers from "./Markers";
import "leaflet/dist/leaflet.css";

const MapView = () => {
  return (
    <MapContainer center={{ lat: "51.5226996", lng: "-1.2839017" }} zoom={8}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Markers />
    </MapContainer>
  );
};

export default MapView;
