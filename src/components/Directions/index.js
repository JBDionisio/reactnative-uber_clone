import React from 'react';
import MapViewDirections from 'react-native-maps-directions';

import { MAPS_API_KEY } from 'react-native-dotenv';

const Directions = ({ destination, origin, onReady }) => (
    <MapViewDirections
        destination={destination}
        origin={origin}
        onReady={onReady}
        apikey={MAPS_API_KEY}
        strokeWidth={3}
        strokeColor="#222"
    />
);

export default Directions;
