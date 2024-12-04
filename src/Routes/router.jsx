import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layouts/MainLayout';
import ErrorPage from '../components/ErrorPage';
import HomePage from '../components/HomePage';
import Login from '../components/Login';
import Register from '../components/Register';
import AllEquipments from '../components/AllEquipments';
import AddEquipments from '../components/AddEquipments';
import MyEquipments from '../components/MyEquipments';

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        // errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <HomePage></HomePage>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/allEquipments',
                element: <AllEquipments></AllEquipments>
            },
            {
                path: '/addEquipments',
                element: <AddEquipments></AddEquipments>
            },
            {
                path: '/myEquipments',
                element: <MyEquipments></MyEquipments>
            }
        ]
    }
])

export default router;