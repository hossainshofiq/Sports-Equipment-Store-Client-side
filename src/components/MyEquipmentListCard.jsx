import React from 'react';
import { FaPen } from 'react-icons/fa';
import { MdDeleteOutline } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';

const MyEquipmentListCard = ({ singleEquipment }) => {

    const { _id, image, item_name, category_name, description, price, rating, customization, processing_time, stock_status, user_email, user_name } = singleEquipment;

    const handleEquipmentDelete = (id) => {
        console.log (id);

        fetch (`http://localhost:5000/equipments/${id}`, {
            method: 'DELETE',

        })
        .then (res => res.json())
        .then (data => {
            console.log (data);
            if (data.deletedCount > 0) {
                alert ('Deleted')
            }
        })
    }

    const handleUpdateCoffee = () => {
        console.log(_id)
    }

    return (
        <div className="card card-side bg-[#F5F4F1] border mb-5 transition-transform transform hover:-translate-y-2">
            <figure>
                <img
                className='w-40'
                    src={image}
                    alt="Equipment" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{item_name} </h2>
                <p>{category_name} </p>
                <p>{description} </p>
                <p>{price} </p>
                <p>{rating} </p>
                <p>{customization} </p>
                <div className="card-actions justify-center">

                    <Link to={`/myEquipments/${_id}`}><button onClick={() => handleUpdateCoffee()} className='btn bg-lime-500 text-white hover:bg-lime-600'>
                        <FaPen />
                    </button></Link>
                    <button
                        onClick={() => handleEquipmentDelete(_id)}
                        className='btn bg-red-500 text-white hover:bg-red-600'
                    >
                        <MdDeleteOutline />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MyEquipmentListCard;