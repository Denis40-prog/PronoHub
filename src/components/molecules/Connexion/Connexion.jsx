import React from "react";
import logo from "../../../assets/images/LogoPronohub.png";


const Connexion = () => {
    return(
        <div className="flex justify-center">
          <div className="shadow-caca shadow-secondary rounded-xl w-2/6 mt-12 bg-primary">
            <div className=" h-3/6 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img className="mx-auto h-20 w-auto" src={logo} alt="" />
                    <h2 className="mt-10 text-center font-bold leading-9 tracking-tight">Conne<span className="text-accent">xion</span></h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" action="#" method="POST">
                        <div>
                            <label for="email" className="block text-sm font-medium leading-6 color-accent">Email</label>
                            <div className="mt-2">
                            <input id="email" name="email" type="email" autocomplete="email" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                            <label for="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
                            <div className="text-sm">
                                <p className="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</p>
                            </div>
                            </div>
                            <div className="mt-2">
                            <input id="password" name="password" type="password" autocomplete="current-password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>

                        <div>
                            <button type="submit" className="flex w-full justify-center text-white rounded-2xl text-sm px-5 py-2.5 mr-2 mb-2 bg-accent">Dark</button>
                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm text-gray-500">
                    Not a member?
                    <p className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Start a 14 day free trial</p>
                    </p>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Connexion;