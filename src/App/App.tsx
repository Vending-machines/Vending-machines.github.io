import React, { FC } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup, ImageOverlay} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import Header from "./Header/Header";
import Top from "./Top/Top";
import Footer from "./Footer/Footer";

import "./App.module.scss";

import kosenMap from "./img/kosenMap.png"

const pagesName:string[] = ['Top', 'Search', 'Contact'];

const Search: FC = () => {
    return(
        <MapContainer center={[0, 0]} zoom={0} scrollWheelZoom={false}>
            <TileLayer url="" opacity={0.5} zIndex={10} />

            <ImageOverlay
                url = {kosenMap}
                bounds={[
                    [0, 0],
                    [960, 300],
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