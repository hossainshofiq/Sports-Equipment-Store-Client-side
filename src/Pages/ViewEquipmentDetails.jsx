import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
// { singleEquipment }

const ViewEquipmentDetails = () => {

    const equipments = useLoaderData();
    console.log(equipments);

    return (

        <div className="card card-compact bg-base-100 w-3/4 container mx-auto my-10 border p-5">
            <figure>
                <img
                    className='w-52'
                    src={equipments?.image}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{equipments?.item_name} </h2>
                <p>{equipments?.category_name} </p>
                <p>{equipments?.description} </p>
                <p>{equipments?.price} </p>
                <p>{equipments?.processing_time} </p>
                <p>{equipments?.stock_status} </p>
                
                <div className='flex justify-between'> 
                <Link to='/'><button className='btn bg-green-500 text-white'><BiLeftArrowAlt></BiLeftArrowAlt> Back to Home</button></Link>
                <button className='btn bg-blue-900 text-white'>Add to My Equipment List <BiRightArrowAlt></BiRightArrowAlt></button>
                </div>

            </div>
        </div>
    );
};
// image, item_name, category_name, description, price, rating, customization, processing_time, stock_status, user_email, user_name
export default ViewEquipmentDetails;