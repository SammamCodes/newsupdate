import React from 'react';
import { Link } from 'react-router-dom';
import { LuUserCircle } from "react-icons/lu";

const Navbar = () => {
    return (
        <div className='flex justify-between items-center p-4 bg-gray-100'>
            {/* Website Name */}
            <div className="logo text-xl font-bold">
       PATHFINDER
            </div>
            {/* Navigation Links */}
            <div className="nav space-x-5">
                <Link to="/" >Home</Link>
                <Link to="/carrier" >Carrier</Link>
                <Link to="/about" >About </Link>
            </div>
            {/* User Section */}
            <div className="login flex gap-2 items-center">
                <LuUserCircle size={32} />
                <button className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-none shadow-md hover:bg-blue-700 transition duration-300">
                    Login
                </button>
            </div>
        </div>
    );
};

export default Navbar;
