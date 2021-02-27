import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { render } from "react-dom";


//module
import Header from "./components/module/Header/Header";
import Footer from "./components/module/Footer/Footer";

//pages
import Top from "./pages/Top/Top";
import Search from "./pages/Search/Search"

//style
import "../node_modules/bulma/bulma.sass";


const pagesName:string[] = ['Top', 'Search', 'Contact'];
const index = document.getElementById("root");

function Index() {
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
}

render(<Index />,index);