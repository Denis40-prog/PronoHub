import React from "react";
import logo from "../../../assets/images/LogoPronohub.png";

const Contact = () => {
    return (
        <div className="flex flex-col w-full place-items-center space-y-7 text-center">
            <h2 className="mt-10">Pronohub, Le site ou la taille de la mise compte</h2>
            <div>
                <p>
                    ⚠️ Attention ce site est réserver au plus de 18 ans ⚠️<br/>
                    Pronohub est le seul site de pronostic au monde qui propose des côtes aussi alléchante.<br/> 
                    Une mention pour nos 4 développeurs, Denis, Noah, Ismael, Alexis.<br/>
                </p>
            </div>
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&pp=ygUJcmljayByb2xs" target="_blank" >
                <img src={logo} className="animate-bounce" width={200} />
            </a>

        </div>
        
    )  
}

export default Contact