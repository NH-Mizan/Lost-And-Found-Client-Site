import React from 'react';
import Banner from '../Components/Banner';
import { Outlet } from 'react-router-dom';
import UserTestimonials from '../Components/UserTestimonials';

const Home = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <Banner/>
            <Outlet/>
            <UserTestimonials/>
            
        </div>
    );
};

export default Home;