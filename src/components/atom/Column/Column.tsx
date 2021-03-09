import　React, { FC } from  "react";

interface ColumnProps{
    isSize:number;
    children ?;
    className?: string;
}

const Column: FC<ColumnProps> = ({isSize, children, className}) => {
    return(
        <div className={`column is-${isSize} ${className}`}>
            {children}
        </div>
    );
};

export default Column;