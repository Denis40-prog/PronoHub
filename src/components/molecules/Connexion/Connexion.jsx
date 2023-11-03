import React, { useState } from "react";
import logo from "../../../assets/images/LogoPronohub.png";

const Connexion = ({ ...props }) => {
    const handleInscriptionclick = () => {
        props.setPage("Inscription");
    }
    const [emailValue, setEmailValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');

    const handleEmailChange = (e) => {
      setEmailValue(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPasswordValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        props.setPage("Accueil");
    };
    return(
        <div className="flex justify-center">
          <div className="shadow-caca shadow-secondary rounded-xl w-2/6 mt-12 bg-primary">
            <div className=" h-3/6 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-6 text-center font-bold leading-9 tracking-tight">Conne<span className="text-accent">xion</span></h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-accent">Email</label>
                            <div className="mt-2">
                                <input id="email" name="email" value={emailValue} onChange={handleEmailChange}
                                placeholder="Entrez votre email" required className="block w-full placeholder:italic p-2 rounded-xl border-2 border-accent py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6" />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-accent">Password</label>
                            <div className="mt-2">
                                <input id="password" type="password" name="password" value={passwordValue} onChange={handlePasswordChange}
                                placeholder="Entrez votre mot de passe" required className="block w-full placeholder:italic p-2 rounded-xl border-2 border-accent py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6" />
                            </div>
                        </div>

                        <div className="flex w-full place-content-center">
                            <button type="submit" disabled={!emailValue || !passwordValue} className="flex w-fit font-semibold justify-center text-black rounded-3xl disabled:opacity-25 text-sm px-5 py-2.5 mr-2 mb-2 bg-accent">Se connecter</button>
                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm text-gray-500">
                        <a href="#" onClick={handleInscriptionclick} className="hover:text-accent cursor-pointer">Créer un compte</a>
                    </p>
                </div>
            </div>
          </div>
        </div>
    )
}

export default Connexion;