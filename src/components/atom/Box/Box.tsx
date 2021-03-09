import React, {FC} from "react";

interface  BoxProps{
    children ?;
    className?: string;
    onClick?: ((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void) | undefined;
}

const  Box : FC<BoxProps> = ({children, className, onClick}) =>{
    return (
        <div className={`box is-marginless ${className}`} onClick={onClick}>
            {children}
        </div>
    )
}

export default Box;