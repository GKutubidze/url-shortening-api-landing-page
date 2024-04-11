import React from 'react'
import styles from "./Footer.module.css"
import Boost from './Boost'
import logo from "../../../../public/logo.svg"
import Image from 'next/image'
import ImageComponent from '../ImageComponent/ImageComponent'
const Footer = () => {
  return (
    <div className={styles.main}>
        <Boost/>
        <div className={styles.navigation}>
          <Image src={logo} alt="logo" className={styles.img}/>

          <div className={styles.listContainer}>
          {Data.map((category, categoryIndex) => (
            <div key={categoryIndex} className={styles.container}>
              <p className={styles.title}>{category.title}</p>
              <ul className={styles.list}>
                {category.items.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
          </div>


          <div className={styles.socialMedia}>
            {
              SocialIcons.map((item,key)=>{
                return(
                  <ImageComponent src={item.path} key={key} alt={item.name} priority={true}/>
                )
              })
            }
          </div>
        </div>
    </div>
  )
}

export default Footer

const Data=[
  {
    title:'features',
    items:["Link Shortening","Branded Links","Analytics"]
  },
  {
    title:'Resources',
    items:["Blog","Developers","Support"]
  },
  {
    title:'Company',
    items:["About","Our Team","Careers","Contact"]
  }
]

const SocialIcons=[
  {
    name:"facebook",
    path:"/icon-facebook.svg"
  },
  {
    name:"twitter",
    path:"/icon-twitter.svg"
  },
 
  {
    name:"pinterest",
    path:"/icon-pinterest.svg"
  },
  {
    name:"instagram",
    path:"/icon-instagram.svg"
  }
]