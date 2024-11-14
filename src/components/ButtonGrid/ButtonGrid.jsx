import React from 'react';

const ButtonGrid = ({ data, loadOperation }) => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Radno mesto</h2>
            <div className="grid grid-cols-2 gap-4 w-full max-w-xl">
                {data.map((item) => (
                    <button
                        key={item.id}
                        onClick={loadOperation}
                        className="bg-green-500 text-white font-bold text-2xl py-10 rounded-lg shadow-md hover:bg-green-700 transition"
                    >
                        {item.place_title}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default ButtonGrid;