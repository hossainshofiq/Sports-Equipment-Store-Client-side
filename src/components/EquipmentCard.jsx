import React from 'react';
import { Link } from 'react-router-dom';

const EquipmentCard = ({ singleEquipment }) => {

    const { _id, image, item_name, category_name, description, price, rating, customization, processing_time, stock_status, user_email, user_name } = singleEquipment;

    return (

        <div className="card card-compact bg-base-100 p-5 border transition-transform transform hover:-translate-y-2">
            <figure>
                <img
                    className='w-full rounded-xl'
                    src={image}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title font-bold">{item_name} </h2>
                <p className='font-semibold'>Category Name: <span className='font-normal'>{category_name}</span> </p>
                <p className='font-semibold'>Description: <span className='font-normal'>{description}</span> </p>
                <p className='font-semibold'>Price: $<span className='font-normal'>{price}</span> </p>
                <p className='font-semibold'>Rating: <span className='font-normal'>{rating}</span> </p>
                <p className='font-semibold'>Customization: <span className='font-normal'>{customization}</span> </p>
            </div>
            <div className="card-actions justify-center">
                <Link to={`/equipmentDetails/${_id}`}><button className='btn bg-green-600 text-white'>View Details</button></Link>
            </div>
        </div>

    );
};

export default EquipmentCard;