import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { AuthContext } from '../Provider/AuthProvider';
import Loder from './Loder';

const MainLayout = () => {
    const {loder} =useContext(AuthContext)
    return (
        <div>
            <Header />
            {
                loder? <Loder/> : <div>
                <Outlet />
            </div>
            }
            <Footer />

        </div>
    );
};

export default MainLayout;