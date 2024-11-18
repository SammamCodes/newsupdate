import moment from 'moment/moment';
import React from 'react';

const Header = () => {
    return (
        <div className="flex flex-col justify-center items-center gap-2 py-2 text-white">
            <div className='pathfinder'>
                <h1 className='text-3xl font-bold'>PATHFINDER</h1>
            </div>
            <h1 className='text-white'>Embark on the ultimate adventure and create memories that last a lifetime!</h1>
            <p className='font-semibold text-small'>{moment().format("dddd, MMMM Do YYYY, h:mm:ss a")}</p>
        </div>
    );
};

export default Header;
