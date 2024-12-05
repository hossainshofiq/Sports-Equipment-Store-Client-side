import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import GoogleLogin from '../components/GoogleLogin';

const Register = () => {

    const { createUser, setUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const email = e.target.email.value;
        const photo = e.target.photo.value;
        const password = e.target.password.value;
        console.log(name, email, photo, password);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                setUser(user);
                console.log(user);
                updateUserProfile({ displayName: name, photoURL: photo })
                .then(() => {
                    navigate('/');
                }).catch(err => {
                    console.log(err);
                })
                
            })
            .catch(error => {
                console.log('Error', error);
            })
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

                        <div className="form-control gap-3 mt-6">
                            <div>
                                <button className="btn w-full text-white font-bold py-2 px-4 rounded-md bg-blue-500 hover:bg-blue-600">Register</button>
                            </div>
                            <div>
                                <GoogleLogin></GoogleLogin>
                            </div>
                        </div>

                        <p className="font-semibold text-center my-5">
                            Already Have An Account?{' '}
                            <Link className="text-red-500 underline" to='/auth/login'>
                                Login
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
