import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layouts/HomeLayout';
import ErrorPage from '../Pages/ErrorPage';
import HomePage from '../Pages/Home/HomePage';
import Login from '../Pages/Login';
import AllEquipments from '../Pages/AllEquipments';
import Register from '../Pages/Register';
import AddEquipments from '../Pages/AddEquipments';
import AllEquipmentLayout from '../Layouts/AllEquipmentsLayout';
import AddEquipmentLayout from '../Layouts/AddEquipmentLayout';
import MyEquipments from './../Pages/MyEquipments';
import AuthLayout from '../Layouts/AuthLayout';
import MyEquipListLayout from '../Layouts/MyEquipListLayout';


const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <HomePage></HomePage>,
                // loader: () => fetch('http://localhost:5000/equipments')
                loader: () => fetch('https://sports-equipment-store-server.vercel.app/equipments')
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
                // loader: () => fetch('http://localhost:5000/equipments')
                loader: () => fetch('https://sports-equipment-store-server.vercel.app/equipments')
            },
        ]
    },
    {
        path: '/addEquipments',
        element: <AddEquipmentLayout></AddEquipmentLayout>,
        children: [
            {
                path: '/addEquipments',
                element: <AddEquipments></AddEquipments>
            },
        ]
    },
    {
        path: '/myEquipments',
        element: <MyEquipListLayout></MyEquipListLayout>,
        children: [
            {
                path: '/myEquipments',
                element: <MyEquipments></MyEquipments>
            }
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
        // path: '*',
        // element: <h1>Error</h1>
        // element: <ErrorPage></ErrorPage>
    }
])

export default router;