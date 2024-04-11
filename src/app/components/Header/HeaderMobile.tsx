 import React from 'react'
import styles from "./HeaderMobile.module.css"
import ImageComponent from '../ImageComponent/ImageComponent'
import logo from "./../../../../public/logo.svg"
import useWindowWidth from '@/app/hooks/useWindowWidth'
import Link from 'next/link'
 const HeaderMobile = () => {
    
  return (
    <div className={styles.main}>
      <Link href="/">
      <ImageComponent src={logo} alt='Header Logo' className={styles.img} priority={true}/>

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