import React from 'react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Slider = () => {
    return (
        <div className="my-5 p-2 md:p-3 lg:p-5 bg-blue-400 rounded-lg w-11/12 mx-auto">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000 }}
                loop={true}
            >

                <SwiperSlide>
                    <img
                        src="https://img.mlbstatic.com/opprops-images/image/upload/t_16x9/w_2208/opprops/n1a6ezl2vikycdb4nvzl.png"
                        alt="Slide 1"
                        className="w-full rounded-lg"
                    />
                </SwiperSlide>

                <SwiperSlide>
                    <img
                        src="https://c1.wallpaperflare.com/preview/23/303/605/badminton-shuttle-sport-bat.jpg"
                        alt="Slide 2"
                        className="w-full rounded-lg"
                    />
                </SwiperSlide>

                <SwiperSlide>
                    <img
                        src="https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg"
                        alt="Slide 3"
                        className="w-full rounded-lg"
                    />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slider;