import React from 'react';
import styles from './footer.module.scss';
import logo from 'logo.svg';
import { FaYoutube, FaTelegram, FaTiktok, FaInstagram } from "react-icons/fa6";

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
                    <h3>Наши соц сети</h3>
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
                    <h3>Контакты</h3>
                    <ul>
                        <li>
                            <a href="automobiles@gmail.com">
                                Почтовый адрес: automobiles@gmail.com
                            </a>
                        </li>
                        <li>
                            <a href="tel:+375441001010">Телефон: +375 (44) 100 10 10</a>
                        </li>
                        <li>
                            <a href="automobiles@gmail.com">
                                Физический адрес: г. Москва, проспект Пушкина 15, офис 451
                            </a>
                        </li>
                    </ul>
                </section>
            </div>
            Copyright @ Automobiles.com &emsp; | &emsp;  All rights reserved 2024
        </footer>
    )
}

export default Footer;
