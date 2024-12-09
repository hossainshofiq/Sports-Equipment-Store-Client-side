// import React from 'react';
// import { FaPen } from 'react-icons/fa';
// import { MdDeleteOutline } from 'react-icons/md';
// import { Link, useNavigate } from 'react-router-dom';
// import Swal from 'sweetalert2';

// const MyEquipmentListCard = ({ singleEquipment }) => {

//     const { _id, image, item_name, category_name, description, price, rating, customization, processing_time, stock_status } = singleEquipment;

//     const handleEquipmentDelete = (_id) => {
//         console.log(_id);

//         Swal.fire({
//             title: "Are you sure?",
//             text: "You won't be able to revert this!",
//             icon: "warning",
//             showCancelButton: true,
//             confirmButtonColor: "#3085d6",
//             cancelButtonColor: "#d33",
//             confirmButtonText: "Yes, delete it!"
//         }).then((result) => {
//             if (result.isConfirmed) {
//                 fetch(`http://localhost:5000/equipments/${_id}`, {
//                     method: 'DELETE',
//                 })
//                     .then(res => res.json())
//                     .then(data => {
//                         console.log(data);
//                         if (data.deletedCount > 0) {
//                             // alert('Deleted')
//                             Swal.fire({
//                                 title: "Deleted!",
//                                 text: "Your Equipment has been deleted.",
//                                 icon: "success"
//                             });
//                         }
//                     })

//             }
//         });


//         // fetch(`http://localhost:5000/equipments/${id}`, {
//         //     method: 'DELETE',
//         // })
//         //     .then(res => res.json())
//         //     .then(data => {
//         //         console.log(data);
//         //         if (data.deletedCount > 0) {
//         //             // alert('Deleted')
//         //         }
//         //     })
//     }

//     const handleUpdateCoffee = () => {
//         console.log(_id)
//     }

//     return (
//         <div className="card card-compact bg-[#F5F4F1] border p-5 transition-transform transform hover:-translate-y-2">
//             <figure>
//                 <img
//                     className='w-96 h-80 object-contain rounded-xl'
//                     src={image}
//                     alt="Equipment_image" />
//             </figure>

//             <div className="card-body">
//                 <h2 className="card-title font-bold">{item_name} </h2>
//                 <p className='font-semibold'>Category Name: <span className='font-normal'>{category_name}</span> </p>
//                 <p className='font-semibold'>Description: <span className='font-normal'>{description}</span> </p>
//                 <p className='font-semibold'>Price: $<span className='font-normal'>{price}</span> </p>
//                 <p className='font-semibold'>Rating: <span className='font-normal'>{rating}</span> </p>
//                 <p className='font-semibold'>Customization: <span className='font-normal'>{customization}</span> </p>
//                 <p className='font-semibold'>Stock Status: <span className='font-normal'>{stock_status}</span> </p>
//                 <p className='font-semibold'>Processing Time: <span className='font-normal'>{processing_time}</span> </p>

//             </div>
//             <div className="card-actions justify-between">

//                 <Link to={`updateEquipment/${_id}`}><button className='btn bg-lime-500 text-white hover:bg-lime-600 text-xl'>
//                     <FaPen></FaPen>
//                 </button></Link>

//                 <button onClick={() => handleEquipmentDelete(_id)} className='btn w-1/4 bg-red-500 text-white hover:bg-red-600 text-2xl'>
//                     <MdDeleteOutline></MdDeleteOutline>
//                 </button>

//             </div>
//         </div>
//     );
// };

// export default MyEquipmentListCard;

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
                // fetch(`http://localhost:5000/equipments/${_id}`, {
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
        <div className="card card-compact bg-white border p-5 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:opacity-90">
            <figure>
                <img
                    className='w-full h-60 object-contain rounded-lg shadow-md'
                    src={image}
                    alt="Equipment_image"
                />
            </figure>

            <div className="card-body text-gray-800 mt-4">
                <h2 className="card-title text-2xl font-bold mb-2">{item_name}</h2>
                <p className='font-semibold text-lg'>Category: <span className='font-normal'>{category_name}</span></p>
                <p className='font-semibold text-lg'>Description: <span className='font-normal'>{description}</span></p>
                <p className='font-semibold text-lg'>Price: <span className='font-normal'>${price}</span></p>
                <p className='font-semibold text-lg'>Rating: <span className='font-normal'>{rating}</span></p>
                <p className='font-semibold text-lg'>Customization: <span className='font-normal'>{customization}</span></p>
                <p className='font-semibold text-lg'>Stock Status: <span className='font-normal'>{stock_status}</span></p>
                <p className='font-semibold text-lg'>Processing Time: <span className='font-normal'>{processing_time}</span></p>
            </div>

            <div className="card-actions justify-between mt-4">
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
