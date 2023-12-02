import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

function App() {
        const ubcExchangeCoordinates = [49.268688, -123.248894];

        return(
          <MapContainer center={ubcExchangeCoordinates} zoom={15} style={{ height: '100vh', width: '100%' }}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={ubcExchangeCoordinates}>
              <Popup>
                UBC Vancouver, BC, Canada
              </Popup>
            </Marker>
          </MapContainer>
      );
}export default App;
