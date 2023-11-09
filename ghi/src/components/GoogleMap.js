import React from 'react'; // Make sure to import React

import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";

const libraries = ["places"]; // Define the libraries you want to use

export const GoogleAPI = () => {
// Initialize the Google Maps API with your API key
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        libraries,
    });

    if (loadError) {
        return <div>Error loading Google Maps</div>;
    }

    if (!isLoaded) {
        return <div>Loading...</div>;
    }


    return (
        <div>
        {/* Your map component */}
        <GoogleMap
            id="map"
            mapContainerStyle={{ width: "100%", height: "500px" }}
            zoom={8}
            center={{ lat: 42.361145, lng: -71.057083}}
        >
            {/* <Marker
                position={{ lat: 42.361145, lng: -71.057083 }}
            /> */}
        </GoogleMap>
        </div>
    );
};
