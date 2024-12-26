import React from 'react';
import { Link } from 'react-router-dom';

const ManageItems = () => {
    return (
        <div className='min-h-screen w-11/12 mx-auto'>

            <div className="flex justify-between border-green-200 p-4 items-center rounded-xl">
                <div className="border-2 border-red-200">
                <img src="https://i.ibb.co.com/wdLxPzt/avatar-5-150x150.png" alt="" className='w-14 h-14 rounded-full mb-4 ' />
                </div>
                <div className="border-2 border-red-200 "></div>
                <div className="border-2 border-red-200 "></div>
                <div className="border-2 border-red-200 "></div>
                <div className="border-2 border-red-200  ">
                    <Link className='btn btn-info'> Update </Link>
                    <button className='btn btn-error ml-12'>Delete</button>
                </div>
            </div>
            

            <div className="flex justify-between border-red-200 p-4 my-8 items-center rounded-xl">
                <div className="border-2 border-red-200">
                <img src="https://i.ibb.co.com/wdLxPzt/avatar-5-150x150.png" alt="" className='w-14 h-14 rounded-full mb-4 ' />
                </div>
                <div className="border-2 border-red-200 "></div>
                <div className="border-2 border-red-200 "></div>
                <div className="border-2 border-red-200 "></div>
                <div className="border-2 border-red-200  ">
                    <Link className='btn btn-info'> Update </Link>
                    <button className='btn btn-error ml-12'>Delete</button>
                </div>
            </div>
            
        </div>
    );
};

export default ManageItems;