import React from 'react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import slide3 from '../../assets/Football2.jpg';
import slide2 from '../../assets/fitness1.jpg';
import slide1 from '../../assets/tennis_bat4.png';

const Slider = () => {
    return (
        <div className="mt-[65px] lg:mt-[68px]">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000 }}
                loop={true}
            >
                {/* Slide 1: Tennis */}
                <SwiperSlide
                    className="h-[80vh] lg:h-[90vh] bg-center bg-cover"
                    style={{
                        backgroundImage: `url(${slide1})`,
                    }}
                >
                    <div className="flex items-center h-full text-white bg-black bg-opacity-50">
                        <div className="space-y-4 px-6 md:px-12 lg:px-20 py-52 md:py-52 lg:py-44 max-w-[500px]">
                            <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold">Master Your Tennis Game</h1>
                            <p className="text-sm md:text-base lg:text-lg">
                                Find the best tennis rackets and gear to improve your performance on the court.
                            </p>
                            <button className="btn text-white bg-green-500 hover:bg-green-600">
                                Shop Tennis Gear
                            </button>
                        </div>
                    </div>
                </SwiperSlide>

                {/* Slide 2: Fitness */}
                <SwiperSlide
                    className="h-[80vh] lg:h-[90vh] bg-center bg-cover"
                    style={{
                        backgroundImage: `url(${slide2})`,
                    }}
                >
                    <div className="flex items-center h-full text-white bg-black bg-opacity-50">
                        <div className="space-y-4 px-6 md:px-12 lg:px-20 py-52 max-w-[500px]">
                            <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold">Elevate Your Fitness</h1>
                            <p className="text-sm md:text-base lg:text-lg">
                                Achieve your fitness goals with top-quality equipment and accessories.
                            </p>
                            <button className="btn text-white bg-green-500 hover:bg-green-600">
                                Explore Fitness Gear
                            </button>
                        </div>
                    </div>
                </SwiperSlide>

                {/* Slide 3: Football */}
                <SwiperSlide
                    className="h-[80vh] lg:h-[90vh] bg-center bg-cover"
                    style={{
                        backgroundImage: `url(${slide3})`,
                    }}
                >
                    <div className="flex items-center h-full text-white bg-black bg-opacity-50">
                        <div className="space-y-4 px-6 md:px-12 lg:px-20 py-52 max-w-[500px]">
                            <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold">Rule the Football Field</h1>
                            <p className="text-sm md:text-base lg:text-lg">
                                Gear up with premium football equipment to dominate every match.
                            </p>
                            <button className="btn text-white bg-green-500 hover:bg-green-600">
                                Browse Football Gear
                            </button>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slider;

