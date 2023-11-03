import React from 'react'

const ButtonFirstScreen = ({HandleRestriction, Bool, style, ...props}) => {
    return (
        <button type="button" onClick={ () => HandleRestriction(Bool)} className={"flex w-22 justify-center font-bold rounded-2xl text-sm px-5 py-2.5 mr-2 mb-2 " + style} >{props.children}</button>
    )
}

export default ButtonFirstScreen;   
