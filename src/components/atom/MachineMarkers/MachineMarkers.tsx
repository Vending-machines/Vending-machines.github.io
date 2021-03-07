import React, {useMemo, FC} from "react";
import {Marker, Popup,  useMap, } from "react-leaflet";
import {LatLngBoundsExpression, LatLngExpression} from "leaflet";

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
                <Popup>
                    マーカーⅠ
                </Popup>
            </Marker>

            <Marker
                position={Marker2.position}
                eventHandlers = {Handlers2}
            >
                <Popup>
                    マーカーⅡ
                </Popup>
            </Marker>
        </>
    )
}

export default MachineMarkers;