 import React from 'react'
import styles from "./HeaderMobile.module.css"
import logo from "./../../../../public/logo.svg"
import Image from 'next/image'
import Link from 'next/link'
 const HeaderMobile = () => {
    
  return (
    <div className={styles.main}>
      <Link href="/">
      <Image src={logo} alt='Header Logo' className={styles.img} />

      </Link>

        <div className={styles.menu}>
            {[0,1,2].map((item,key)=>{
               return   <div className={styles.menuItem} key={key}></div>
            })}
        </div>
    </div>
  )
}

export default HeaderMobile