import React from 'react'
import { HeaderDesktop } from './HeaderDesktop';
import HeaderMobile from './HeaderMobile';
type Props={
    width:number;
}
const Header = ({width}:Props) => {
    
    return (
        width<1024 ? <HeaderMobile/> : <HeaderDesktop/> 
    )
}

export default Header