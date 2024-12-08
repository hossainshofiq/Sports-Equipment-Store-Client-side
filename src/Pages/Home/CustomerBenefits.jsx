import React from "react";

const CustomerBenefits = () => {
    return (
        <section className="bg-gray-100 py-16">
            <div className="w-11/12 mx-auto text-center">

                <header className="mb-12">
                    <p className="text-gray-500 uppercase text-sm font-semibold">Exclusive Offers</p>
                    <h2 className="text-3xl font-bold text-gray-800">Sports Equipment Benefits</h2>
                </header>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Card 1 */}
                    <div className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition-shadow">
                        <img
                            src="https://via.placeholder.com/100" // Replace with actual icon URL
                            alt="HIGH-QUALITY EQUIPMENT"
                            className="w-16 h-16 mx-auto mb-4"
                        />
                        <h3 className="text-lg font-bold text-gray-800">HIGH-QUALITY EQUIPMENT</h3>
                        <p className="text-gray-600 mt-2">Durable and reliable gear for all sports</p>
                    </div>

                    {/* Card 1 */}
                    <div className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition-shadow">
                        <img
                            src="https://via.placeholder.com/100" // Replace with actual icon URL
                            alt="AFFORDABLE PRICES"
                            className="w-16 h-16 mx-auto mb-4"
                        />
                        <h3 className="text-lg font-bold text-gray-800">AFFORDABLE PRICES</h3>
                        <p className="text-gray-600 mt-2">Best deals on top-notch equipment</p>
                    </div>

                    {/* Card 1 */}
                    <div className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition-shadow">
                        <img
                            src="https://via.placeholder.com/100" // Replace with actual icon URL
                            alt="FREE SHIPPING"
                            className="w-16 h-16 mx-auto mb-4"
                        />
                        <h3 className="text-lg font-bold text-gray-800">FREE SHIPPING</h3>
                        <p className="text-gray-600 mt-2">On orders over $50</p>
                    </div>

                    {/* Card 1 */}
                    <div className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition-shadow">
                        <img
                            src="https://via.placeholder.com/100" // Replace with actual icon URL
                            alt="EXCLUSIVE DISCOUNTS"
                            className="w-16 h-16 mx-auto mb-4"
                        />
                        <h3 className="text-lg font-bold text-gray-800">EXCLUSIVE DISCOUNTS</h3>
                        <p className="text-gray-600 mt-2">Save more with member-only deals</p>
                    </div>

                    {/* Card 1 */}
                    <div className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition-shadow">
                        <img
                            src="https://via.placeholder.com/100" // Replace with actual icon URL
                            alt="EASY RETURNS"
                            className="w-16 h-16 mx-auto mb-4"
                        />
                        <h3 className="text-lg font-bold text-gray-800">EASY RETURNS</h3>
                        <p className="text-gray-600 mt-2">Hassle-free return policy</p>
                    </div>

                    {/* Card 1 */}
                    <div className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition-shadow">
                        <img
                            src="https://via.placeholder.com/100" // Replace with actual icon URL
                            alt="24/7 CUSTOMER SUPPORT"
                            className="w-16 h-16 mx-auto mb-4"
                        />
                        <h3 className="text-lg font-bold text-gray-800">24/7 CUSTOMER SUPPORT</h3>
                        <p className="text-gray-600 mt-2">We're here to help anytime</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CustomerBenefits;