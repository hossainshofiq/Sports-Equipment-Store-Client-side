import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import { Tooltip } from 'react-tooltip';

const Navbar = () => {
    const { user, userLogOut } = useContext(AuthContext);
    const [theme, setTheme] = useState("light");

    // const [theme, setTheme] = useState("light");
    // const location = useLocation();
    // const isHomePage = location.pathname === "/";

    // useEffect(() => {
    //     if (isHomePage) {
    //         const savedTheme = localStorage.getItem("theme") || "light";
    //         setTheme(savedTheme);
    //         document.body.className = savedTheme;
    //     } else {
    //         document.body.className = "";
    //     }
    // }, [isHomePage]);

    // const toggleTheme = () => {
    //     const newTheme = theme === "light" ? "dark" : "light";
    //     setTheme(newTheme);
    //     document.documentElement.className = newTheme;
    //     localStorage.setItem("theme", newTheme);
    // };

    const links = (
        <>
            <div className='lg:flex gap-5'>
                <li><NavLink to='/'>Home</NavLink></li>
                <li><NavLink to='/allEquipments'>All Sports Equipment</NavLink></li>
                <li><NavLink to='/addEquipments'>Add Equipment</NavLink></li>
                <li><NavLink to='/myEquipments'>My Equipment List</NavLink></li>
            </div>
        </>
    );

    return (
        // <div className="navbar">
        <div className={`navbar ${theme === "dark" ? "bg-gray-900 text-white" : "bg-purple-600 text-white"} font-rancho`}>
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-gray-600 rounded-box z-[50] mt-3 w-52 p-2 shadow"
                    >
                        {links}
                    </ul>
                </div>
                <Link to='/'><a className="btn btn-ghost text-xl">Sports Gear</a></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end gap-2">
                {/* Toggle Button */}
                {/* {isHomePage && (
                    <div className="navbar-end gap-2">
                        <button
                            onClick={toggleTheme}
                            className="btn"
                        >
                            {theme === "light" ? "Dark" : "Light"}
                        </button>
                    </div>
                )} */}

                {user && user?.email ? (
                    <button onClick={userLogOut} className='btn btn-accent'>Logout</button>
                ) : (
                    <Link to='/auth/login' className='btn btn-accent'>Log In</Link>
                )}

                {user && user?.email ? (

                    // <div className="relative group">
                    //     {/* Profile Picture */}
                    //     <img
                    //         className='w-12 h-12 rounded-full cursor-pointer'
                    //         src={user?.photoURL}
                    //         alt="User Avatar"
                    //     />
                    //     {/* Tooltip */}
                    //     <div
                    //         className="absolute hidden group-hover:block top-14 left-1/2 transform -translate-x-1/2 bg-black text-white text-sm px-3 py-1 rounded z-50"
                    //     >
                    //         {user?.displayName}
                    //     </div>
                    // </div>

                    <div>
                        <img
                            data-tooltip-id='my-tooltip'
                            data-tooltip-content={user?.displayName}
                            data-for="profile-tooltip"
                            className='w-12 h-12 rounded-full cursor-pointer'
                            src={user?.photoURL}
                            alt="User Avatar"
                        />
                        <Tooltip id='my-tooltip' ></Tooltip>
                    </div>

                ) : (
                    <Link to='/auth/register' className='btn btn-success'>Register</Link>
                )}
            </div>
        </div >
    );
};

export default Navbar;
