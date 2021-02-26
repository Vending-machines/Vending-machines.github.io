import React, { FC } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import Header from "./Header/Header";
import Top from "./Top/Top";
import Footer from "./Footer/Footer";

import "./App.module.scss";

const pagesName:string[] = ['Top', 'Search', 'Contact'];

const Search: FC = () => {
    const position = [51.505, -0.09]

    return(
        <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[51.505, -0.09]}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
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