import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ViewEquipmentDetails from '../Pages/ViewEquipmentDetails';

const EquipmentDetailsLayout = () => {
    return (
        <div>
            <nav>
                <Navbar></Navbar>
            </nav>

            <main>
                <Outlet></Outlet>
            </main>

            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default EquipmentDetailsLayout;