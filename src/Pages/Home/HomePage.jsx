import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import EquipmentCard from '../../components/EquipmentCard';

const HomePage = () => {

    const equipments = useLoaderData();

    //
    const loadedCategories = useLoaderData();
    const [categories, setCategories] = useState(loadedCategories);

    return (
        <div className='w-11/12 mx-auto my-10'>

            <div className='my-10'>
                Sports Categories: {categories.length}

                <div className='flex gap-5'>
                    {
                        categories.map(category => <button className='btn'>{category.
                            category_name} </button>)
                    }
                </div>
            </div>

            Home Page: {equipments.length}
            <div className='lg:grid grid-cols-2 gap-5 my-5'>
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

export default HomePage;