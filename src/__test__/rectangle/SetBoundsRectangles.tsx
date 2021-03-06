import React, {Component, useState, useMemo} from "react";
import {Rectangle, useMap} from "react-leaflet";
import {LatLngBoundsExpression} from "leaflet";

const Bound1:LatLngBoundsExpression = [
    [49.505, -2.09],
    [53.505, 2.09],
]

const Bound2:LatLngBoundsExpression = [
    [50.505, -29.09],
    [52.505, 29.09],
]

function SetBoundsRectangles(){
    const [bounds, setBounds] = useState(Bound1)
    const map = useMap();

    const Handlers1 = useMemo(
        () => ({
            click(){
                setBounds(Bound1)
                map.fitBounds(Bound1)
            },
        }),
        [map],
    )

    const Handlers2 = useMemo(
        () => ({
            click(){
                setBounds(Bound2)
                map.fitBounds(Bound2)
            },
        }),
        [map],
    )

    return(
        <>
            <Rectangle
                bounds={Bound1}
                eventHandlers={Handlers1}/>
            <Rectangle
                bounds={Bound2}
                eventHandlers={Handlers2}
            />
        </>
    )
}

export default SetBoundsRectangles;