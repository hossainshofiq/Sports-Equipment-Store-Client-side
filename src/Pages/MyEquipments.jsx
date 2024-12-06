import React, { useState } from 'react';
import { FaPen } from 'react-icons/fa';
import { MdDeleteOutline } from 'react-icons/md';
import { Link, useLoaderData } from 'react-router-dom';

const MyEquipments = () => {
    const myEquipments = useLoaderData();
    const [users, setUsers] = useState(myEquipments);

    const handleEquipmentDelete = (_id) => {
        const updatedUsers = users.filter((equipment) => equipment._id !== _id);
        setUsers(updatedUsers);
    };

    return (
        <div className='w-11/12 mx-auto my-10'>
            <div className='text-3xl font-bold text-center mb-5'>My Equipment List: {users.length}</div>

            <div className="overflow-x-auto border">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Photo</th>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((equipment, index) => (
                                <tr key={equipment._id}>
                                    <th>{index + 1}</th>
                                    <td><img className='w-10 h-10 rounded-full' src={equipment.image} alt="" /></td>
                                    <td>{equipment.item_name}</td>
                                    <td>{equipment.category_name}</td>
                                    <td>{equipment.price}</td>
                                    <td className='flex gap-2'>
                                        <button className='btn bg-lime-500 text-white hover:bg-lime-600'>
                                            <FaPen />
                                        </button>
                                        <button 
                                            onClick={() => handleEquipmentDelete(equipment._id)} 
                                            className='btn bg-red-500 text-white hover:bg-red-600'
                                        >
                                            <MdDeleteOutline />
                                        </button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyEquipments;
