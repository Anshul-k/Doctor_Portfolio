import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { Marker } from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: '30rem'
};

const center = {
    lat: 28.654782,
    lng: 77.358880
};

const position = {
    lat: 28.654782,
    lng: 77.358880
};

function GoogleMapReact() {
    return (
        <LoadScript
            googleMapsApiKey={process.env.Google_Map_API_KEY}
        >
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={18}
            >
                { /* Child components, such as markers, info windows, etc. */}
                <></>
                <Marker
                    position={position}
                />
            </GoogleMap>
        </LoadScript>
    )
}

export default React.memo(GoogleMapReact)