import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';


const LostAndFound = () => {

    const items = useLoaderData()
    console.log(items)

    

    return (
        <div className='min-h-screen bg-base-200'>
            <div className='w-11/12 mx-auto '>
                <div className="text-center py-12">
                    <h2 className='font-bold text-3xl mb-4 '>Latest Find & Lost Items </h2>
                    <p >Here’s a quick glance at the most recent lost and found posts. Don’t wait—click to view details and make a difference!</p>
                </div>
                <div className="flex mb-12 justify-center  items-center">
                    <label className="input input-bordered input-error  flex items-center gap-2">
                        <input type="text" className="grow" placeholder="Search" />
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-4 w-4 opacity-70">
                            <path
                                fillRule="evenodd"
                                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                clipRule="evenodd" />
                        </svg>
                    </label>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">

                    {/* Card Display aLL map kore */}
                    {
                        items?.map((item) => (
                            <div key={item._id} className="card bg-base-100 shadow-xl">
                                <figure>
                                    <img
                                        src={item.thumbnail}
                                        alt="Shoes"
                                        className="h-56 w-full" />
                                        
                                </figure>
                                <div className="card-body">
                                    <div className="flex justify-between items-center">
                                        <h2 className="card-title">{item.title}</h2>
                                        <div><p>{item.date}</p></div>
                                    </div>
                                    <p>{item.description.substring(0, 40)}...</p>

                                    <div className="flex justify-between items-center mb-4">
                                        <h2 className="card-title">{item.postType}</h2>
                                        <div><p>{item.location}</p></div>
                                    </div>
                                    <div className="card-actions justify-end">
                                        <Link to={`/details/${item._id}`} className="btn btn-primary">View Details</Link>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                    {/* ======================= */}

                    {/* ======================= */}

                </div>


            </div>

        </div>
    );
};

export default LostAndFound;