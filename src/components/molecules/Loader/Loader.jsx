import React from 'react';
import Style from './Loader.module.css';

const Loader = () => {

    return (
        <div className='flex flex-col min-h-screen align-middle justify-center items-center'>
            <div className={Style.loaderContainer} />
            <p className='text-white pt-32'>Chargement en cours...</p>
        </div>
    );
  };

export default Loader;