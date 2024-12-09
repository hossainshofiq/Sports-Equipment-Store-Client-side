import React, { useContext, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../Provider/AuthProvider';
import Navbar from './../components/Navbar';

const UpdateEquipment = () => {

    const { user } = useContext(AuthContext);


    const navigate = useNavigate();
    const [theme, setTheme] = useState("light");
    const equipment = useLoaderData();

    const { _id, image, item_name, category_name, description, price, rating, customization, processing_time, stock_status, user_email, user_name } = equipment;

    const handleUpdateEquipment = (e) => {
        e.preventDefault();

        const form = e.target;
        const image = form.image.value;
        const item_name = form.item_name.value;
        const category_name = form.category_name.value;
        const description = form.description.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const customization = form.customization.value;
        const processing_time = form.processing_time.value;
        const stock_status = form.stock_status.value;
        const user_email = form.user_email.value;
        const user_name = form.user_name.value;

        const updatedEquipment = { image, item_name, category_name, description, price, rating, customization, processing_time, stock_status, user_email, user_name };

        console.log(updatedEquipment);

        const newCategory = {category_name};


        // send data to the server
        fetch(`http://localhost:5000/equipments/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedEquipment)
        })
            .then(res => res.json())
            .then (data => {
                console.log (data);
                if (data.modifiedCount>0) {
                    fetch('http://localhost:5000/categories', {
                        method: 'PUT',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(newCategory)
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log('newCategory created on db', data);
                            if (data.acknowledged) {
                                Swal.fire({
                                    title: 'Success!',
                                    text: 'Equipment Added Successfully',
                                    icon: 'success',
                                    confirmButtonText: 'Yes'
                                })
                                
                                navigate('/myEquipments');
                            }
                        })
                }
            })
            .catch (error => console.log (error))
    }

    return (
        <div className='w-11/12 mx-auto my-10'>
            <div className={`px-6 md:px-16 py-12 lg:px-28 lg:py-16 rounded-lg my-10 w-11/12 mx-auto ${theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"}`}>
                <div className='flex flex-col gap-5 text-center mb-10'>
                    <h2 className='text-3xl font-bold'>Update Your Equipment ;;;;; : {item_name} </h2>
                    <p>Update feature allows users to input and save details about new items, such as sports equipment or other products. Users fill out a form with relevant fields like item name, category, description, price, rating, customization options, processing time, and stock status. Once the form is completed, clicking the "Add Equipment" button submits the data to the system, making the item available for inventory or listing.</p>
                </div>

                <form onSubmit={handleUpdateEquipment}>
                    {/* image row */}
                    <div className='lg:flex gap-10 mb-5'>
                        <div className='form-control w-full'>
                            <label className='label'>
                                <span className='label-text'>Image: </span>
                            </label>
                            <label>
                                <input defaultValue={image} name='image' type="text" placeholder='Enter image URL' className='input input-bordered w-full' />
                            </label>
                        </div>
                    </div>
                    {/* item_name and category_name row */}
                    <div className='lg:flex md:flex gap-10 mb-5'>
                        <div className='form-control md:w-1/2'>
                            <label className='label'>
                                <span className='label-text'>Item Name: </span>
                            </label>
                            <label>
                                <input defaultValue={item_name } name='item_name' type="text" placeholder='enter item name' className='input input-bordered w-full' />
                            </label>
                        </div>
                        <div className='form-control md:w-1/2'>
                            <label className='label'>
                                <span className='label-text'>Category Name: </span>
                            </label>
                            <label>
                                <input defaultValue={category_name} name='category_name' type="text" placeholder='enter category name' className='input input-bordered w-full' />
                            </label>
                        </div>
                    </div>
                    {/* description and price row */}
                    <div className='lg:flex md:flex gap-10 mb-5'>
                        <div className='form-control md:w-1/2'>
                            <label className='label'>
                                <span className='label-text'>Description: </span>
                            </label>
                            <label>
                                <input defaultValue={description} name='description' type="text" placeholder='enter description' className='input input-bordered w-full' />
                            </label>
                        </div>
                        <div className='form-control md:w-1/2'>
                            <label className='label'>
                                <span className='label-text'>Price: </span>
                            </label>
                            <label>
                                <input defaultValue={price} name='price' type="text" placeholder='enter price' className='input input-bordered w-full' />
                            </label>
                        </div>
                    </div>
                    {/* item_name and category_name row */}
                    <div className='lg:flex md:flex gap-10 mb-5'>
                        <div className='form-control md:w-1/2'>
                            <label className='label'>
                                <span className='label-text'>Rating: </span>
                            </label>
                            <label>
                                <input defaultValue={rating} name='rating' type="text" placeholder='enter rating' className='input input-bordered w-full' />
                            </label>
                        </div>
                        <div className='form-control md:w-1/2'>
                            <label className='label'>
                                <span className='label-text'>Customization: </span>
                            </label>
                            <label>
                                <input defaultValue={customization} name='customization' type="text" placeholder='enter customization genre' className='input input-bordered w-full' />
                            </label>
                        </div>
                    </div>
                    {/* item_name and category_name row */}
                    <div className='lg:flex md:flex gap-10 mb-5'>
                        <div className='form-control md:w-1/2'>
                            <label className='label'>
                                <span className='label-text'>Processing Time: </span>
                            </label>
                            <label>
                                <input defaultValue={processing_time} name='processing_time' type="text" placeholder='enter processing time' className='input input-bordered w-full' />
                            </label>
                        </div>
                        <div className='form-control md:w-1/2'>
                            <label className='label'>
                                <span className='label-text'>Stock Status: </span>
                            </label>
                            <label>
                                <input defaultValue={stock_status} name='stock_status' type="text" placeholder='enter stock status' className='input input-bordered w-full' />
                            </label>
                        </div>
                    </div>
                    {/* item_name and category_name row */}
                    <div className='lg:flex md:flex gap-10 mb-5'>
                        <div className='form-control md:w-1/2'>
                            <label className='label'>
                                <span className='label-text'>User Email: </span>
                            </label>
                            <label>
                                <input defaultValue={user?.email} disabled name='user_email' type="text" placeholder='enter user email' className='input input-bordered w-full' />

                                {/* <input defaultValue={user} disabled name='user_email' type="text" placeholder='enter user email' className='input input-bordered w-full' /> */}
                            </label>
                        </div>
                        <div className='form-control md:w-1/2'>
                            <label className='label'>
                                <span className='label-text'>User Name: </span>
                            </label>
                            <label>
                                <input defaultValue={user?.displayName} disabled name='user_name' type="text" placeholder='enter user name' className='input input-bordered w-full' />

                                {/* <input defaultValue={user} disabled name='user_name' type="text" placeholder='enter user name' className='input input-bordered w-full' /> */}
                            </label>
                        </div>
                    </div>

                    <input className="btn btn-block bg-gray-700 text-white hover:text-black" type="submit" value="Update Your Equipment" />
                </form>
            </div>

        </div>
    );
};

export default UpdateEquipment;