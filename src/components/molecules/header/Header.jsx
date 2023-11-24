import React, {useEffect, useState} from "react";
import Style from "./header.module.css";
import Button from "../../atomes/Button/Button";
import logo from "../../../assets/images/LogoPronohub.png";
import { getRequest } from "../../../services/ApiCallService";

const Header = ({ ...props }) => {
    const [userScore, setUserScore] = useState(0);
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

    const fetchDatas = async () => {
        try {
            const response = await getRequest(`http://localhost:8000/score/${localStorage.getItem('usersId')}`);
            if (response.status === 200) {
                console.log('Request successful');
                response.json().then(data => {
                    setUserScore(data.score);
                }, error => {
                    console.error('Error parsing JSON:', error);
                });
            } else {
                console.error(`Request failed: ${response.status}`, response);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    }

    useEffect(() => {
        fetchDatas();
    }, [])

    return(
        <div className={Style.navBar}>
            <img src={logo} alt="logo" className={Style.image} onClick={() => handleButtonClick("Accueil")} />
            <p>Votre score: <span className='text-accent'>{userScore}</span></p>
            {
                props.isLoggedIn() ? 
                <nav className={Style.menu}>
                    <Button buttonTitle="Accueil" style={Style.navButton} action={() => handleButtonClick("Accueil")}/>
                    <Button buttonTitle="Contact" style={Style.navButton} action={() => handleButtonClick("Contact")}/>
                    <Button buttonTitle="Deconnexion" style={Style.navButton} action={handleUnlogClick}/>
                </nav> :
                <nav className={Style.menu}>
                    <Button buttonTitle="Contact" style={Style.navButton} action={() => handleButtonClick("Contact")}/>
                    <Button buttonTitle="Connexion" style={Style.navButton} action={() => handleButtonClick("Connexion")}/>
                </nav>
            }
        </div>
    )
}

export default Header
