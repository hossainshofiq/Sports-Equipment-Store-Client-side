import React from 'react';
import { FaPen } from 'react-icons/fa';
import { MdDeleteOutline } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';

const MyEquipmentListCard = ({ singleEquipment }) => {

    const { _id, image, item_name, category_name, description, price, rating, customization, processing_time, stock_status, user_email, user_name } = singleEquipment;

    const handleEquipmentDelete = (id) => {
        console.log(id);

        fetch(`http://localhost:5000/equipments/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    alert('Deleted')
                }
            })
    }

    // Swal.fire({
    //     title: "Are you sure?",
    //     text: "You won't be able to revert this!",
    //     icon: "warning",
    //     showCancelButton: true,
    //     confirmButtonColor: "#3085d6",
    //     cancelButtonColor: "#d33",
    //     confirmButtonText: "Yes, delete it!"
    // }).then((result) => {
    //     if (result.isConfirmed) {

    //         fetch(`http://localhost:5000/equipments/${id}`, {
    //             method: 'DELETE',
    //         })
    //             .then(res => res.json())
    //             .then(data => {
    //                 console.log(data);
    //                 if (data.deletedCount > 0) {
    //                     // alert('Deleted')
    //                     Swal.fire({
    //                         title: "Deleted!",
    //                         text: "Your equipment has been deleted.",
    //                         icon: "success"
    //                     });
    //                 }
    //             })
    //     }
    // });

    const handleUpdateCoffee = () => {
        console.log(_id)
    }

    return (
        <div className="card card-compact bg-[#F5F4F1] border p-5 transition-transform transform hover:-translate-y-2">
            <figure>
                <img
                    className='w-full rounded-xl'
                    src={image}
                    alt="Equipment_image" />
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

                <Link to={`updateEquipment/${_id}`}><button className='btn bg-lime-500 text-white hover:bg-lime-600'>
                    <FaPen></FaPen>
                </button></Link>

                <button onClick={() => handleEquipmentDelete(_id)} className='btn bg-red-500 text-white hover:bg-red-600'>
                    <MdDeleteOutline></MdDeleteOutline>
                </button>

            </div>
        </div>
    );
};

export default MyEquipmentListCard;