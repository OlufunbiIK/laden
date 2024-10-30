import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function Map() {
	return (
		<div
			data-aos="zoom-in"
			data-aos-duration="1000"
			className="w-full h-80"
		>
			<MapContainer
				center={[9.1526, 7.3433]} // Coordinates for Tipper Garage, Dutse, Abuja
				zoom={13}
				className="w-full h-full"
			>
				<TileLayer
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
					attribution="&copy; OpenStreetMap contributors"
				/>
				<Marker position={[9.1526, 7.3433]}>
					<Popup>Tipper Garage, Dutse, Abuja</Popup>
				</Marker>
			</MapContainer>
		</div>
	);
}
