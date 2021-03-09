import React, {FC, useState} from "react";
import {MapContainer, ImageOverlay,} from 'react-leaflet';

import 'leaflet/dist/leaflet.css';
import "./Search.module.scss"

import MachineMarkers from "../../components/module/MachineMarkers/MachineMarkers";
import PopupImage from "../../components/module/PopupImage/PopupImage";

import kosenMap from "../../assets/img/kosenMap.png"

const Search:FC = () => {

    const [Modal, setModal] = useState(true)

    function switchModal(value:boolean) {
        setModal(value);
    }

    const [ModalContent, setModalContent] = useState(0);

    function switchModalContent(value:number){
        setModalContent(value);
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

                    <MachineMarkers
                        toggleModal={switchModal}
                        toggleModalContent={switchModalContent}
                    />

                </MapContainer>
            </div>



            <PopupImage
                active={Modal}
                toggleModal={switchModal}
                content={ModalContent}
                toggleModalContent={switchModalContent}
            />

        </div>

    )
}

export default Search;