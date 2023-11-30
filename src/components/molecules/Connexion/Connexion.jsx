import React, { useState } from "react";
import { postRequest } from "../../../services/ApiCallService";
import { jwtDecode } from "jwt-decode"

const Connexion = ({ ...props }) => {
    const handleInscriptionclick = () => {
        props.setPage("Inscription");
    }
    const [emailValue, setEmailValue] = useState(localStorage.getItem('username') ? localStorage.getItem('username') : '');
    const [passwordValue, setPasswordValue] = useState('');

    const handleEmailChange = (e) => {
      setEmailValue(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPasswordValue(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const request = {
            email: emailValue,
            password: passwordValue
        }

        try {
            const baseUrl = process.env.REACT_APP_API_URL;
            const response = await postRequest(`${baseUrl}/api/login_check`, request);
      
            if ((response.status === 200)) {
                response.json().then(data => {
                    if (data && data.token) {
                        localStorage.setItem('token', data.token);
                        localStorage.setItem('decodedToken', JSON.stringify(jwtDecode(data.token)));
                        localStorage.setItem('usersId', data.user_id.id);
                        localStorage.setItem('username', emailValue);
                        props.openSnackBar('Connexion Réussie');
                        props.loggedInSetter();
                        props.setPage("Accueil");
                    } else {
                        console.error('Token not found in response data:', data);
                        props.openSnackBar('Une erreur est survenue lors de la connexion');
                    }
                }).catch(error => {
                    console.error('Error parsing JSON:', error);
                    props.openSnackBar('Une erreur est survenue lors de la connexion');
                });
            } else {
                    props.openSnackBar('Une erreur est survenue lors de la connexion');
                    console.error('Request failed', response);
            }
        } catch (error) {
            console.error('Error:', error);
            props.openSnackBar('Une erreur est survenue lors de la connexion');
        }
    };

    return(
        <div className="flex justify-center">
          <div className="shadow-caca shadow-secondary rounded-xl w-2/6 mt-20 bg-primary">
            <div className=" h-3/6 flex-col justify-center px-6 py-6 lg:px-8">
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
                            <button type="submit" disabled={!emailValue || !passwordValue} className="flex w-fit mt-5 font-semibold justify-center text-black rounded-3xl disabled:opacity-25 text-sm px-5 py-2.5 mr-2 mb-2 bg-accent">Se connecter</button>
                        </div>
                    </form>

                    <p className="mt-5 text-center text-sm">
                        <a href="#" onClick={handleInscriptionclick} className="hover:text-accent cursor-pointer">Créer un compte</a>
                    </p>
                </div>
            </div>
          </div>
        </div>
    )
}

export default Connexion;