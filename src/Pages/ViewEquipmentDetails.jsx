import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
// { singleEquipment }

const ViewEquipmentDetails = () => {

    const equipments = useLoaderData();
    // console.log(equipments);
    const [theme, setTheme] = useState("light");

    return (

        <div className={`card card-compact w-11/12 lg:w-1/2 container mx-auto my-10 border p-5 ${theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-black"}`}>
            <figure>
                <img
                    className='w-96 rounded-xl'
                    src={equipments?.image}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title font-bold">{equipments?.item_name} </h2>
                <p className='font-semibold'>Category Name: <span className='font-normal'>{equipments?.category_name}</span> </p>
                <p className='font-semibold'>Description: <span className='font-normal'>{equipments?.description}</span> </p>
                <p className='font-semibold'>Price: $<span className='font-normal'>{equipments?.price}</span> </p>
                <p className='font-semibold'>Rating: $<span className='font-normal'>{equipments?.rating}</span> </p>
                <p className='font-semibold'>Procession Time: <span className='font-normal'>{equipments?.processing_time}</span> </p>
                <p className='font-semibold'>Stock Status: <span className='font-normal'>{equipments?.stock_status}</span> </p>

                <div className="divider"></div>

                <div className='flex justify-between'>
                    <Link to='/'><button className='btn bg-green-500 hover:bg-green-600 text-white'><BiLeftArrowAlt></BiLeftArrowAlt> Back to Home</button></Link>

                    {/* <button className='btn bg-blue-900 text-white'>Add to My Equipment List <BiRightArrowAlt></BiRightArrowAlt></button> */}
                </div>

            </div>
        </div>
    );
};
// image, item_name, category_name, description, price, rating, customization, processing_time, stock_status, user_email, user_name
export default ViewEquipmentDetails;