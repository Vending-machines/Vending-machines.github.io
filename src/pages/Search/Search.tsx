import React, {useState} from "react";
import {MapContainer, TileLayer, Marker, Popup, ImageOverlay} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import "./Search.module.scss"

import kosenMap from "../../assets/img/kosenMap.png"
const MapImage = {
    url: kosenMap,
    height: 640,
    width: 960
};

function Search() {
    return(
        <div className="is-centered columns">
            <MapContainer center={[100, 100]} zoom={2} scrollWheelZoom={false}>
                <ImageOverlay
                    url = {MapImage.url}
                    bounds={[
                        [0, 0],
                        [MapImage.height/4, MapImage.width/4],
                    ]}
                />
            </MapContainer>
        </div>

    )
}

export default Search;