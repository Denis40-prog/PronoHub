import React, { useEffect, useState } from "react";
import { Tooltip } from 'react-tooltip';
import Popup from "../PopUp";
import { FaAngleLeft } from "react-icons/fa6";
import Slogan from "../../atomes/Slogan/Slogan";
import { getRequest } from "../../../services/ApiCallService";
import { postRequest } from "../../../services/ApiCallService";
import Loader from "../../molecules/Loader/Loader";
import { FaCheck, FaFrog, FaCross } from "react-icons/fa6";

const InfoMatch = ({...props}) => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [teamToBet, setTeamToBet] = useState("");
    const [matchInfo, setMatchInfo] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    async function fetchData() {
        setIsLoading(true);
        try {
            const baseUrlApi = process.env.REACT_APP_API_URL
            const response = await getRequest(`${baseUrlApi}/api/games/${props.matchId}`);
            if (response.status === 200) {
                console.log('Request successful');
                response.json().then(data => {
                    props.openSnackBar('Les informations sur le match ont bien été récupérées')
                    setMatchInfo(data);
                    setIsLoading(false);
                }, error => {
                    console.error('Error parsing JSON:', error);
                    setIsLoading(false);
                    window.location.reload();
                });
            } else {
                console.error(`Request failed: ${response.status}`, response);
                setIsLoading(false);
                window.location.reload();
            }
        } catch (error) {
            console.error('Error:', error);
            setIsLoading(false);
            window.location.reload();
        }
    }

    useEffect(() => {
        fetchData();
    }, [props.matchId])

    const openPopup = (team) => {
        setIsPopupOpen(true);
        setTeamToBet(team);
    }

    const closePopup = () => {
        setIsPopupOpen(false);
    }

    const bet = async () => {
        setIsLoading(true);
        const request = {
            users: [`/api/users/${localStorage.getItem('usersId')}`],
            game: `/api/games/${props.matchId}`,
            league: '/api/leagues/1',
            team: `/api/teams/${teamToBet === matchInfo.teamId1.name ? matchInfo.teamId1.id : matchInfo.teamId2.id}`,
            isDraw: false,
            status: 'pending'
        }
        try {
            const response = await postRequest('http://localhost:8000/api/bets', request);
            if (response !== undefined) {
                if ((response.status === 201)) {
                    console.log('Request successful');
                    props.openSnackBar(`Vous avez parié sur ${teamToBet}`);
                    fetchData();
                } else {
                    console.error('Request failed', response);
                    props.openSnackBar('Une erreur est survenue lors de l\'enregistrement du pari');
                }
            } else {
                console.error('Request failed', response);
                props.openSnackBar('Une erreur est survenue lors de l\'enregistrement du pari');
            }
        } catch (error) {
            console.error('Error:', error);
            props.openSnackBar('Une erreur est survenue lors de l\'enregistrement du pari');
        }
        closePopup();
        setIsLoading(false);
    }

    return (
        <div>
            {isLoading ? (
                <Loader />
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
                    {isPopupOpen && (<Popup onClose={closePopup} onConfirm={bet} team={teamToBet}/>)}
                    <table className="table-auto mt-10">
                        <thead>
                            <h1 className="text-center text-2xl font-bold">Paris faits sur ce match match</h1>
                        </thead>
                        <tbody>
                            {matchInfo.bets.map((bet) => {
                                return (
                                    <tr key={bet.id}>
                                        <td className="border-accent px-4 py-2 text-white">{bet.users[0].name} {bet.users[0].lastname}</td>
                                        <td className="border-accent px-4 py-2 text-white">{bet.team.name}</td>
                                        <td className="border-accent px-4 py-2 text-white"><img className="h-6" src={bet.team.logo} alt="teamLogo"/></td>
                                        <td className="border-accent px-4 py-2 w-fit text-center">
                                            {bet.status === 'valid' ? <FaCheck className="text-validBet"/> : bet.status === 'pending' ? <FaFrog className="text-accent"/> : <FaCross className="text-invalidBet"/>}
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    )
}

export default InfoMatch;
