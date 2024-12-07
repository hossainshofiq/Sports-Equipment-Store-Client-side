import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../Provider/AuthProvider';

const AddEquipments = () => {


    const { user } = useContext(AuthContext);

    const navigate = useNavigate();

    const handleAddEquipment = (e) => {
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

        const newEquipment = { image, item_name, category_name, description, price, rating, customization, processing_time, stock_status, user_email, user_name };
        console.log(newEquipment)



        // send data to the server
        fetch('http://localhost:5000/equipments', {
            // fetch('https://sports-equipment-store-server.vercel.app/equipments',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newEquipment)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                navigate('/');
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Do you want to continue',
                        icon: 'success',
                        confirmButtonText: 'Enjoy'
                    })
                }
            })

        const newCategory = { category_name };

        fetch('http://localhost:5000/categories', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCategory)
        })
            .then(res => res.json())
            .then(data => {
                console.log('category created', data);
                if (data.insertedId) {
                    // alert('Category created on db')
                }
            })
    }
    
    return (
        <div className='bg-[#F4F3F0] px-28 py-16 rounded-lg my-10 container mx-auto'>
            <div className='flex flex-col gap-5 text-center mb-10'>
                <h2 className='text-3xl font-bold'>Add Equipment </h2>
                <p>The "Add Equipment" feature allows users to input and save details about new items, such as sports equipment or other products. Users fill out a form with relevant fields like item name, category, description, price, rating, customization options, processing time, and stock status. Once the form is completed, clicking the "Add Equipment" button submits the data to the system, making the item available for inventory or listing.</p>
            </div>

            <form onSubmit={handleAddEquipment}>
                {/* image row */}
                <div className='lg:flex gap-10 mb-5'>
                    <div className='form-control w-full'>
                        <label className='label'>
                            <span className='label-text'>Image: </span>
                        </label>
                        <label>
                            <input name='image' type="text" placeholder='Enter image URL' className='input input-bordered w-full' />
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
                            <input name='item_name' type="text" placeholder='enter item name' className='input input-bordered w-full' />
                        </label>
                    </div>
                    <div className='form-control md:w-1/2'>
                        <label className='label'>
                            <span className='label-text'>Category Name: </span>
                        </label>
                        <label>
                            <input name='category_name' type="text" placeholder='enter category name' className='input input-bordered w-full' />
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
                            <input name='description' type="text" placeholder='enter description' className='input input-bordered w-full' />
                        </label>
                    </div>
                    <div className='form-control md:w-1/2'>
                        <label className='label'>
                            <span className='label-text'>Price: </span>
                        </label>
                        <label>
                            <input name='price' type="text" placeholder='enter price' className='input input-bordered w-full' />
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
                            <input name='rating' type="text" placeholder='enter rating' className='input input-bordered w-full' />
                        </label>
                    </div>
                    <div className='form-control md:w-1/2'>
                        <label className='label'>
                            <span className='label-text'>Customization: </span>
                        </label>
                        <label>
                            <input name='customization' type="text" placeholder='enter customization genre' className='input input-bordered w-full' />
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
                            <input name='processing_time' type="text" placeholder='enter processing time' className='input input-bordered w-full' />
                        </label>
                    </div>
                    <div className='form-control md:w-1/2'>
                        <label className='label'>
                            <span className='label-text'>Stock Status: </span>
                        </label>
                        <label>
                            <input name='stock_status' type="text" placeholder='enter stock status' className='input input-bordered w-full' />
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
                            <input defaultValue={user.email} disabled name='user_email' type="text" placeholder='enter user email' className='input input-bordered w-full' />
                        </label>
                    </div>
                    <div className='form-control md:w-1/2'>
                        <label className='label'>
                            <span className='label-text'>User Name: </span>
                        </label>
                        <label>
                            <input defaultValue={user.displayName} disabled name='user_name' type="text" placeholder='enter user name' className='input input-bordered w-full' />
                        </label>
                    </div>
                </div>

                <input className="btn btn-block bg-gray-700 text-white hover:text-black" type="submit" value="Add Equipment" />
            </form>
        </div>
    );
};

export default AddEquipments;