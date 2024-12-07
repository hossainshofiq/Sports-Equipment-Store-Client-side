import React from 'react';
import { FaEye, FaPen } from 'react-icons/fa';
import { MdDeleteOutline } from 'react-icons/md';
import { Link } from 'react-router-dom';

const EquipmentCard = ({ singleEquipment }) => {

    const { _id, image, item_name, category_name, description, price, rating, customization, processing_time, stock_status, user_email, user_name } = singleEquipment;

    // const handleViewDetails = (_id) => {
    //     console.log(_id)
    // }

    // onClick={() => handleViewDetails(_id)}

    return (

        // <div className="card card-side bg-[#F5F4F1] border mb-5 transition-transform transform hover:-translate-y-2">

        //     <figure>
        //         <img
        //             src={image}
        //             alt="coffeePhoto" />
        //     </figure>
        //     <div className='flex justify-between w-full items-center'>
        //         <div className="card-body flex flex-col text-left justify-between">
        //             <h2 className="card-title text-center text-purple-700">{item_name} </h2>
        //             <p>{category_name} </p>
        //             <p>{description} </p>
        //             <p>{price} </p>
        //             <p>{rating} </p>
        //             <p>{customization} </p>

        //         </div>
        //         <div>
        //             <div className="join join-vertical space-y-5 pr-5">
        //                 {/* <button className="btn text-xl rounded-lg bg-orange-300 text-white"><FaEye></FaEye> </button>
        //                 <Link className="btn text-xl rounded-lg bg-gray-800 text-white"><FaPen></FaPen></Link>
        //                 <button onClick={() => handleDelete(_id)} className="btn text-xl rounded-lg bg-red-500 text-white"> <MdDeleteOutline></MdDeleteOutline> </button> */}

        //                 <Link to='/equipmentDetails'><button onClick={() => handleViewDetails(_id)} className='btn bg-green-600 text-white'>View Details</button></Link>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        <>

            {/* <div className="card card-side bg-[#F5F4F1] border mb-5 transition-transform transform hover:-translate-y-2">
                <figure>
                    <img
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
                        <Link to={`/equipmentDetails/${_id}`}><button className='btn bg-green-600 text-white'>View Details</button></Link>
                    </div>
                </div>
            </div> */}


            <div className="card card-compact bg-base-100 border">
                <figure>
                    <img
                    className='w-40'
                        src={image}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{item_name} </h2>
                    <p>{category_name} </p>
                    <p>{description} </p>
                    <p>{price} </p>
                    <p>{rating} </p>
                    <p>{customization} </p>
                    <div className="card-actions justify-center">
                        <Link to={`/equipmentDetails/${_id}`}><button className='btn bg-green-600 text-white'>View Details</button></Link>
                    </div>
                </div>
            </div>
        </>




    );
};

export default EquipmentCard;