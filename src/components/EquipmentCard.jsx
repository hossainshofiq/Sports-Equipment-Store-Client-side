// import React from 'react';
// // import { FaEye, FaPen } from 'react-icons/fa';
// // import { MdDeleteOutline } from 'react-icons/md';
// import { Link } from 'react-router-dom';

// const EquipmentCard = ({ singleEquipment }) => {

//     const { _id, image, item_name, category_name, description, price, rating, customization, processing_time, stock_status, user_email, user_name } = singleEquipment;

//     return (

//         <div className="card card-compact bg-base-100 p-5 border transition-transform transform hover:-translate-y-2">
//             <figure>
//                 <img
//                     className='rounded-xl'
//                     src={image}
//                     alt="Shoes" />
//             </figure>
//             <div className="card-body">
//                 <h2 className="card-title font-bold">{item_name} </h2>
//                 <p className='font-semibold'>Category Name: <span className='font-normal'>{category_name}</span> </p>
//                 <p className='font-semibold'>Description: <span className='font-normal'>{description}</span> </p>
//                 <p className='font-semibold'>Price: $<span className='font-normal'>{price}</span> </p>
//                 <p className='font-semibold'>Rating: <span className='font-normal'>{rating}</span> </p>
//                 <p className='font-semibold'>Customization: <span className='font-normal'>{customization}</span> </p>
//             </div>
//             <div className="divider"></div>
//             <div className="card-actions justify-center">
//                 <Link to={`/equipmentDetails/${_id}`}><button className='btn bg-green-500 hover:bg-green-600 text-white'>View Details</button></Link>
//             </div>
//         </div>

//     );
// };

// export default EquipmentCard;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const EquipmentCard = ({ singleEquipment }) => {
    const [theme, setTheme] = useState("light");

    const { _id, image, item_name, category_name, description, price, rating, customization, processing_time, stock_status, user_email, user_name } = singleEquipment;

    return (
        <div className={`card card-compact ${theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-black"} p-5 border transition-transform transform hover:-translate-y-2`}>
            <figure className="overflow-hidden rounded-lg">
                <img
                    className="w-full h-64 object-contain object-center"
                    src={image}
                    alt={item_name}
                />
            </figure>
            <div className="card-body pt-4">
                <h2 className="card-title font-bold text-xl text-gray-800">{item_name}</h2>
                <p className="font-semibold text-gray-600">Category: <span className="font-normal text-gray-500">{category_name}</span></p>
                <p className="font-semibold text-gray-600">Description: <span className="font-normal text-gray-500">{description}</span></p>
                <p className="font-semibold text-gray-600">Price: <span className="font-normal text-gray-500">${price}</span></p>
                <p className="font-semibold text-gray-600">Rating: <span className="font-normal text-gray-500">{rating}</span></p>
                <p className="font-semibold text-gray-600">Customization: <span className="font-normal text-gray-500">{customization}</span></p>
            </div>
            <div className="divider my-4"></div>
            <div className="card-actions justify-center">
                <Link to={`/equipmentDetails/${_id}`}>
                    <button className="btn bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md transform transition duration-200 hover:scale-105">
                        View Details
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default EquipmentCard;
