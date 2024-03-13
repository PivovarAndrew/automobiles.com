import React from 'react';
import styles from './header.module.scss';
import logo from 'logo_without_back.svg';

const Header = () => {
    return (
        <nav>
            <a href="tel:+375441001010" className={styles.title}>Телефон: +375 (44) 100 10 10</a>
            <a href="/"><h1><img src={logo}></img></h1></a>
            <ul>
                <li>Новости</li>
                <li>О нас</li>
                <li>Контакты</li>
            </ul>
        </nav>
    )
}

export default Header;
