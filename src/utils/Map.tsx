import React, { useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup, useMapEvent } from 'react-leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import { coordinatesCreationDTO } from './coordinates.model';


const defaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconAnchor: [16, 37], 
});

L.Icon.Default.mergeOptions({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

interface MapProps {
  height?: string;
  coordinates: coordinatesCreationDTO[]|undefined;
handleMapClick(coordinates: coordinatesCreationDTO):void;
}

const Map = (props: MapProps) => {

    const [coordinates, setCoordinates] = useState<coordinatesCreationDTO[]|undefined>(props.coordinates);
  return (
    <MapContainer
      center={[28.69833885834941, 76.93691118342437]}
      zoom={10}
      style={{ height: props.height || '500px' }}
    >
      <TileLayer
        attribution="React Movies"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
     

       <MapClick setCoordinates={coordinates=>{
            setCoordinates([coordinates]);
            props.handleMapClick(coordinates);
       }}/> 
       {coordinates && coordinates.map((coordinate, index)=> (
          <Marker key={index} position={[coordinate.lat, coordinate.lng]} icon={defaultIcon}>
          <Popup>Marker Popup</Popup>
        </Marker>
       ))}
      
    </MapContainer>
  );
};

function MapClick(props: mapClickProps){
    useMapEvent('click', eventsArgs=>{
        props.setCoordinates({lat: eventsArgs.latlng.lat, lng: eventsArgs.latlng.lng});
    })
    return null;
}

interface mapClickProps{
    setCoordinates(coordinates: coordinatesCreationDTO):void;
}

export default Map;
