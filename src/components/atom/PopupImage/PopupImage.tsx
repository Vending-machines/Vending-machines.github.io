import React, {FC} from "react";

import "./PopupImage.scss"

interface Props {
    active: boolean,
    toggleModal:Function,
}

const PopupImage:FC<Props> = ({active, toggleModal}) =>{

    return (
        <>
            <div className={`modal ${active ? "is-active" : ""}`}>
                <div className="modal-background" />
                <div className="modal-content">
                    <div className="notification is-danger">
                        This area has danger messages.
                    </div>
                </div>
                <button className="modal-close is-large" aria-label="close" onClick={() => toggleModal(false)}/>
            </div>
        </>
    )
}

export default PopupImage;