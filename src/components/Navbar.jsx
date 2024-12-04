import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {

    const links = <>
        <div className='lg:flex gap-5'>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/allEquipments'>All Sports Equipment</NavLink></li>
            <li><NavLink to='/addEquipments'>Add Equipment</NavLink></li>
            <li><NavLink to='/myEquipments'>My Equipment List</NavLink></li>
        </div>
    </>

    return (
        <div className="navbar bg-purple-600 text-white font-rancho">
            <div className="navbar-start">
                <div className="dropdown ">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-gray-600 rounded-box z-[50] mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <Link to='/'><a className="btn btn-ghost text-xl">EquiSports</a></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end gap-2">
                {/* <a className="btn">Button</a> */}
                <button className='btn btn-accent'><Link to='/auth/login'>Log In</Link></button>
                <button className='btn btn-success'><Link to='/auth/register'>Register</Link></button>
            </div>
        </div>
    );
};

export default Navbar;