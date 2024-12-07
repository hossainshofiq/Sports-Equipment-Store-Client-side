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
               
                    <h1 className='text-3xl font-bold mb-10 flex justify-between items-center'>All Sports Equipments: {equipments.length}</h1>

                    <p>The "All Equipments" section provides an overview of all items added to the system. It displays a comprehensive list of equipment, including their details such as name, category, price, rating, stock status, and more. This feature helps users view, manage, and track the inventory efficiently in one centralized location.</p>

                    <button className='btn btn-success text-white'>Sort By Price</button>
            

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
                            {equipments.map((equipment, index) => (
                                <tr key={equipment._id}>
                                    <th>{index + 1}</th>
                                    <td>
                                        <img
                                            className='w-10 h-10 rounded-full'
                                            src={equipment.image}
                                            alt=""
                                        />
                                    </td>
                                    <td>{equipment.item_name}</td>
                                    <td>{equipment.category_name}</td>
                                    <td>{equipment.price}</td>
                                    <td>
                                        <Link to={`/equipmentDetails/${equipment._id}`}>
                                            <button
                                                onClick={() => handleViewDetails(equipment._id)}
                                                className='btn bg-lime-500 text-white hover:bg-lime-600'
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
