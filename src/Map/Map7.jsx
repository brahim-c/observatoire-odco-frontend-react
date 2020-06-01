import React from "react";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";
import * as coopData from "../data/coop-data.json";
import Nav_bar from "../Component/Nav_bar.js";

export default function Map7() {
  const [activePark, setActivePark] = React.useState(null);
  return (
    <div className="mapElement">
      <Nav_bar/>
      <Map center={[31.52283, -7.998047]} zoom={9}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />

        {coopData.features.map((cooperative) => (
          <Marker
            key={cooperative.properties.PARK_ID}
            position={[
              cooperative.geometry.coordinates[0],
              cooperative.geometry.coordinates[1],
            ]}
            onClick={() => {
              setActivePark(cooperative);
            }}
          />
        ))}

        {activePark && (
          <Popup
            position={[
              activePark.geometry.coordinates[0],
              activePark.geometry.coordinates[1],
            ]}
            onClose={() => {
              setActivePark(null);
            }}
          >
            <div>
              <h2>{activePark.properties.name}</h2>
              <p>{activePark.properties.description}</p>
            </div>
          </Popup>
        )}
      </Map>
    </div>
  );
}
