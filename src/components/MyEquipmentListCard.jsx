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
                fetch(`https://sports-equipment-store-server.vercel.app/equipments/${_id}`, {
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
                    <span className="font-semibold">Rating:</span> ⭐ {rating}/5
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
                    <button className='btn bg-green-500 text-white hover:bg-green-600 transition-all duration-300 transform hover:scale-105 text-xl rounded-md py-3 px-8 min-w-[140px]'>
                        <FaPen />
                    </button>
                </Link>

                <button onClick={() => handleEquipmentDelete(_id)} className='btn bg-red-500 text-white hover:bg-red-600 transition-all duration-300 transform hover:scale-105 text-2xl rounded-md py-3 px-8 min-w-[140px]'>
                    <MdDeleteOutline />
                </button>

            </div>
        </div>
    );
};

export default MyEquipmentListCard;