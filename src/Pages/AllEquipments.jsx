import React from 'react';
import { useLoaderData } from 'react-router-dom';
import EquipmentCard from '../components/EquipmentCard';

const AllEquipments = () => {
    const equipments = useLoaderData();
    return (
        <div className='my-10'>
            All Sports Equipments:  {equipments.length}

            {
                equipments.map(singleEquipment => <EquipmentCard
                key={singleEquipment._id}
                singleEquipment={singleEquipment}
                ></EquipmentCard>)
            }
        </div>
    );
};

export default AllEquipments;