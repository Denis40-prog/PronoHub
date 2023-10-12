import React from "react";

const Button = ({buttonTitle, style}) => {
    return(
        <div>
            <button className={style}>{buttonTitle}</button>
        </div>
    )
}

export default Button
