import React from "react";
import Style from "./header.module.css";
import Button from "../../atomes/Button/Button";

const Header = () => {
    return(
        <nav className={Style.menu}>
            <Button buttonTitle="Informations" />
            <Button buttonTitle="Coordonnées" />
            <Button buttonTitle="A propos" />
        </nav>
    )
}

export default Header
