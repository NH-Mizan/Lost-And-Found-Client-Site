import React, { useEffect } from 'react';
import Banner from '../Components/Banner';
import { Outlet } from 'react-router-dom';
import UserTestimonials from '../Components/UserTestimonials';
import HowItWork from '../Components/HowItWork';

const Home = () => {
    useEffect(() => {
        document.title = "Home || Find It Zone"
    }, [])
    return (
        <div className='w-11/12 mx-auto'>
            <Banner/>
            <Outlet/>
            <UserTestimonials/>
            <HowItWork/>
            
        </div>
    );
};

export default Home;