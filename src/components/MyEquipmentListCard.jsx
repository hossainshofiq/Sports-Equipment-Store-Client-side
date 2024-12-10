import React from 'react';
import { FaPen } from 'react-icons/fa';
import { MdDeleteOutline } from 'react-icons/md';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const MyEquipmentListCard = ({ singleEquipment }) => {

    const { _id, image, item_name, category_name, description, price, rating, customization, processing_time, stock_status } = singleEquipment;

    const handleEquipmentDelete = (_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://sports-equipment-store-server.vercel.app/${_id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Equipment has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }

    return (
        
        // <div className="card card-compact bg-white border p-5 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:opacity-90">
        //     <figure>
        //         <img
        //             className='w-full rounded-lg'
        //             src={image}
        //             alt="Equipment_image"
        //         />
        //     </figure>

        //     <div className="card-body text-gray-800 mt-4">
        //         <h2 className="card-title text-2xl font-bold mb-2">{item_name}</h2>
        //         <p className='font-semibold text-lg'>Category: <span className='font-normal'>{category_name}</span></p>
        //         <p className='font-semibold text-lg'>Description: <span className='font-normal'>{description}</span></p>
        //         <p className='font-semibold text-lg'>Price: <span className='font-normal'>${price}</span></p>
        //         <p className='font-semibold text-lg'>Rating: <span className='font-normal'>{rating}</span></p>
        //         <p className='font-semibold text-lg'>Customization: <span className='font-normal'>{customization}</span></p>
        //         <p className='font-semibold text-lg'>Stock Status: <span className='font-normal'>{stock_status}</span></p>
        //         <p className='font-semibold text-lg'>Processing Time: <span className='font-normal'>{processing_time}</span></p>
        //     </div>

        //     <div className="card-actions justify-between mt-4">
        //         <Link to={`updateEquipment/${_id}`}>
        //             <button className='btn bg-lime-500 text-white hover:bg-lime-600 text-xl rounded-md p-2'>
        //                 <FaPen />
        //             </button>
        //         </Link>

        //         <button onClick={() => handleEquipmentDelete(_id)} className='btn bg-red-500 text-white hover:bg-red-600 text-2xl rounded-md p-2'>
        //             <MdDeleteOutline />
        //         </button>
        //     </div>
        // </div>


        <div className="card bg-white p-5 border rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:-translate-y-2">
        <figure className="overflow-hidden rounded-lg mb-4">
            <img
                className="w-full h-[200px] object-contain object-center"
                src={image}
                alt={item_name}
            />
        </figure>

        <div className="card-body">
            <h2 className="font-bold text-lg text-gray-800">{item_name}</h2>
            <p className="text-sm text-gray-600">
                <span className="font-semibold">Category:</span> {category_name}
            </p>
            <p className="text-sm text-gray-600">
                <span className="font-semibold">Description:</span> {description}
            </p>
            <p className="text-sm text-gray-600">
                <span className="font-semibold">Price:</span> ${price}
            </p>
            <p className="text-sm text-gray-600">
                <span className="font-semibold">Rating:</span> ⭐ {rating}
            </p>
            <p className="text-sm text-gray-600">
                <span className="font-semibold">Customization:</span> {customization || "Not available"}
            </p>
            <p className="text-sm text-gray-600">
                <span className="font-semibold">Stock Status:</span> {stock_status}
            </p>
            <p className="text-sm text-gray-600">
                <span className="font-semibold">Processing Time:</span> {processing_time}
            </p>
        </div>

        <div className="card-actions mt-4 flex justify-between items-center">
        <Link to={`updateEquipment/${_id}`}>
                    <button className='btn bg-lime-500 text-white hover:bg-lime-600 text-xl rounded-md p-2'>
                        <FaPen />
                    </button>
                </Link>

                <button onClick={() => handleEquipmentDelete(_id)} className='btn bg-red-500 text-white hover:bg-red-600 text-2xl rounded-md p-2'>
                    <MdDeleteOutline />
                </button>
        </div>
    </div>
    );
};

export default MyEquipmentListCard;
