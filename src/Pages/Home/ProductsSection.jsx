import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import EquipmentCard from '../../components/EquipmentCard';
import SportsCategories from './SportsCategories';
import WhyChoseUs from './WhyChoseUs';
import CustomerBenefits from './CustomerBenefits';

const ProductsSection = () => {

    const equipments = useLoaderData();

    const [theme, setTheme] = useState("light");

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme") || "light";
        setTheme(savedTheme);
        document.documentElement.className = savedTheme;
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        document.documentElement.className = newTheme;
        localStorage.setItem("theme", newTheme);
    };

    return (
        <div className={`w-11/12 mx-auto mt-5 mb-10 ${theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"}`}>
            <div className="flex justify-end pt-5 pr-5">
                <button
                    onClick={toggleTheme}
                    className={`btn ${theme === "light" ? "bg-black hover:bg-gray-800 text-white" : "bg-gray-800 text-white hover:bg-gray-400"}`}
                >
                    {theme === "light" ? "Dark Mode" : "Light Mode"}
                </button>
            </div>

            <SportsCategories></SportsCategories>

            <div>
                <h2 className='text-3xl font-bold text-center mb-3'>All Products</h2>
                <p className='text-center'>The All Products showcases a complete list of all available products in the system. It provides detailed information about each product, such as name, category, price, description, rating, and stock status. This feature is designed to help users browse, search, and manage products effectively in one place.</p>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5 my-8'>
                {
                    equipments.map(singleEquipment => <EquipmentCard
                        key={singleEquipment._id}
                        singleEquipment={singleEquipment}
                    ></EquipmentCard>)
                }
            </div>

            <WhyChoseUs></WhyChoseUs>

            <CustomerBenefits></CustomerBenefits>
        </div>
    );
};

export default ProductsSection;