'use client '
import React, { useEffect, useState } from 'react'
import { HeaderDesktop } from './HeaderDesktop';
import HeaderMobile from './HeaderMobile';

const Header = () => {
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1024);
        };

        // Initial check
        handleResize();

        // Event listener for window resize
        window.addEventListener('resize', handleResize);

        // Cleanup function to remove event listener
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return isMobile ? <HeaderMobile /> : <HeaderDesktop />;

}

export default Header