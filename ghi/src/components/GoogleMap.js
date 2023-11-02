import React from 'react'; // Make sure to import React

import { GoogleMap, useLoadScript } from "@react-google-maps/api";

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
            mapContainerStyle={{ width: "100%", height: "400px" }}
            zoom={8}
            center={{ lat: -34.397, lng: 150.644 }}
        >
            {/* Your map content, markers, etc. */}
        </GoogleMap>
        </div>
    );
};
