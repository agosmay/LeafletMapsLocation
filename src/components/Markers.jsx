import { Marker, Popup } from "react-leaflet";
import data from "../api/data.json";

const Markers = () => {
  return (
    <>
      {data.map((location, i) => (
        <Marker key={i} position={location.coordinates}>
          <Popup>{location.name}</Popup>
        </Marker>
      ))}
    </>
  );
};

export default Markers;
