import React from 'react';

const MainPage = ({ data, start }) => {
    console.log("|data", data);

   
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">Dobrodošli, gosn. Živadine</h1>
            <p className="text-lg text-center text-gray-600 mb-6">
                Drago nam je da ste ovde. Istražite naše funkcije i uživajte u iskustvu!
            </p>
            <button onClick={start} className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow hover:bg-blue-600 transition">
                Započnite!
            </button>
        </div>
    );
};

export default MainPage;