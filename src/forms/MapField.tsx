import React from 'react'
import Map from '../utils/Map'
import { coordinatesCreationDTO } from '../utils/coordinates.model'
import { useFormikContext } from 'formik'

const MapField = (props: mapFieldProps) => {

  const {values} = useFormikContext<any>();
  function handleMapClick(coordinates: coordinatesCreationDTO){
    values[props.latField] = coordinates.lat;
    values[props.lngField] = coordinates.lng;
  }
  return (
   <Map
   coordinates={props.coordinates}
   handleMapClick = {handleMapClick}
   />
  )
}

interface mapFieldProps{
    coordinates?: coordinatesCreationDTO[]|undefined;
    latField: string;
    lngField: string;
}

export default MapField
