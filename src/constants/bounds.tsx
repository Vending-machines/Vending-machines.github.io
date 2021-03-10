import {LatLngBoundsExpression, LatLngExpression} from "leaflet";

interface LatLngAndBound{
    position: LatLngExpression;
    bound: LatLngBoundsExpression;
}

export const Marker1:LatLngAndBound = {
    position:[49, 58],
    bound: [[0, 0],[30, 60]]
}

export const Marker2:LatLngAndBound = {
    position:[40, 178],
    bound:[[90, 240],[90, 240]]
}

export const Marker3: LatLngAndBound = {
    position: [38, 190],
    bound: [[0, 0], [0, 0]]
}

export const Marker4: LatLngAndBound = {
    position: [38, 198],
    bound: [[0, 0], [0, 0]]
}

export const Marker5: LatLngAndBound = {
    position: [38, 206],
    bound: [[0, 0], [0, 0]]
}