import React from 'react';
import styles from './header.module.scss';
import logo from 'logo_without_back.svg';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav>
            <Link to="tel:+375441001010" className={styles.title}>Телефон: +375 (44) 100 10 10</Link>
            <Link to="/"><h1><img src={logo}></img></h1></Link>
            <ul>
                <li>Новости</li>
                <li>О нас</li>
                <li>Контакты</li>
            </ul>
        </nav>
    )
}

export default Header;
