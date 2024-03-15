import React from 'react';
import styles from './carousel.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import image1 from "./image1.jpeg";
import image2 from "./image2.jpg";
import image3 from "./image3.jpg";

import 'swiper/css';
import 'swiper/css/pagination';

const Carousel = () => {
    return (
        <div className={styles.container}>
            <Swiper
                modules={[Pagination, Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                pagination={{ clickable: true }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                <SwiperSlide className={styles.slide}>
                    <img src={image2} />
                    <section>
                        <p>Покупка автомобиля является долгим и трудоёмким процессом</p>
                    </section>
                </SwiperSlide>
                <SwiperSlide className={styles.slide}>
                    <img src={image1} />
                    <section>
                        <p>Доверьте всю работу по пригону и оформлению команде трудолюбивых профессионалов</p>
                    </section>
                </SwiperSlide>
                <SwiperSlide className={styles.slide}>
                    <img src={image3} />
                    <section>
                        <p>Удовлетворение потребностей клиентов является нашей главной задачей</p>
                    </section>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Carousel;
