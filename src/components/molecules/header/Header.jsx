import React from "react";
import Style from "./header.module.css";
import Button from "../../atomes/Button/Button";
import logo from "../../../assets/images/LogoPronohub.png";

const Header = ({ ...props }) => {
    const handleButtonClick = (pageName) => {
        props.setPage(pageName);
    };

    const handleUnlogClick = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('decodedToken');
        localStorage.removeItem('usersId');
        window.location.reload();
        props.openSnackBar('Déconnexion réussie');
    }

    return(
        <div className={Style.navBar}>
            <img src={logo} alt="logo" className={Style.image} onClick={() => handleButtonClick("Accueil")} />
            {
                props.isLoggedIn() ? 
                <nav className={Style.menu}>
                    <Button buttonTitle="Accueil" style={props.pageName === 'Accueil' ? Style.activeButton : Style.navButton} action={() => handleButtonClick("Accueil")}/>
                    <Button buttonTitle="Contact" style={props.pageName === 'Contact' ? Style.activeButton : Style.navButton} action={() => handleButtonClick("Contact")}/>
                    <Button buttonTitle="Deconnexion" style={props.pageName === 'Deconnexion' ? Style.activeButton : Style.navButton} action={handleUnlogClick}/>
                </nav> :
                <nav className={Style.menu}>
                    <Button buttonTitle="Contact" style={props.pageName === 'Contact' ? Style.activeButton : Style.navButton} action={() => handleButtonClick("Contact")}/>
                    <Button buttonTitle="Connexion" style={props.pageName === 'Connexion' ? Style.activeButton : Style.navButton} action={() => handleButtonClick("Connexion")}/>
                </nav>
            }
        </div>
    )
}

export default Header
