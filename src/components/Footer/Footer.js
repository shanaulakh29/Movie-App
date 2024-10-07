import React from 'react';
import style from './Footer.module.css'
const Footer = () => {
    return (
      <>
      <div className={style.footer}>
        <div className={style.foothead}>Movie App </div>
        <div className={style.footbody}>@2024, Movie,Inc. or its affiliates</div>
        </div>
        </>
    );
};

export default Footer;