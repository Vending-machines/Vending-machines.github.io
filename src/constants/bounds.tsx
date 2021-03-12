import {LatLngBoundsExpression, LatLngExpression} from "leaflet";

interface LatLngAndBound{
    position: LatLngExpression;
    bound: LatLngBoundsExpression;
}

export const Marker1:LatLngAndBound = {
    position:[49, 58],
    bound: [[40, 34],[58, 82]]
}

export const Marker2:LatLngAndBound = {
    position:[40, 178],
    bound:[[31, 154],[49, 202]]
}

export const Marker3: LatLngAndBound = {
    position: [38, 190],
    bound: [[29, 166], [47, 214]]
}

export const Marker4: LatLngAndBound = {
    position: [38, 198],
    bound: [[29, 174], [47, 222]]
}

export const Marker5: LatLngAndBound = {
    position: [38, 206],
    bound: [[29, 182], [47, 230]]
}