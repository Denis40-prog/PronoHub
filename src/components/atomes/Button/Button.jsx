import React from "react";

const Button = ({buttonTitle, style, ...props}) => {
    return(
        <div>
            <button onClick={props.action} className={style}>{buttonTitle}</button>
        </div>
    )
}

export default Button
