import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { BiLeftArrowAlt } from 'react-icons/bi';

const ViewEquipmentDetails = () => {
    const equipments = useLoaderData();

    return (
        <div className="container mx-auto mt-20 mb-10">
            <div className="grid lg:grid-cols-2 gap-10 items-center border p-5 shadow-lg rounded-lg">
                <div>
                    <div className="relative mb-5">
                        <img
                            className="w-full h-[400px] object-cover rounded-lg"
                            src={equipments?.image}
                            alt={equipments?.item_name}
                        />
                    </div>

                    <div className='flex gap-3'>
                        <img
                            className="w-20 h-20 rounded-lg cursor-pointer border"
                            src={equipments?.image}
                            alt="Thumbnail 2"
                        />
                        <img
                            className="w-20 h-20 rounded-lg cursor-pointer border"
                            src={equipments?.image}
                            alt="Thumbnail 3"
                        />
                    </div>
                </div>

                <div>
                    <h2 className="text-2xl font-bold mb-3">{equipments?.item_name}</h2>
                    <p className="text-lg font-semibold text-gray-600 mb-4">${equipments?.price}</p>
                    <p className="text-gray-700 mb-6">{equipments?.description}</p>

                    <div className="mt-6">
                        <p className="text-sm text-gray-500">
                            <span className="font-semibold">Categories:</span> {equipments?.category_name || "N/A"}
                        </p>

                        <p className='text-sm text-gray-500'>
                            <span className='font-semibold'>Processing Time:</span> {equipments?.processing_time || "N/A"}
                        </p>
                        <p className='text-sm text-gray-500'>
                            <span className='font-semibold'>Processing Time:</span> {equipments?.stock_status || "N/A"}
                        </p>

                        <p className="text-sm text-gray-500">
                            <span className="font-semibold">Tags:</span> Sports Gear
                        </p>
                    </div>
                    <div className="flex items-center gap-4">
                        <Link to="/" className="mt-5 inline-block bg-gray-800 text-white px-5 py-2 rounded-lg">
                            <BiLeftArrowAlt className="inline-block mr-2" /> Back to Home
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewEquipmentDetails;