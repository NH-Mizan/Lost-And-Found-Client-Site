import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            <div className='min-h-screen text-center justify-center items-center flex flex-col bg-red-100'>
                <img src="https://i.ibb.co.com/s6R3mKX/404.gif" alt="" className='w-64 rounded-3xl ' />
                <h1 className="text-5xl font-bold mb-12">Page Not Found.</h1>
                <Link className='btn btn-warning' to={'/'}>Go to Home</Link>
            </div>


        </div>
    );
};

export default ErrorPage;