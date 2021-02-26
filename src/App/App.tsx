import React, { FC } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import {MapContainer, TileLayer, Marker, Popup, ImageOverlay} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import Header from "./Header/Header";
import Top from "./Top/Top";
import Footer from "./Footer/Footer";

import "./App.module.scss";

import kosenMap from "./img/kosenMap.png"

const pagesName:string[] = ['Top', 'Search', 'Contact'];

const Search: FC = () => {
    const MapImage = {
        url: kosenMap,
        height: 640,
        width: 960
    }
    let Camera = [100, 100]


    return(
        <MapContainer center={[100, 100]} zoom={2} scrollWheelZoom={false}>
            <ImageOverlay
                url = {MapImage.url}
                bounds={[
                    [0, 0],
                    [MapImage.height/4, MapImage.width/4],
                ]}
            />
        </MapContainer>
    )
};


const App: FC = () => {
    return (
        <Router>
            <Header pages={pagesName} />
            <main className="mt-6">
                <Route exact path="/" component={Top} />
                <Route path="/Search" component={Search} />
            </main>
            <Footer />
        </Router>
    )
};

export default App;