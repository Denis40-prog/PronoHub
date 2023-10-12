import React from "react";
import Style from "./header.module.css";
import Button from "../../atomes/Button/Button";
import logo from "../../../assets/images/LogoPronohub.png";

const Header = () => {
    return(
        <div className={Style.navBar}>
            <img src={logo} alt="logo" className={Style.image}></img>
            <nav className={Style.menu}>
                <Button buttonTitle="Informations" style={Style.navButton}/>
                <Button buttonTitle="Coordonnées" style={Style.navButton}/>
                <Button buttonTitle="A propos" style={Style.navButton}/>
            </nav>
        </div>
        
    )
}

export default Header
