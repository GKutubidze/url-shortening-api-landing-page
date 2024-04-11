'use client'
import React, { useState } from 'react'
import styles from "./HeaderMobile.module.css"
import logo from "./../../../../public/logo.svg"
import Image from 'next/image'
import Link from 'next/link'
import ConditionalNav from '../ConditionalNavbar/ConditionalNav'
 const HeaderMobile = () => {
    const [isOpen,setIsOpen]=useState<boolean>(false);
  return (
    <>
    <div className={styles.main}>
      <Link href="/">
      <Image src={logo} alt='Header Logo' className={styles.img} />

      </Link>

        <div className={styles.menu} onClick={()=>{
          setIsOpen(!isOpen);
        }}>
            {[0,1,2].map((item,key)=>{
               return   <div className={styles.menuItem} key={key}></div>
            })}
        </div>
    </div>
    {isOpen && <ConditionalNav/>}
    </>
  )
}

export default HeaderMobile