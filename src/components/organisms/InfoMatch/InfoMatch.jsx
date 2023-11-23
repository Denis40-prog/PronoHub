import React, { useEffect, useState } from "react";
import { Tooltip } from 'react-tooltip';
import Popup from "../PopUp";
import { FaAngleLeft } from "react-icons/fa6";
import Slogan from "../../atomes/Slogan/Slogan";
import { getRequest } from "../../../services/ApiCallService";

const InfoMatch = ({...props}) => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [teamToBet, setTeamToBet] = useState("");
    const [matchInfo, setMatchInfo] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await getRequest(`http://localhost:8000/api/games/${props.matchId}`);
                if (response.status === 200) {
                    console.log('Request successful');
                    response.json().then(data => {
                        console.log('data ', data);
                        props.openSnackBar('Les informations sur le match ont bien été récupérées')
                        setMatchInfo(data);
                        setIsLoading(false);
                    }, error => {
                        console.error('Error parsing JSON:', error);
                        setIsLoading(false);
                    });
                } else {
                    console.error(`Request failed: ${response.status}`, response);
                    setIsLoading(false);
                }
            } catch (error) {
                console.error('Error:', error);
                setIsLoading(false);
            }
        }
        fetchData();
    }, [props.matchId])

    const openPopup = (team) => {
        setIsPopupOpen(true);
        setTeamToBet(team);
    }

    const closePopup = () => {
        setIsPopupOpen(false);
    }

    return (
        <div>
            {isLoading ? (
                <p>Chargement en cours...</p>
            ) : ( 
                <div>
                    <Slogan />
                    <h2 className="flex col-auto ml-3 mt-10 items-center">
                        <FaAngleLeft className="text-accent cursor-pointer"
                            onClick={() => props.setPage("Accueil")}
                            data-tooltip-id="getBack"
                            data-tooltip-content={'Retour'}/>
                        Match {matchInfo.teamId1.name} <span className="mr-2 ml-2 text-accent"> vs </span> {matchInfo.teamId2.name}
                    </h2>
                    <Tooltip id="getBack" />
                    <div className="flex flex-col mt-10">
                        <div className="grid grid-flow-col justify-stretch mt-10 h-fit w-full place-items-center">
                            <div className="flex flex-col space-y-8">
                                <img src={matchInfo.teamId1.logo} alt="" className="h-72 drop-shadow-logo" />
                                <button
                                    className="bg-accent text-white font-bold py-2 px-4 rounded"
                                    onClick={() => openPopup(matchInfo.teamId1.name)}
                                    data-tooltip-id="betTeam1"
                                    data-tooltip-content={`Parier sur ${matchInfo.teamId1.name}`}
                                >
                                    <Tooltip id="betTeam1" />
                                    {matchInfo.teamId1.name}
                                </button>
                            </div>
                            <p className="text-accent text-6xl">VS</p>
                            <div className="flex flex-col space-y-4">
                                <img src={matchInfo.teamId2.logo} alt="" className="h-72 drop-shadow-logo" />
                                <button
                                    className="bg-accent text-white font-bold py-2 px-4 rounded"
                                    onClick={() => openPopup(matchInfo.teamId2.name)}
                                    data-tooltip-id="betTeam2"
                                    data-tooltip-content={`Parier sur ${matchInfo.teamId2.name}`}
                                >
                                    <Tooltip id="betTeam2" />
                                    {matchInfo.teamId2.name}
                                </button>
                            </div>
                        </div>
                    </div>
                    {isPopupOpen && (<Popup onClose={closePopup} team={teamToBet}/>)}
                </div> 
            )}
        </div>
    )
}

export default InfoMatch;
