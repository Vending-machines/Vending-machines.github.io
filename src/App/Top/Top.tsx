import  { FC } from 'react';
import * as React from "react";

import "./Top.module.scss";

const Top: FC = () => {
    const columnSetting: string =
        "column is-10-mobile is-offset-1-mobile is-10-tablet is-offset-1-tablet is-4-desktop is-offset-1-desktop is-4-widescreen is-offset-1-widescreen is-4-fullhd is-offset-1-fullhd";

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

            <div className="hov-1">
                <section className="hero is-small bars bar-1">
                    <div className="hero-body">
                        <div className="container">
                            <div className="columns  is-vcentered">
                                <div data-aos="fade-left" className={columnSetting}>
                                    <figure className="image is-square">
                                        <img src="#" />
                                    </figure>
                                </div>
                                <div data-aos="fade-down" className={columnSetting}>
                                    <h1 className="titled title is-2 mb-6"><span>売っている</span><span>商品が</span><span>わからない</span></h1>
                                    <p className="subtitle hide-text is-4">調べたい自販機を選択することで、その自販機で販売されている商品の一覧が表示されます。</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <div className="hov-2">
                <section className="hero is-small bars bar-2">
                    <div className="hero-body">
                        <div className="container">
                            <div className="columns  is-vcentered hero-2">
                                <div data-aos="fade-left" className={columnSetting}>
                                    <h1 className="titled title is-2 mb-6"><span>商品の</span><span>場所が</span><span>わからない</span></h1>
                                    <p className="subtitle hide-text is-4">調べたい商品を選択することで、商品がどこで売っているか検索できます。</p>
                                </div>
                                <div data-aos="fade-down" className={columnSetting}>
                                    <figure className="image is-square">
                                        <img src="#" />
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <div className="hov-3">
                <section className="hero is-small bars bar-3">
                    <div className="hero-body">
                        <div className="container">
                            <div className="columns  is-vcentered">
                                <div data-aos="fade-left" className={columnSetting}>
                                    <figure className="image is-square">
                                        <img src="#" />
                                    </figure>
                                </div>
                                <div data-aos="fade-down" className={columnSetting}>
                                    <h1 className="titled title is-2 mb-6"><span>どんな</span><span>商品なのか</span><span>わからない</span></h1>
                                    <p className="subtitle hide-text is-4">商品を検索する際、画像も一緒に確認できます</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        </div>
    );
};

export default Top;