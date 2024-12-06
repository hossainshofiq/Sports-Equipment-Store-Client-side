import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Slider from '../Pages/Home/Slider';
import ProductsSection from '../Pages/Home/ProductsSection';
import SportsCategories from '../Pages/Home/SportsCategories';

const MainLayout = () => {
    return (
        <div>
            <nav>
                <Navbar></Navbar>
            </nav>

            <div>
                {/* <Slider></Slider> */}
            </div>

            {/* <div>
                <SportsCategories></SportsCategories>
            </div> */}

            
            {/* <div>
                <ProductsSection></ProductsSection>
            </div> */}

            <main>
                <Outlet></Outlet>
            </main>

            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default MainLayout;