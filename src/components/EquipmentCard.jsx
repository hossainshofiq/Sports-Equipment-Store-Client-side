import React from 'react';
import { FaEye, FaPen } from 'react-icons/fa';
import { MdDeleteOutline } from 'react-icons/md';
import { Link } from 'react-router-dom';

const EquipmentCard = ({ singleEquipment }) => {

    const {image, item_name, category_name, description, price, rating, customization, processing_time, stock_status, user_email, user_name} =singleEquipment;
    
    return (
        <div className="card card-side bg-[#F5F4F1] border mb-5">

            <figure>
                <img
                    src={image}
                    alt="coffeePhoto" />
            </figure>
            <div className='flex justify-between w-full items-center'>
                <div className="card-body flex flex-col text-left justify-between">
                    <h2 className="card-title text-center text-purple-700">{item_name} </h2>
                    <p>{category_name} </p>
                    <p>{description} </p>
                    <p>{price} </p>
                    <p>{rating} </p>
                    <p>{customization} </p>

                </div>
                <div>
                    <div className="join join-vertical space-y-5 pr-5">
                        <button className="btn text-xl rounded-lg bg-orange-300 text-white"><FaEye></FaEye> </button>
                        <Link className="btn text-xl rounded-lg bg-gray-800 text-white"><FaPen></FaPen></Link>
                        <button onClick={() => handleDelete(_id)} className="btn text-xl rounded-lg bg-red-500 text-white"><MdDeleteOutline></MdDeleteOutline> </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EquipmentCard;