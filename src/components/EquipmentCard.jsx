import React from 'react';
import { Link } from 'react-router-dom';

const EquipmentCard = ({ singleEquipment }) => {
    const { _id, image, item_name, category_name, description, price, rating, customization, stock_status } = singleEquipment;
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
                    <span className="font-semibold">Rating:</span> ⭐ {rating}
                </p>
                <p className="text-sm text-gray-600">
                    <span className="font-semibold">Customization:</span> {customization || "Not available"}
                </p>
                <p className="text-sm text-gray-600">
                    <span className="font-semibold">Stock Status:</span> {stock_status}
                </p>
            </div>

            <div className="card-actions mt-4 flex justify-between items-center">
                <Link to={`/equipmentDetails/${_id}`} className="w-full">
                    <button className="btn bg-green-500 hover:bg-green-600 text-white w-full py-2 rounded-lg font-medium transition-transform transform hover:scale-105">
                        View Details
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default EquipmentCard;

