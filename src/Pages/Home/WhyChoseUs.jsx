import React from 'react';
import animation from '../../../src/LottieAnimation/animation.json'
import Lottie from 'lottie-react';

const WhyChoseUs = () => {
    return (
        <section className="text-center py-10 px-3">

            <header className="mb-8">
                <h2 className="text-green-500 text-lg uppercase font-semibold">Benefits</h2>
                <p className="text-green-500 text-3xl font-bold mt-2">Why Choose Us for Your Sports Gear</p>
            </header>

            <div className="flex flex-col md:flex-row lg:flex-row items-center justify-center gap-5">
                {/* Left Section */}
                <div className="space-y-6 md:flex-1">
                    <div className="flex items-start">
                        <span className="text-green-500 text-2xl font-bold mr-4">01</span>
                        <div>
                            <h4 className="text-lg font-bold">Premium Quality Equipment</h4>
                            <p className="text-gray-600">
                                We offer top-notch sports gear from the best brands, ensuring you get quality and performance in every product.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start">
                        <span className="text-green-500 text-2xl font-bold mr-4">02</span>
                        <div>
                            <h4 className="text-lg font-bold">Fast & Free Shipping</h4>
                            <p className="text-gray-600">
                                Enjoy fast and free shipping on all orders, ensuring your gear arrives on time, every time.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Center lottie animation Section */}
                <div className="flex items-center justify-center md:flex-1 relative transition-transform transform hover:-translate-y-2">
                    <Lottie className='border rounded-full shadow-xl w-80 h-80' animationData={animation} loop={true}></Lottie>

                </div>

                {/* Right Section */}
                <div className="space-y-6 md:flex-1">
                    <div className="flex items-start">
                        <span className="text-green-500 text-2xl font-bold mr-4">03</span>
                        <div>
                            <h4 className="text-lg font-bold">30-Days Money Back Guarantee</h4>
                            <p className="text-gray-600">
                                We stand by our products. If you're not satisfied, return them within 30 days for a full refund.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start">
                        <span className="text-green-500 text-2xl font-bold mr-4">04</span>
                        <div>
                            <h4 className="text-lg font-bold">Expert Customer Support</h4>
                            <p className="text-gray-600">
                                Our team of sports enthusiasts is always ready to assist you with expert advice and recommendations.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <button className="mt-8 px-6 py-3 bg-green-500 text-white text-lg font-semibold rounded hover:bg-green-600 transition">
                Learn More About Our Products
            </button>
        </section>
    );
};

export default WhyChoseUs;
