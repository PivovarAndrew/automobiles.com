import React from 'react';
import styles from './footer.module.scss';
import logo from 'logo.svg';
import { FaYoutube, FaTelegram, FaTiktok, FaInstagram } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer>
            <div className={styles.parralax}>
                <div className={styles.trees}></div>
                <div className={styles.secondplan}></div>
                <div className={styles.premierplan}></div>
                <div className={styles.voiture}></div>
            </div>
            <div className={styles.container}>
                <section>
                    <img src={logo}></img>
                    <div className={styles.logoTitle}>automobiles.com</div>
                </section>
                <section>
                    <h4>Наши соц сети</h4>
                    <ul >
                        <li>
                            <FaYoutube className={styles.youtube} />
                            <label>Youtube</label>
                        </li>
                        <li>
                            <FaTelegram className={styles.telegram} />
                            <label>Telegram</label>
                        </li>
                        <li>
                            <FaTiktok />
                            <label>Tik Tok</label>
                        </li>
                        <li>
                            <FaInstagram />
                            <label>Instagram</label>
                        </li>
                    </ul>
                </section>
                <section>
                    <h4>Контакты</h4>
                    <ul>
                        <li>
                            Почтовый адрес: automobiles@gmail.com
                        </li>
                        <li>
                            Телефон:&nbsp;
                            <Link to="tel:+375441001010">
                                +375 (44) 100 10 10
                            </Link>
                        </li>
                        <li>
                            Физический адрес: г. Москва, пр-т Пушкина 15, офис 451
                        </li>
                    </ul>
                </section>
            </div>
            Copyright @ Automobiles.com &emsp; | &emsp;  All rights reserved 2024
        </footer>
    )
}

export default Footer;
