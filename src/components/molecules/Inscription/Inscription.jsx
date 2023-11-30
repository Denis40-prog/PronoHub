import React, { useState } from "react";
import { postRequest } from "../../../services/ApiCallService";

const Inscription = ({ ...props }) => {
    const [emailValue, setEmailValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');
    const [confirmPasswordValue, setConfirmPasswordValue] = useState('');
    const [firstnameValue, setFirstnameValue] = useState('');
    const [lastnameValue, setLastnameValue] = useState('');

    const handleEmailChange = (e) => {
      setEmailValue(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPasswordValue(e.target.value);
    };

    const handleConfirmPasswordChange = (e) => {
        setConfirmPasswordValue(e.target.value);
    }

    const handleFirstnameChange = (e) => {
        setFirstnameValue(e.target.value);
    }

    const handleLastnameChange = (e) => {
        setLastnameValue(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const request = {
            email: emailValue,
            password: passwordValue,
            name: firstnameValue,
            lastname: lastnameValue
        }

        try {
      const baseUrlApi = process.env.REACT_APP_API_URL
            const response = await postRequest(`${baseUrlApi}/register`, request);
      
            if ((response.status === 201)) {
                props.openSnackBar('Inscription Réussie');
                props.setPage("Connexion");
                localStorage.setItem('username', emailValue);
            } else {
                console.error('Request failed', response);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleConnexionclick = () => {
        props.setPage("Connexion");
    }
    return(
        <div className="flex justify-center">
          <div className="shadow-caca shadow-secondary rounded-xl w-2/6 mt-12 bg-primary">
            <div className=" h-3/6 flex-col justify-center px-6 py-2 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-12 text-center font-bold leading-9 tracking-tight">Inscrip<span className="text-accent">tion</span></h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="firstname" className="block text-sm font-medium leading-6 text-accent">Prénom</label>
                            <div className="mt-2">
                                <input id="firstname" name="firstname" value={firstnameValue} onChange={handleFirstnameChange}
                                placeholder="Entrez votre prénom" required className="block w-full placeholder:italic p-2 rounded-xl border-2 border-accent py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6" />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="lastname" className="block text-sm font-medium leading-6 text-accent">Nom</label>
                            <div className="mt-2">
                                <input id="lastname" name="lastname" value={lastnameValue} onChange={handleLastnameChange}
                                placeholder="Entrez votre nom" required className="block w-full placeholder:italic p-2 rounded-xl border-2 border-accent py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6" />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-accent">Email</label>
                            <div className="mt-2">
                                <input id="email" name="email" value={emailValue} onChange={handleEmailChange}
                                placeholder="Entrez votre email" required className="block w-full placeholder:italic p-2 rounded-xl border-2 border-accent py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6" />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-accent">Mot de passe</label>
                            <div className="mt-2">
                                <input id="password" type="password" name="password" value={passwordValue} onChange={handlePasswordChange}
                                placeholder="Entrez votre mot de passe" required className="block w-full placeholder:italic p-2 rounded-xl border-2 border-accent py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6" />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="confirmPassword" className="block text-sm font-medium leading-6 text-accent">Confrimation du mot de passe</label>
                            <div className="mt-2">
                                <input id="confirmPassword" type="password" name="confirmPassword" value={confirmPasswordValue} onChange={handleConfirmPasswordChange}
                                placeholder="Confirmez votre mot de passe" required className="block w-full placeholder:italic p-2 rounded-xl border-2 border-accent py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6" />
                            </div>
                        </div>

                        <div className="flex w-full place-content-center">
                            <button type="submit" disabled={!emailValue || !passwordValue || !confirmPasswordValue || !firstnameValue || !lastnameValue || passwordValue !== confirmPasswordValue} 
                            className="flex w-fit font-semibold justify-center text-black rounded-3xl disabled:opacity-25 text-sm px-5 py-2.5 mr-2 mb-2 bg-accent">S'inscrire</button>
                        </div>
                    </form>

                    <p className="mt-5 text-center text-sm text-gray-500">
                        <a href="#" onClick={handleConnexionclick} className="hover:text-accent cursor-pointer">Déjà un compte ? Se connecter</a>
                    </p>
                </div>
            </div>
          </div>
        </div>
    )
}

export default Inscription;