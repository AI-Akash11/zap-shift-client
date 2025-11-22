import React from 'react';

import logo from '../../assets/logo.png'
import { Link } from 'react-router';

const Logo = () => {
    return (
        <Link to={'/'} className='relative'>
            <img className='w-[25px]' src={logo} alt="logo" />
            <p className='text-2xl font-semibold absolute top-[8px] left-[16px]'>ZapShift</p>
        </Link>
    );
};

export default Logo;