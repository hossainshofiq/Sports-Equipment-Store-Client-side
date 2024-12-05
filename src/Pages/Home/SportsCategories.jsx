import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Navbar from '../../components/Navbar';

const SportsCategories = () => {
    const loadedCategories = useLoaderData();
    const [categories, setCategories] = useState(loadedCategories);
    return (
        <>
        <div className='w-11/12 mx-auto my-10'>
            Sports Categories: {categories.length}

            <div className='flex gap5'>
                {
                    categories.map(category => <button className='btn'>{category.
                        category_name} </button>)
                }
            </div>
        </div>

        {/* {
        path: '/categories',
        element: <SportsCategories></SportsCategories>,
        loader: () => fetch('http://localhost:5000/categories')
    }, */}

        </>
    );
};

export default SportsCategories;