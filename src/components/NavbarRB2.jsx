import React from 'react'
import { BsFacebook, BsInstagram } from "react-icons/bs";
import styles from './NavbarRB2.module.css';

export default function NavbarRB2() {
  return (
    <div className={styles.navRb2Title}>
      <h1>
        <a href='https://www.facebook.com/El-Caballero-de-los-Mares-100164895745163/' target="_blank" rel='noreferrer'><BsFacebook className={styles.navRb2Icon}/></a>
      </h1>
      <h1 className={styles.navRb2TitleIn}>El caballero<br/>de los mares</h1>
      <h1>
        <a href='https://www.instagram.com/el_caballero_de_los_mares/?utm_medium=copy_link' target="_blank" rel='noreferrer'><BsInstagram className={styles.navRb2Icon}/></a>
      </h1>
    </div>
  )
}
