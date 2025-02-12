import React, { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';

const SportsCategories = () => {
    const [categories, setCategories] = useState([]);
    useEffect (()=> {
        fetch ('https://sports-equipment-store-server.vercel.app/categories')
        .then (res=> res.json())
        .then (data=> setCategories (data));
    }, [])

    return (
        <div className="w-11/12 mx-auto my-10">
            <div className='mb-5'>
                <h2 className="text-4xl font-bold text-center mb-3">Sports Categories </h2>
                <p className='text-center'>Discover a wide range of sports categories tailored to your passion. Gear up with the best to elevate your game</p>
            </div>

            {categories.length > 0 ? (
                <div className="flex flex-wrap gap-4 justify-center">
                    {categories.map((category, index) => (
                        <button
                            key={index}
                            className="px-6 py-2 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600 transition-transform transform hover:-translate-y-2">
                            {category.category_name}
                        </button>
                    ))}
                </div>
            ) : (
                <p className="text-center text-gray-500">No categories available</p>
            )}
        </div>
    );
};

export default SportsCategories;
