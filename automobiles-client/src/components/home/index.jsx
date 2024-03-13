import React from 'react';
import styles from './home.module.scss';
import Carousel from './carousel';

const Home = () => {
    return (
        <div className={styles.container}>
            <div className={styles.hero}>
                <h1>Поддержаные авто из Германии</h1>
                <h1>Быстро и качественно</h1>
            </div>
            <Carousel />
        </div>
    )
}

export default Home;
