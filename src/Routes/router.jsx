import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layouts/HomeLayout';
import ErrorPage from '../Pages/ErrorPage';
import Login from '../Pages/Login';
import AllEquipments from '../Pages/AllEquipments';
import Register from '../Pages/Register';
import AddEquipments from '../Pages/AddEquipments';
import AllEquipmentLayout from '../Layouts/AllEquipmentsLayout';
import AddEquipmentLayout from '../Layouts/AddEquipmentLayout';
import MyEquipments from './../Pages/MyEquipments';
import AuthLayout from '../Layouts/AuthLayout';
import MyEquipListLayout from '../Layouts/MyEquipListLayout';
import EquipmentDetailsLayout from '../Layouts/EquipmentDetailsLayout';
import ViewEquipmentDetails from '../Pages/ViewEquipmentDetails';
import ProductsSection from './../Pages/Home/ProductsSection';
import SportsCategories from '../Pages/Home/SportsCategories';
import PrivateRoute from './PrivateRoute';
import UpdateEquipment from '../Pages/UpdateEquipment';
import UpdateEquipmentLayout from '../Layouts/UpdateEquipmentLayout';

// http://localhost:5000
// http://localhost:5000
const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <ProductsSection></ProductsSection>,
                loader: () => fetch('http://localhost:5000/featuredEquipments'),
            },
            {
                path: '/categories',
                element: <SportsCategories></SportsCategories>,
                
            },
        ]
    },
    {
        path: '/allEquipments',
        element: <AllEquipmentLayout></AllEquipmentLayout>,
        children: [
            {
                path: '/allEquipments',
                element: <AllEquipments></AllEquipments>,
                loader: () => fetch('http://localhost:5000/equipments')
            },
        ]
    },
    {
        path: '/addEquipments',
        element: <PrivateRoute>
            <AddEquipmentLayout></AddEquipmentLayout>
        </PrivateRoute>,
        children: [
            {
                path: '/addEquipments',
                element: <AddEquipments></AddEquipments>
            },
        ]
    },
    {
        path: '/myEquipments',
        element: <PrivateRoute>
            <MyEquipListLayout></MyEquipListLayout>
        </PrivateRoute>,
        children: [
            {
                path: '/myEquipments',
                element: <MyEquipments></MyEquipments>,

            },
        ]
    },

    {
        path: '/myEquipments/updateEquipment',
        element: <UpdateEquipmentLayout></UpdateEquipmentLayout>,
        children: [
            {
                path: '/myEquipments/updateEquipment/:id',
                element: <UpdateEquipment></UpdateEquipment>,
                loader: ({ params }) => fetch(`http://localhost:5000/equipments/${params.id}`)
            },
        ]
    },
    {
        path: '/auth',
        element: <AuthLayout></AuthLayout>,
        children: [
            {
                path: '/auth/login',
                element: <Login></Login>
            },
            {
                path: '/auth/register',
                element: <Register></Register>
            },
        ]
    },
    {
        path: '/equipmentDetails',
        element: <PrivateRoute>
            <EquipmentDetailsLayout></EquipmentDetailsLayout>,
        </PrivateRoute>,
        children: [
            {
                path: '/equipmentDetails/:id',
                element: <ViewEquipmentDetails></ViewEquipmentDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/equipments/${params.id}`)
            },

        ]
    },

    {
        path: '*',
        // element: <h1>Error</h1>
        element: <ErrorPage></ErrorPage>
    }
])

export default router;