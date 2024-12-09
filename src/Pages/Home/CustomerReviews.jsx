import React from "react";

const CustomerReviews = () => {
    return (
        <section className="bg-white py-16">
            <div className="w-11/12 mx-auto text-center">

                <header className="mb-12">
                    <p className="text-green-500 uppercase text-sm font-semibold">Testimonials</p>
                    <h2 className="text-3xl font-bold text-gray-800">What Our Customers Say</h2>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-blue-300 shadow-lg rounded-lg p-6 text-left transition-transform transform hover:-translate-y-2">
                        <p className="text-gray-700 italic">
                            "The quality of the equipment is unmatched. I've never felt more confident in my game."
                        </p>
                        <div className="mt-4 flex items-center">
                            <img
                                src='https://i.ibb.co.com/SyJ2S2J/team-1.jpg'
                                alt="Customer 1"
                                className="w-12 h-12 rounded-full mr-4"
                            />
                            <div>
                                <h4 className="text-sm font-bold text-gray-800">John Doe</h4>
                                <p className="text-xs text-gray-600">Professional Athlete</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-blue-300 shadow-lg rounded-lg p-6 text-left transition-transform transform hover:-translate-y-2">
                        <p className="text-gray-700 italic">
                            "Fast shipping and amazing customer service. I'll definitely order again!"
                        </p>
                        <div className="mt-4 flex items-center">
                            <img
                                src="https://i.ibb.co.com/wrGY5DV/team2.webp"
                                alt="Customer 2"
                                className="w-12 h-12 rounded-full mr-4"
                            />
                            <div>
                                <h4 className="text-sm font-bold text-gray-800">Jane Smith</h4>
                                <p className="text-xs text-gray-600">Fitness Enthusiast</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-blue-300 shadow-lg rounded-lg p-6 text-left transition-transform transform hover:-translate-y-2">
                        <p className="text-gray-700 italic">
                            "The prices are great, and the gear is top-notch. I highly recommend this store!"
                        </p>
                        <div className="mt-4 flex items-center">
                            <img
                                src="https://i.ibb.co.com/rt65nT1/team-3.jpg"
                                alt="Customer 3"
                                className="w-12 h-12 rounded-full mr-4"
                            />
                            <div>
                                <h4 className="text-sm font-bold text-gray-800">Mike Brown</h4>
                                <p className="text-xs text-gray-600">Coach</p>
                            </div>
                        </div>
                    </div>
                </div>

                <button className="mt-8 px-6 py-3 bg-green-500 text-white text-lg font-semibold rounded hover:bg-green-600 transition">
                    Read More Reviews
                </button>
            </div>
        </section>
    );
};

export default CustomerReviews;
