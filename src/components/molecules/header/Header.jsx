import React from "react";
import Style from "./header.module.css";
import Button from "../../atomes/Button/Button";
import logo from "../../../assets/images/LogoPronohub.png";

const Header = ({ ...props }) => {
    const handleButtonClick = (pageName) => {
        props.setPage(pageName);
      };
    return(
        <div className={Style.navBar}>
            <img src={logo} alt="logo" className={Style.image}></img>
            <nav className={Style.menu}>
                <Button buttonTitle="Informations" style={Style.navButton} action={() => handleButtonClick("Informations")}/>
                <Button buttonTitle="Contact" style={Style.navButton} action={() => handleButtonClick("Contact")}/>
                <Button buttonTitle="A propos" style={Style.navButton} action={() => handleButtonClick("A_propos")}/>
                <Button buttonTitle="Connexion" style={Style.navButton} action={() => handleButtonClick("Connexion")}/>
            </nav>
        </div>
    )
}

export default Header
