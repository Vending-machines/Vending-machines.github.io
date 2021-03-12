import React, {useMemo, FC, useEffect} from "react";
import {Marker, useMap, Tooltip} from "react-leaflet";

import Vendingmachines from "../../../__test__/Sample-Json-master/Vending-machines.json";

import * as bounds from "../../../constants/bounds";

//marker-shadowのimport
import L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconRetina from "leaflet/dist/images/marker-icon-2x.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

let DefaultIcon = L.icon({
    iconUrl: icon,
    iconRetinaUrl: iconRetina,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    tooltipAnchor: [16, -28],
    shadowSize: [41, 41]
});
L.Marker.prototype.options.icon = DefaultIcon;

interface Props{
    toggleModal:Function
    toggleModalContent:Function
    View:number
}

const MachineMarkers:FC<Props> = (Props) => {

    const map = useMap();

    const Handlers1 = useMemo(
        () => ({
            click(){
                Props.toggleModal(true)
                Props.toggleModalContent(3)
            },
        }),
        [map],
    )

    const Handlers2 = useMemo(
        () => ({
            click(){
                Props.toggleModal(true)
                Props.toggleModalContent(4)
            },
        }),
        [map],
    )

    const Handlers3 = useMemo(
        () => ({
            click(){
                Props.toggleModal(true)
                Props.toggleModalContent(5)
            },
        }),
        [map],
    )

    const Handlers4 = useMemo(
        () => ({
            click(){
                Props.toggleModal(true)
                Props.toggleModalContent(6)
            },
        }),
        [map],
    )

    const Handlers5 = useMemo(
        () => ({
            click(){
                Props.toggleModal(true)
                Props.toggleModalContent(7)
            },
        }),
        [map],
    )

    useEffect(
        () => {
            switch (Props.View){
                case 1:
                    map.fitBounds(bounds.Marker1.bound);
                    break;
                case 2:
                    map.fitBounds(bounds.Marker2.bound);
                    break;
                case 3:
                    map.fitBounds(bounds.Marker3.bound);
                    break;
                case 4:
                    map.fitBounds(bounds.Marker4.bound);
                    break;
                case 5:
                    map.fitBounds(bounds.Marker5.bound);
                    break;
                default:
            }
        },
        [Props.View]
    )

    console.log("MachineMarkersをレンダー！");

    return(
        <>
            <Marker
                position = {bounds.Marker1.position}
                eventHandlers = {Handlers1}
            >
                <Tooltip direction="auto">
                    {Vendingmachines["1"]}
                </Tooltip>
            </Marker>

            <Marker
                position={bounds.Marker2.position}
                eventHandlers = {Handlers2}
            >
                <Tooltip direction="auto">
                    {Vendingmachines["2"]}
                </Tooltip>
            </Marker>

            <Marker
                position={bounds.Marker3.position}
                eventHandlers={Handlers3}
            >
                <Tooltip>
                    {Vendingmachines["3"]}
                </Tooltip>
            </Marker>

            <Marker
                position={bounds.Marker4.position}
                eventHandlers={Handlers4}
            >
                <Tooltip>
                    {Vendingmachines["4"]}
                </Tooltip>
            </Marker>

            <Marker
                position={bounds.Marker5.position}
                eventHandlers={Handlers5}
            >
                <Tooltip>
                    {Vendingmachines["5"]}
                </Tooltip>
            </Marker>
        </>
    )
}

export default MachineMarkers;