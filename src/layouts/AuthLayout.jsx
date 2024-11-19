import React from 'react';
import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
                <h1 className="text-2xl font-semibold text-center mb-4">Welcome to Pathfinder</h1>
     
                <Outlet />
            </div>
        </div>
    );
};

export default AuthLayout;
