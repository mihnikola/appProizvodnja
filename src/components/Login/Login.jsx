import React, { useState } from 'react';

const Login = ({ onLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onLogin({ email, password });
    };

    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="max-w-md mx-auto p-6 bg-gray-200 rounded-lg shadow-neumorphism">
                <h2 className="text-2xl font-bold mb-4 text-gray-700">Login</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full p-4 border-0 bg-gray-300 rounded-lg shadow-inner mb-4"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="w-full p-4 border-0 bg-gray-300 rounded-lg shadow-inner mb-4"
                    />
                    <button
                        type="submit"
                        className="w-full bg-gray-300 text-gray-700 font-bold py-2 rounded-lg shadow-inner hover:bg-gray-400 transition"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
