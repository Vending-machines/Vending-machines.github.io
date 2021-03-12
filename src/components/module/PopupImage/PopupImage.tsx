import React, {FC, useCallback} from "react";

import "./PopupImage.scss"

interface Props {
    active: boolean
    toggleModal:Function
    content:number
    toggleModalContent:Function
    toggleView:Function
}

import Column from "../../atom/Column/Column";
import Box from "../../atom/Box/Box";

import bottle from "../../../assets/img/bottle.png";
import vendingmachine from "../../../assets/img/vending-machine.png";

import item_name from "../../../__test__/Sample-Json-master/item_name.json";
import Vendingmachine from "../../../__test__/Sample-Json-master/Vending-machines.json";

const PopupImage:FC<Props> = (Props) =>{

    const ModalContent:FC = useCallback(
        () => {
            if (Props.content === 0){

                console.log("PopupImageをレンダー！");

                return(
                    <Box className="columns is-centered">
                        <Column isSize={4}>
                            <Box onClick={() => {Props.toggleModalContent(1)}}>
                                <img src={bottle} alt=""/>
                                <h1 className="has-text-centered">商品から探す</h1>
                            </Box>
                        </Column>
                        <Column isSize={1} />
                        <Column isSize={4} >
                            <Box onClick={() => {Props.toggleModalContent(2)}}>
                                <img src={vendingmachine} alt=""/>
                                <h1 className="has-text-centered">自販機から探す</h1>
                            </Box>
                        </Column>
                    </Box>
                )

            } else if (Props.content === 1) {

                let array: string[] = [];

                for (const [id, name] of Object.entries(item_name)){
                    if (!isNaN(parseInt(id))){
                        array.push(name);
                    }
                }

                console.log("PopupImageをレンダー！");

                return (
                    <div className="modal-card">
                        <header className="modal-card-head">
                            <p className="modal-card-title">商品一覧</p>
                            <button className="delete" aria-label="close" onClick={() => Props.toggleModal(false)}/>
                        </header>
                        <section className="modal-card-body">
                            <table className="table">
                                <thead>
                                <tr>
                                    <th>id</th>
                                    <th>商品名</th>
                                </tr>
                                </thead>
                                { array.map((d,idx) => {
                                    return (
                                        <tbody key={idx + 1}>
                                        <tr>
                                            <th>{idx + 1}</th>
                                            <th>{d}</th>
                                        </tr>
                                        </tbody>
                                    )
                                })}
                            </table>
                        </section>
                        <footer className="modal-card-foot" />
                    </div>
                )

            } else if(Props.content === 2){

                let array: string[] = [];

                for (const [id, place] of Object.entries(Vendingmachine)) {
                    if (!isNaN(parseInt(id))) {
                        array.push(place);
                    }
                }

                console.log("PopupImageをレンダー！");

                return (
                    <div className="modal-card">
                        <header className="modal-card-head">
                            <p className="modal-card-title">自販機一覧</p>
                            <button className="delete" aria-label="close" onClick={() => Props.toggleModal(false)}/>
                        </header>
                        <section className="modal-card-body">
                            <table className="table">
                                <thead>
                                <tr>
                                    <th>id</th>
                                    <th>自販機の場所</th>
                                </tr>
                                </thead>
                                { array.map((d,idx) => {
                                    return (
                                        <tbody
                                            key={idx + 1}
                                            onClick={() => {
                                                Props.toggleView(idx + 1);
                                                Props.toggleModal(false);
                                            }}>
                                        <tr>
                                            <th>{idx + 1}</th>
                                            <th>{d}</th>
                                        </tr>
                                        </tbody>
                                    )
                                })}
                            </table>
                        </section>
                        <footer className="modal-card-foot" />
                    </div>
                )

            } else {
                console.log("PopupImageをレンダー！");
                return (
                    <>
                    </>
                )
            }
        }, [Props.content]
    )


    return (
        <>
            <div className={`modal ${Props.active ? "is-active" : ""}`}>
                <div className="modal-background" onClick={() => Props.toggleModal(false)} />
                    <div className="modal-content">
                        <ModalContent />
                    </div>
                <button className="modal-close is-large" aria-label="close" onClick={() => Props.toggleModal(false)}/>
            </div>
        </>
    )
}

export default PopupImage;