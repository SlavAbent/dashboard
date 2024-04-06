import React from "react";
import { MapContainer } from "./styles/Map.styled";
import { MAPBOX_TOKEN } from "./utils/token";
import { mapboxInitialState } from "./utils/mapboxState";

export const Map = () => {
	return (
		<MapContainer
			initialViewState={mapboxInitialState}
			mapStyle="mapbox://styles/mapbox/streets-v9"
			mapboxAccessToken={MAPBOX_TOKEN}
		/>
	);
};
