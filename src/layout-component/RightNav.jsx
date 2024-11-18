import React from 'react';
import SocialLogin from '../components/SocialLogin';
import FindUs from '../components/FindUs';

const RightNav = () => {
    return (
        <div className='space-y-5'>
          <SocialLogin></SocialLogin>
          <FindUs></FindUs>
        </div>
    );
};

export default RightNav;