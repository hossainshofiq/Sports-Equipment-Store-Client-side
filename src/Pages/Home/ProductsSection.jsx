import React from 'react';
import { useLoaderData } from 'react-router-dom';
import EquipmentCard from '../../components/EquipmentCard';
import SportsCategories from './SportsCategories';
import WhyChoseUs from './WhyChoseUs';

import CustomerReviews from './CustomerReviews';

const ProductsSection = () => {

    const equipments = useLoaderData();

    return (
        <div className={`w-11/12 mx-auto mt-5 mb-10 `}>
            
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

            <SportsCategories></SportsCategories>

            <WhyChoseUs></WhyChoseUs>

            <CustomerReviews></CustomerReviews>
        </div>
    );
};

export default ProductsSection;