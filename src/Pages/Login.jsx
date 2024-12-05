import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import GoogleLogin from '../components/GoogleLogin';

const Login = () => {

    const { userLogin } = useContext(AuthContext);

    const handleLogin = (e) => {
        e.preventDefault()

        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        userLogin(email, password)
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.log('Error', error);
            })
    }
    return (
        <div className="hero bg-base-200 my-10 container mx-auto rounded-xl">
            <div className="hero-content flex-col">
                <div className="text-center">
                    <h1 className="text-5xl font-bold">Login Now!</h1>
                    <p className="py-6 px-5">
                        Login now for get all the sports equipments.
                    </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleLogin} className="card-body">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name='email' type="email" placeholder="email" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name='password' type="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>

                        <div className="form-control gap-3 mt-6">
                            <div>
                                <button className="btn w-full text-white font-bold py-2 px-4 rounded-md bg-blue-500 hover:bg-blue-600">Login</button>
                            </div>

                            <div>
                            <GoogleLogin></GoogleLogin>
                            </div>

                        </div>
                        <p className="font-semibold text-center my-5">Don't Have An Account ? <Link className="text-red-500 underline" to='/auth/register'>Register</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;