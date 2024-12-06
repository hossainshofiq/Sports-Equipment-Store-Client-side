import React, { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';

const SportsCategories = () => {
    const loadedCategories = useLoaderData();
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        if (loadedCategories) {
            setCategories(loadedCategories);
        }
    }, [loadedCategories]);

    return (
        <div className="w-11/12 mx-auto my-10">
            <div className="text-3xl font-bold text-center mb-8">Sports Categories</div>

            {/* Conditional rendering */}
            {categories.length > 0 ? (
                <div className="flex flex-wrap gap-4 justify-center">
                    {categories.map((category, index) => (
                        <button
                            key={index}
                            className="px-6 py-2 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600"
                        >
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
