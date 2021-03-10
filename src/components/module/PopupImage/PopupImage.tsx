import React, {FC} from "react";

import "./PopupImage.scss"

interface Props {
    active: boolean,
    toggleModal:Function,
    content:number,
    toggleModalContent:Function,
}

import Column from "../../atom/Column/Column";
import Box from "../../atom/Box/Box";

import bottle from "../../../assets/img/bottle.png";
import vendingmachine from "../../../assets/img/vending-machine.png";

import item_name from "../../../__test__/Sample-Json-master/item_name.json";
import {type} from "os";


const PopupImage:FC<Props> = ({active, toggleModal,content,toggleModalContent}) =>{

    const ModalContent: FC = () =>{

        if (content === 0){
            return(
                <Box className="columns is-centered">
                    <Column isSize={4}>
                        <Box onClick={() => {toggleModalContent(1)}}>
                            <img src={bottle} alt=""/>
                            <h1 className="has-text-centered">商品から探す</h1>
                        </Box>
                    </Column>
                    <Column isSize={1} />
                    <Column isSize={4} >
                        <Box onClick={() => {toggleModalContent(2)}}>
                            <img src={vendingmachine} alt=""/>
                            <h1 className="has-text-centered">自販機から探す</h1>
                        </Box>
                    </Column>
                </Box>
            )
        } else if (content === 1) {

            let array: string[] = [];

            for (const [id, name] of Object.entries(item_name)){
                if (!isNaN(parseInt(id))){
                    array.push(name);
                }
            }

            return (
                <div className="modal-card">
                    <header className="modal-card-head">
                        <p className="modal-card-title">商品一覧</p>
                        <button className="delete" aria-label="close" onClick={() => toggleModal(false)}/>
                    </header>
                    <section className="modal-card-body">
                        <table className="table">
                            <thead>
                            <tr>
                                <th>id</th>
                                <th>商品名</th>
                            </tr>
                            </thead>
                            <tbody>
                            { array.map((d,idx) => {
                                return (
                                    <tr key={idx + 1}>
                                        <th>{idx + 1}</th>
                                        <th>{d}</th>
                                    </tr>
                                )
                            })}
                            </tbody>
                        </table>
                    </section>
                    <footer className="modal-card-foot" />
                </div>
            )
        } else if(content === 2){
            return (<></>);
        } else {
            return (<></>);
        }
    }


    return (
        <>
            <div className={`modal ${active ? "is-active" : ""}`}>
                <div className="modal-background" onClick={() => toggleModal(false)} />
                    <div className="modal-content">
                        <ModalContent />
                    </div>
                <button className="modal-close is-large" aria-label="close" onClick={() => toggleModal(false)}/>
            </div>
        </>
    )
}

export default PopupImage;