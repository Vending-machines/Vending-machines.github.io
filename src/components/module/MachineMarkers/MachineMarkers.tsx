import React, {useMemo, FC} from "react";
import {Marker, useMap, Tooltip} from "react-leaflet";
import {LatLngBoundsExpression, LatLngExpression} from "leaflet";

import Vendingmachines from "../../../__test__/Sample-Json-master/Vending-machines.json";


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



interface LatLngAndBound{
    position: LatLngExpression;
    bound: LatLngBoundsExpression;
}

const Marker1:LatLngAndBound = {
    position:[49, 58],
    bound: [[0, 0],[30, 60]]
}
const Marker2:LatLngAndBound = {
    position:[40, 178],
    bound:[[90, 240],[90, 240]]
}

const Marker3: LatLngAndBound = {
    position: [38, 190],
    bound: [[0, 0], [0, 0]]
}

const Marker4: LatLngAndBound = {
    position: [38, 198],
    bound: [[0, 0], [0, 0]]
}

const Marker5: LatLngAndBound = {
    position: [38, 206],
    bound: [[0, 0], [0, 0]]
}

interface Props{
    toggleModal:Function,
    toggleModalContent:Function
}

const MachineMarkers:FC<Props> = ({toggleModal, toggleModalContent}) => {


    const map = useMap();

    const Handlers1 = useMemo(
        () => ({
            click(){
                toggleModal(true)
                toggleModalContent(3)
            },
        }),
        [map],
    )

    const Handlers2 = useMemo(
        () => ({
            click(){
                toggleModal(true)
                toggleModalContent(4)
            },
        }),
        [map],
    )

    const Handlers3 = useMemo(
        () => ({
            click(){
                toggleModal(true)
                toggleModalContent(5)
            },
        }),
        [map],
    )

    const Handlers4 = useMemo(
        () => ({
            click(){
                toggleModal(true)
                toggleModalContent(6)
            },
        }),
        [map],
    )

    const Handlers5 = useMemo(
        () => ({
            click(){
                toggleModal(true)
                toggleModalContent(7)
            },
        }),
        [map],
    )

    return(
        <>
            <Marker
                position = {Marker1.position}
                eventHandlers = {Handlers1}
            >
                <Tooltip direction="auto">
                    {Vendingmachines["5"]}
                </Tooltip>
            </Marker>

            <Marker
                position={Marker2.position}
                eventHandlers = {Handlers2}
            >
                <Tooltip direction="auto">
                    {Vendingmachines["1"]}
                </Tooltip>
            </Marker>

            <Marker
                position={Marker3.position}
                eventHandlers={Handlers3}
            >
                <Tooltip>
                    {Vendingmachines["2"]}
                </Tooltip>
            </Marker>

            <Marker
                position={Marker4.position}
                eventHandlers={Handlers4}
            >
                <Tooltip>
                    {Vendingmachines["3"]}
                </Tooltip>
            </Marker>

            <Marker
                position={Marker5.position}
                eventHandlers={Handlers5}
            >
                <Tooltip>
                    {Vendingmachines["4"]}
                </Tooltip>
            </Marker>
        </>
    )
}

export default MachineMarkers;