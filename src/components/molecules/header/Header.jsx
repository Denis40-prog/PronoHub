import React from "react";
import Style from "./header.module.css";
import Button from "../../atomes/Button/Button";
import logo from "../../../assets/images/LogoPronohub.png";
import Informations from "../Infomations/Informations";
import Contact from "../Contact/Contact";
import PersonnalCard from "../../atomes/PersonnalCard/PersonnalCard";

const Header = ({...props}) => {

    const renderActivePage = (pageName) => {
        switch (pageName) {
            case "Informations":
                props.setAppActivePage(<Informations />)
                break;
            case "Contact":
                props.setAppActivePage(<Contact />);
                break;
            case "A_propos":
                props.setAppActivePage(<PersonnalCard />);
                break;
            default:
                props.setAppActivePage(<PersonnalCard />);
                break;
        }
    }

    return(
        <div className={Style.navBar}>
            <img src={logo} alt="logo" className={Style.image}></img>
            <nav className={Style.menu}>
                <Button buttonTitle="Informations" style={Style.navButton} action={() => renderActivePage("Informations")}/>
                <Button buttonTitle="Contact" style={Style.navButton} action={() => renderActivePage("Contact")}/>
                <Button buttonTitle="A propos" style={Style.navButton} action={() => renderActivePage("A_propos")}/>
            </nav>
        </div>
    )
}

export default Header
