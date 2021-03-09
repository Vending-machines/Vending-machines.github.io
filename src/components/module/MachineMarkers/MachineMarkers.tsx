import React, {useMemo, FC} from "react";
import {Marker, Popup, useMap, Tooltip} from "react-leaflet";
import {LatLngBoundsExpression, LatLngExpression} from "leaflet";



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
    position:[30, 60],
    bound: [[0, 0],[30, 60]]
}
const Marker2:LatLngAndBound = {
    position:[90, 240],
    bound:[[90, 240],[90, 240]]
}


interface Props{
    toggleModal:Function,
}

const MachineMarkers:FC<Props> = ({toggleModal}) => {


    const map = useMap();

    const Handlers1 = useMemo(
        () => ({
            click(){
                map.fitBounds(Marker1.bound)
                toggleModal(true)
            },
        }),
        [map],
    )

    const Handlers2 = useMemo(
        () => ({
            click(){
                map.fitBounds(Marker2.bound)
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
                    kitaaaaaaaaa
                </Tooltip>
            </Marker>

            <Marker
                position={Marker2.position}
                eventHandlers = {Handlers2}
            >
                <Tooltip direction="auto">
                    uoooooooooo
                </Tooltip>
            </Marker>
        </>
    )
}

export default MachineMarkers;