import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {

    const handleRegister = (e) => {
        e.preventDefault()

        const name = e.target.name.value;
        const email = e.target.email.value;
        const photo = e.target.photo.value;
        const password = e.target.password.value;
        console.log(name, email, photo, password);
    }

    return (
        <div className="hero bg-base-200 my-10 container mx-auto rounded-xl">
            <div className="hero-content flex-col">
                <div className="text-center">
                    <h1 className="text-5xl font-bold">Register Now!</h1>
                    <p className="py-6 px-5">
                        Register now for get all the sports equipments.
                    </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleRegister} className="card-body">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input name='name' type="text" placeholder="name" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name='email' type="email" placeholder="email" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input name='photo' type="text" placeholder="Enter your photo URL" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name='password' type="password" placeholder="password" className="input input-bordered" required />
                        </div>

                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>

                        <p className="font-semibold text-center my-5">
                            Already Have An Account?{' '}
                            <Link className="text-red-500 underline" to='/login'>
                                Login
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>

        // <div className="w-full max-w-lg shrink-0 border rounded-lg shadow-lg">
        //     <div className="text-center mt-5">
        //         <h1 className="text-5xl font-bold">Register now!</h1>
        //     </div>
        //     <form className="card-body">
        //         <div className="form-control">
        //             <label className="label">
        //                 <span className="label-text">Name</span>
        //             </label>
        //             <input name='name' type="text" placeholder="Enter your name" className="input input-bordered" required />
        //         </div>
        //         <div className="form-control">
        //             <label className="label">
        //                 <span className="label-text">Photo URL</span>
        //             </label>
        //             <input name='photo' type="text" placeholder="Enter your photo URL" className="input input-bordered" required />
        //         </div>
        //         <div className="form-control">
        //             <label className="label">
        //                 <span className="label-text">Email</span>
        //             </label>
        //             <input name='email' type="email" placeholder="Enter your email" className="input input-bordered" required />
        //         </div>
        //         <div className="form-control relative">
        //             <label className="label">
        //                 <span className="label-text">Password</span>
        //             </label>
        //             <input name='password' placeholder="Enter your password" className="input input-bordered" required />
        //         </div>

        //         <div className="form-control mt-6">
        //             <button className="btn w-full text-white font-bold py-2 px-4 rounded bg-blue-500 hover:bg-blue-600">Register</button>
        //         </div>
        //     </form>

        //     <p className="font-semibold text-center my-5">
        //         Already Have An Account?{' '}
        //         <Link className="text-red-500 underline" to='/login'>
        //             Login
        //         </Link>
        //     </p>
        // </div>
    );
};

export default Register;