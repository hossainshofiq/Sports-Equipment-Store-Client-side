import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const AllEquipments = () => {

    const equipments = useLoaderData();

    return (
        <div className='w-11/12 mx-auto my-10'>
            {/* All Sports Equipments:  {equipments.length} */}
            {/* <div className='lg:grid grid-cols-2 gap-5 my-5'>
                {
                    equipments.map(equipment => <AllEquipmentsList
                        key={equipment._id}
                        equipment={equipment}
                    ></AllEquipmentsList>)
                }
            </div> */}

            <div className='my-10'>
                <h2 className='text-3xl mb-5'>All Equipments: {equipments.length} </h2>

                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Category</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                equipments.map(equipment =>
                                    <tr key={equipment._id}>
                                        <th>1</th>
                                        <td>{equipment.item_name} </td>
                                        <td>{equipment.category_name} </td>
                                        <td>{equipment.price} </td>
                                        <td className=''>
                                            <Link to='/equipmentDetails'>
                                                <button className='btn bg-lime-500 text-white hover:bg-lime-600'>View Details </button>
                                            </Link>
                                        </td>
                                    </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>


        </div>
    );
};

export default AllEquipments;