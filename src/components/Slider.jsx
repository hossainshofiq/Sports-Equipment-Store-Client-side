import React from 'react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Slider = () => {
    return (
        <div className="my-5 p-2 md:p-3 lg:p-4 rounded-lg">
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
                        src="https://www.groomassocies.com/wp-content/uploads/2023/11/AdobeStock_364906832.jpeg"
                        alt="Slide 1"
                        className="w-full rounded-lg"
                    />
                </SwiperSlide>

                <SwiperSlide>
                    <img
                        src="https://www.drramakantpsychologist.com/wp-content/uploads/2018/10/career-counselling-in-nagpu.jpg"
                        alt="Slide 2"
                        className="w-full rounded-lg"
                    />
                </SwiperSlide>

                <SwiperSlide>
                    <img
                        src="https://www.xwa.edu.sg/wp-content/uploads/Blog_university_careers_counselling2.jpg"
                        alt="Slide 3"
                        className="w-full rounded-lg"
                    />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slider;