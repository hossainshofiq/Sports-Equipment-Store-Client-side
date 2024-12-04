import React from 'react';
import { useLoaderData } from 'react-router-dom';
import EquipmentCard from '../../components/EquipmentCard';

const HomePage = () => {

    const equipments = useLoaderData();
 
    return (
        <div className='my-10 w-11/12 mx-auto'>
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