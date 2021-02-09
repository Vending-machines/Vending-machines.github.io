import React, { FC } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./Header/Header";
import Top from "./Top/Top";
import Footer from "./Footer/Footer";

import "./App.module.scss";

const pagesName:string[] = ['Top', 'Search', 'Contact'];

const Search: FC = () => {
    return(
        <div>
            <h1>Search</h1>
        </div>
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