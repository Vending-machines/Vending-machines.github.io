import React, {FC, useState} from "react";
import {MapContainer, ImageOverlay,} from 'react-leaflet';

import 'leaflet/dist/leaflet.css';
import "./Search.module.scss"

import MachineMarkers from "../../components/atom/MachineMarkers/MachineMarkers";
import PopupImage from "../../components/atom/PopupImage/PopupImage";

import kosenMap from "../../assets/img/kosenMap.png"

const Search:FC = () => {

    const [Modal, setModal] = useState(false)

    function switchModal(value:boolean) {
        setModal(value);
    }

    return(
        <div className="is-centered columns">

            <div className={`${Modal ? "modalsEffect" : ""}`}>
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
                    ]}


                >

                    <ImageOverlay
                        url = {kosenMap}
                        bounds={[[0,0],[90,240]]}
                        zIndex = {-100}
                    />

                    <MachineMarkers toggleModal={switchModal} />

                </MapContainer>
            </div>



            <PopupImage toggleModal={switchModal} active={Modal} />

        </div>

    )
}

export default Search;