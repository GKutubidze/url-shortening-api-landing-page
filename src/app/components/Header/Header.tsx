'use client'
import React from 'react'
import { HeaderDesktop } from './HeaderDesktop';
import HeaderMobile from './HeaderMobile';

const Header = () => {

    return (
        window.innerWidth<1024 ? <HeaderMobile/> : <HeaderDesktop/> 
    )
}

export default Header