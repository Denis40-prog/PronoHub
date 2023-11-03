import Button from "../../atomes/Button/Button";
import React from "react";

const Accueil = ({ ...props }) => {
    const handleButtonClick = (pageName) => {
        props.setPage(pageName);
    };
    return(
        <div>
            <h1>Accueil</h1>
            <Button buttonTitle="go to info App" style="bg-white" action={() => handleButtonClick("InfosMatch")}/>
        </div>
    )
}

export default Accueil;