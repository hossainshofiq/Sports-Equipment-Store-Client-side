import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import MyEquipmentListCard from '../components/MyEquipmentListCard';

const MyEquipments = () => {

    const { user } = useContext(AuthContext);

    const [equipments, setEquipments] = useState([]);


    useEffect(() => {
        fetch(`http://localhost:5000/myEquipments/${user.email}`)
            .then(res => res.json())
            .then(data => setEquipments(data));
    }, [equipments])

    return (
        <div className='w-11/12 mx-auto mt-24 mb-10'>
            <div className='mb-5'>
                <div className='text-4xl font-bold text-center pb-3'>My Equipment List : {equipments.length}</div>
                <p className='text-center'>Here is your add Equipments, displays a personalized list of equipment added by the user. It allows users to view, manage, and track the items they have submitted, including details such as name, category, price, and stock status. This feature ensures easy access to the user's own inventory or submissions.</p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {equipments.map((singleEquipment, idx) => <MyEquipmentListCard key={idx} singleEquipment={singleEquipment} ></MyEquipmentListCard>)}
            </div>
        </div>
    );
};

export default MyEquipments;
