// import React from 'react';
// import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

// const libraries = ["places"];

// export const GoogleAPI = ({ lat, lng, zoom, markers }) => {
//     const { isLoaded, loadError } = useLoadScript({
//         googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
//         libraries,
//     });

//     if (loadError) {
//         return <div>Error loading Google Maps</div>;
//     }

//     if (!isLoaded) {
//         return <div>Loading...</div>;
//     }

//     console.log("Markers:", markers);

//     return (
//         <div>
//             <GoogleMap
//                 id="map"
//                 mapContainerStyle={{ width: "100%", height: "600px" }}
//                 zoom={zoom}
//                 center={{ lat, lng }}
//             >
//                 {markers && markers.map((m, i) => <Marker key={`${i}${lat}${lng}`} position={m} />)}
//             </GoogleMap>
//         </div>
//     );
// };