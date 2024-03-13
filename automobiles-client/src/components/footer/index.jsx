import React from 'react';
import styles from './footer.module.scss';
import logo from 'logo.svg';

const Footer = () => {
    return (
        <footer>
            <div className={styles.container}>
                <section>
                    <img src={logo}></img>
                    <div className={styles.logoTitle}>automobiles.com</div>
                </section>
                
            </div>
            Copyright @ Automobiles.com &emsp; | &emsp;  All rights reserved 2024
        </footer>
    )
}

export default Footer;
