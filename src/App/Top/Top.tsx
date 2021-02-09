import  { FC } from 'react';
import * as React from "react";

import Col from "../Column/Column";

import "./Top.module.scss";

const Top: FC = () => {
    return(
        <div>
            <section className="hero is-fullheight-with-navbar">
                <div className="hero-body">
                    <div className="container has-text-centered">
                        <h1 className="title is-size-1">
                            Where is the <u className="has-text-danger">vending machine</u> for the drink <br className="" />you want?
                        </h1>
                        <p className="subtitle">どこに、何が、何円で？ そんな疑問にお答えします。</p>
                    </div>
                </div>
            </section>

            <section className="hero is-white is-fullheight">
                <div className="hero-body">
                    <div className="container">
                        <div className="columns  is-vcentered">
                            <div data-aos="fade-left" className="column
                            is-10-mobile is-offset-1-mobile
                            is-10-tablet is-offset-1-tablet
                            is-4-desktop is-offset-1-desktop
                            is-4-widescreen is-offset-1-widescreen
                            is-4-fullhd is-offset-1-fullhd">
                                <figure className="image is-square">
                                    <img src="#" />
                                </figure>
                            </div>
                            <div data-aos="fade-down" className="column
                            is-10-mobile is-offset-1-mobile
                            is-10-tablet is-offset-1-tablet
                            is-5-desktop is-offset-1-desktop
                            is-5-widescreen is-offset-1-widescreen
                            is-5-fullhd is-offset-1-fullhd">
                                <h1 className="titled title is-1 mb-6">
                                    absurd illustrations that make sense
                                </h1>
                                <h2 className="subtitled subtitle">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum cupiditate dolorum
                                    vitae dolores
                                    nesciunt totam magni quas.
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Top;