import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React, { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { auth } from '../Firebase/firebase.config';
import { AuthContext } from '../Provider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const GoogleLogin = () => {

    const { setUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const googleProvider = new GoogleAuthProvider();

    const handleGoogleButton = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                setUser(user);
                navigate(location?.state ? location.state : '/');
                Swal.fire({
                    icon: 'success',
                    title: 'Login Successful',
                    text: `Welcome ${user.displayName || 'User'}!`,
                    confirmButtonText: 'OK',
                })
                // .then(() => {
                //     navigate('/');
                // });
            })
            .catch((error) => {
                Swal.fire({
                    icon: 'error',
                    title: 'Google Login Failed',
                    text: error.message,
                });
            });
    };

    const isLoginPage = location.pathname === '/auth/login';

    return (
        <div>

            <div>
                <a onClick={handleGoogleButton} className='btn w-full text-white font-bold py-2 px-4 rounded-md bg-blue-500 hover:bg-blue-600'>
                    <FaGoogle></FaGoogle> {isLoginPage ? 'Login with Google' : 'Register with Google'}
                </a>
            </div>

        </div>
    );
};

export default GoogleLogin;