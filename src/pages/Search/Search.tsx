import React, {Component, useState} from "react";
import {MapContainer, ImageOverlay,} from 'react-leaflet';

import 'leaflet/dist/leaflet.css';
import "./Search.module.scss"

import kosenMap from "../../assets/img/kosenMap.png"

function Search() {
    return(
        <div className="is-centered columns">
            <MapContainer
                bounds={[
                    [0,0],
                    [90,240]
                ]}
                zoom={10}
                scrollWheelZoom={false}
                maxBounds={[
                    [0,0],
                    [90,240]
                ]}>

                <ImageOverlay
                    url = {kosenMap}
                    bounds={[[0,0],[90,240]]}
                />

            </MapContainer>
        </div>

    )
}

export default Search;