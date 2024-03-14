import React from 'react';
import styles from './home.module.scss';
import Carousel from './carousel';
import image4 from './image4.jpg'
import image5 from './image5.jpg'
import image6 from './image6.jpg'

const Home = () => {
    return (
        <div className={styles.container}>
            <div className={styles.hero}>
                <h1>Поддержаные авто из Германии</h1>
                <h1>Быстро и качественно</h1>
            </div>

            <Carousel />

            <div className={styles.infoBlock}>
                <img src={image6} />

                <div className={styles.info}>
                    <div className={styles.name}>
                        <a href="#">Для начала</a>
                    </div>

                    <p>Процедура пригона</p>
                    <p>Автомобиля из Германии</p>

                    <button type="button">Как происходит процесс от и до?</button>
                </div>
            </div>


            <section>
                <p>Automobiles.com работает на территории России, Беларуси, Казахстана и Узбекистана</p>
            </section>

            <div className={styles.infoBlock}>
                <img src={image5} />

                <div className={styles.info}>
                    <div className={styles.name}>
                        <a href="#">О главном</a>
                    </div>

                    <p>Условия и гарантии</p>
                    <p>Которые вы получаете при работе с нами</p>

                    <button type="button">Подробнее</button>
                </div>
            </div>

            <section className={styles.yellow}>
                <p>Вы можете рассчитать стоимость предполагаемого автомобился с помощью нашего калькулятора</p>
            </section>

            <button type="button">Рассчитать стоимость</button>

            <div className={styles.infoBlock}>
                <img src={image4} />

                <div className={styles.info}>
                    <div className={styles.name}>
                        <a href="#">Правовая база</a>
                    </div>

                    <p>Наши юристы предоставляют полную правовую поддержку</p>
                    <p>На протяжении всей работы с клиентом</p>

                    <button type="button">Подробнее</button>
                </div>
            </div>

            <section className={styles.green}>
                <p>Также вы можете найти машину по заданным параметрам</p>
            </section>

            <button type="button">Выполнить поиск</button>
        </div>
    )
}

export default Home;
