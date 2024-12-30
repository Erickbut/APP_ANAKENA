import React from 'react';
import Navbar from '../components/Navbar';
import Rates from '../components/Rates';

/* RENDERIZADO COMO PAGINA INDEPENDIENTE */

const RatesPage = () => {
    return (
        <div>
            <Navbar />
            <Rates />
        </div>
    );
};

export default RatesPage;
