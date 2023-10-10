import React from "react";

import Style from "./button.module.css"

const Button = ({buttonTitle}) => {
    return(
        <div>
            <button className={Style.button}>{buttonTitle}</button>
        </div>
    )
}

export default Button
