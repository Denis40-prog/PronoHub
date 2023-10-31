import React from "react";

const Button = ({buttonTitle, style, action}) => {
    return(
        <div>
            <button onClick={action} className={style}>{buttonTitle}</button>
        </div>
    )
}

export default Button
