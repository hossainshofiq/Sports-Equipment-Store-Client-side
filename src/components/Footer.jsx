import React from 'react';
import logo from '../assets/sports-store-logo.jpg'
import { FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <div>
            <footer className="footer bg-base-200 text-base-content p-10">
                <aside>
                    <img className='w-20 rounded-md' src={logo} alt="" />
                    <p>
                        SportsGear Industries Ltd.
                        <br />
                        Providing reliable tech since 1992
                    </p>
                </aside>

                <nav>
                    <h6 className="footer-title">Contact Info</h6>
                    <a className="link link-hover">address</a>
                    <a className="link link-hover">About Us</a>
                    <a className="link link-hover">Google Map</a>
                    <a className="link link-hover">Online Support</a>
                </nav>

                <nav>
                    <h6 className="footer-title">Social Links</h6>
                    <div className="grid grid-flow-col gap-4">
                        <a className='hover:cursor-pointer text-2xl'>
                            <FaTwitter></FaTwitter>
                        </a>
                        <a className='hover:cursor-pointer text-2xl'>
                            <FaYoutube></FaYoutube>
                        </a>
                        <a className='hover:cursor-pointer text-2xl'>
                            <FaFacebook></FaFacebook>
                        </a>
                    </div>
                </nav>

            </footer>

            <footer className="footer footer-center bg-base-300 text-base-content p-4">
                <aside>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved by Sports Gear online store pvt Ltd</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;