import {FC} from "react";
import * as React from 'react';
import { useState } from 'react';
import  { Link } from 'react-router-dom';

import "./header.module.scss"

interface PropsType {
    pages:string[];
}

const Header:FC< PropsType > = ({pages}) => {
    const [Menu, toggleMenu] = useState<boolean>(false);


    return (
        <header>
            <nav className="navbar is-fixed-top" role="navigation">
                <div className="navbar-brand">
                    <Link className="navbar-item" to="/">
                        <img alt="hogehoge" src="" width="112" height="28" />
                    </Link>
                    <a className={`navbar-burger ${Menu ? "is-active" : ""}`} role="button" onClick={() => toggleMenu(!Menu)}>
                        <span/>
                        <span/>
                        <span/>
                    </a>
                </div>
                <div className={`navbar-menu ${Menu ? "is-active" : ""}`}>
                    <div className="navbar-start">
                        <Link className="navbar-item" to="/">{pages[0]}</Link>
                        <Link className="navbar-item" to="/Search">{pages[1]}</Link>
                        <Link className="navbar-item" to="Contact">{pages[2]}</Link>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export  default  Header;