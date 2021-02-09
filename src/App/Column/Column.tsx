import { FC } from  "react";
import * as React from "react";

interface ColumnProps{
    isSize:number;
    children ?;
}

const Column: FC<ColumnProps> = ({isSize, children}) => {
    return(
        <div className={`column is-${isSize}`}>
            {children}
        </div>
    );
};

export default Column;