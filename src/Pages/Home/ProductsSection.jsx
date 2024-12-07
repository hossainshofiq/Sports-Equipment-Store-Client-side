import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import EquipmentCard from '../../components/EquipmentCard';
import SportsCategories from './SportsCategories';

const ProductsSection = () => {

    const equipments = useLoaderData();

    return (
        <div className='w-11/12 mx-auto my-10'>

            <SportsCategories></SportsCategories>

            <div>
                <h2 className='text-3xl font-bold text-center mb-3'>All Products : {equipments.length}</h2>
                <p className='text-center'>The "All Products" section showcases a complete list of all available products in the system. It provides detailed information about each product, such as name, category, price, description, rating, and stock status. This feature is designed to help users browse, search, and manage products effectively in one place.</p>
            </div>
            <div className='lg:grid grid-cols-3 gap-5 my-8'>
                {
                    equipments.map(singleEquipment => <EquipmentCard
                        key={singleEquipment._id}
                        singleEquipment={singleEquipment}
                    ></EquipmentCard>)
                }
            </div>
        </div>
    );
};

export default ProductsSection;