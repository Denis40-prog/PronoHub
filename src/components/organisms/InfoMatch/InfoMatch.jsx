import React, { useEffect } from "react";
import InfosMatch from "../../../toolkit/InfosMatch";

const InfoMatch = () => {
    useEffect(() => {
        InfosMatch.id = 1;
        InfosMatch.equipe1 = "PSG";
        InfosMatch.image = "https://upload.wikimedia.org/wikipedia/fr/thumb/8/86/Paris_Saint-Germain_Logo.svg/1200px-Paris_Saint-Germain_Logo.svg.png"
    }, [])

    return(
        <div>
            <h1>Infos match</h1>
            <p>id : {InfosMatch.id}</p>
            <p>equipe1 : {InfosMatch.equipe1}</p>
            <img src={InfosMatch.image} alt="image match"></img>
        </div>
    )
}

export default InfoMatch;