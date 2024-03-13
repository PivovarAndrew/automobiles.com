import React from 'react';
import styles from './home.module.scss';
import Carousel from './carousel';
import image4 from './image4.jpg'

const Home = () => {
    return (
        <div className={styles.container}>
            <div className={styles.hero}>
                <h1>Поддержаные авто из Германии</h1>
                <h1>Быстро и качественно</h1>
            </div>

            <Carousel />

            <div className={styles.infoBlock}>
                <img src={image4} />

                <div className={styles.info}>
                    <div className={styles.name}>
                        <a href="#">Для начала</a>
                    </div>

                    <p>Процедура пригона</p>
                    <p>Автомобиля из Германии</p>

                    <button type="button">Как происходит процесс от и до?</button>
                </div>
            </div>
        </div>
    )
}

export default Home;
