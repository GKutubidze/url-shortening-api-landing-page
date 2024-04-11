'use client'
import useWindowWidth from '@/app/hooks/useWindowWidth'
import React from 'react'
import { HeaderDesktop } from './HeaderDesktop';
import HeaderMobile from './HeaderMobile';

const Header = () => {
    const width=useWindowWidth();
   
    return (
        width<1024 ? <HeaderMobile/> : <HeaderDesktop/> 
    )
}

export default Header