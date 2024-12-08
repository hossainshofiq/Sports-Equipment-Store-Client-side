import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const AllEquipments = () => {
    const equipments = useLoaderData();

    const handleViewDetails = (_id) => {
        console.log(_id);
    };

    return (
        <div className='w-11/12 mx-auto my-10'>
            <div className='my-10'>

                <div className='mb-10 text-center'>
                    <h1 className='text-3xl font-bold mb-3'>All Sports Equipments : {equipments.length}</h1>
                    <p>The All Equipments provides an overview of all items added to the system. It displays a comprehensive list of equipment, including their details such as name, category, price, rating, stock status, and more. This feature helps users view, manage, and track the inventory efficiently in one centralized location.</p>
                </div>

                <div className='flex justify-end mb-5'>
                    <button className='btn btn-success hover:bg-black text-white'>Sort By Price</button>
                </div>

                <div className="overflow-x-auto border bg-gray-100 rounded-lg">
                    <table className="table w-full bg-white shadow-md rounded-lg">
                        {/* Table head */}
                        <thead className="bg-blue-500 text-white">
                            <tr>
                                <th></th>
                                <th>Photo</th>
                                <th>Name</th>
                                <th>Category</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-800">
                            {equipments.map((equipment, index) => (
                                <tr key={equipment._id} className="hover:bg-gray-100">
                                    <th>{index + 1}</th>
                                    <td>
                                        <img
                                            className='w-10 h-10 object-cover rounded-full'
                                            src={equipment.image}
                                            alt={equipment.item_name}
                                        />
                                    </td>
                                    <td>{equipment.item_name}</td>
                                    <td>{equipment.category_name}</td>
                                    <td>${equipment.price}</td>
                                    <td>
                                        <Link to={`/equipmentDetails/${equipment._id}`}>
                                            <button
                                                onClick={() => handleViewDetails(equipment._id)}
                                                className='btn bg-green-500 text-white hover:bg-green-600'
                                            >
                                                View Details
                                            </button>
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllEquipments;
