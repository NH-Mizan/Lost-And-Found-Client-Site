import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

import DatePicker from 'react-datepicker';
import { AuthContext } from '../Provider/AuthProvider';
import axios from 'axios';

const PostDetails = () => {
    const [formData, setFormData] = useState({ date: new Date() })
    const handleDateChange = (date) => {
        setFormData({ ...formData, date });
    };
    const detailData = useLoaderData()
    const { user } = useContext(AuthContext)
    const { postType, thumbnail, title, description, category, location, date, contactName, contactEmail } = detailData
    console.log(detailData)
    useEffect(() => {
        document.title = "Details Page || Find It Zone"
    }, [])

    const handleRecoverClick = (detailData) => {
        document.getElementById('my_modal_1').showModal()
    }


    // Modal Information Post Server 


    const recoveryUserData = async e => {
        e.preventDefault();
        const form = e.target;
        const recoveredLocation = form.reLocation.value;
        const recoveredDate = form.reDate.value;
        const recoveredEmail = form.email.value;
        const recoveredName = form.name.value;
        const recoveredPhoto = user?.photoURL;


        const recoveredData = { recoveredLocation, recoveredDate, recoveredEmail, recoveredName, recoveredPhoto }
        console.log(recoveredData)
        document.getElementById("my_modal_1").close();
        try {
            await axios.post(`${import.meta.env.VITE_apiURL}/recovered-items`, recoveredData)
            Swal.fire({
                title: 'Success!',
                text: ' Recovered Sucessfully',
                icon: 'success',
                confirmButtonText: 'Back'
            })


        } catch (error) {
            Swal.fire({
                title: 'Oops.....!',
                text: `Somthing went wrong ! ${error.message}`,
                icon: 'error',
                confirmButtonText: 'Back'
            })



        }



    }
    return (
        <div>
            <div className=' mx-auto w-11/12 '>
                <div
                    className="hero py-12"
                    style={{
                        backgroundImage: "url(https://i.ibb.co.com/dBQJyTR/banner3.jpg)",
                    }}>


                    <div className="hero-content  p-12 rounded-xl flex flex-col lg:flex-row md:flex-row gap-12 bg-lime-200 text-center">
                        <div className=""><img src={thumbnail} alt="" className="rounded-lg h-80 w-80" /></div>
                        <div className="max-w-md text-left">

                            <p className="mb-5 flex gap-4 text-5xl font-bold">
                                {postType} This !!
                            </p>
                            <p className="mb-5 flex gap-4 text-3xl font-bold">
                                {title}
                            </p>
                            <p className="mb-5 flex gap-4 text-lg font-semibold">
                                {description}
                            </p>
                            {/* <div className="text-sm flex justify-between">
                            <span className="font-bold border-2 p-2 flex rounded-3xl my-4 bg-lime-100"><h2 className="text-orange-500 mr-2"> Type </h2> : {postType}</span>  <span className="font-bold font-bold border-2 p-2 flex rounded-3xl my-4 bg-lime-100"><h2 className="text-orange-500 mr-2"> Location </h2>: {location}</span>
                            </div>
                            <div className="text-sm flex justify-between">
                               
                                <span className="font-bold border-2 flex p-2 rounded-3xl my-4 bg-lime-100"> <h2 className="text-orange-500 mr-2"> Date </h2> : {date}</span>  <span className="font-bold font-bold border-2 flex p-2 rounded-3xl my-4 bg-lime-100"><h2 className="text-orange-500 mr-2"> Category </h2> : {category}</span>
                            </div> */}

                            <button onClick={() => handleRecoverClick(detailData)}
                                className='btn btn-secondary'>
                                {postType === "Lost" ? "Found This!" : "This is Mine!"}
                            </button>




                            {/* Open the modal using document.getElementById('ID').showModal() method */}

                            <dialog id="my_modal_1" className="modal ">
                                <div className="modal-box">
                                    <form onSubmit={recoveryUserData}>
                                        <h2 className='text-2xl  font-bold'>Recover Item</h2>

                                        <p className='font-bold text-xl text-orange-500 my-4'><span className="text-black">Item Name:</span> {title}</p>
                                        <div className="mb-4">
                                            <label className='text-lg text-green-400 font-bold'>Recovery Date:</label>

                                            <DatePicker
                                                id="date"
                                                name='reDate'
                                                selected={formData.date}

                                                dateFormat="dd/MM/yyyy"
                                                className='border-2 border-red-300 w-full ml-4 p-2 rounded-xl my-4'
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label className='text-lg text-green-400 font-bold'>Recovery Location:</label>
                                            <input
                                                type="text"
                                                name='reLocation'
                                                className='border-2 w-full border-red-300 ml-4 p-2 rounded-xl w-full my-4'
                                                required
                                            />
                                        </div>
                                        <div>

                                        </div>
                                        <div>
                                            <label className='text-lg text-green-400 font-bold'>Recovered Name :</label>
                                            <input
                                                type="text"
                                                name='name'
                                                value={`${user?.displayName}`}
                                                readOnly
                                                className='border-2 border-red-300 w-full ml-4 p-2 rounded-xl my-4'
                                            />

                                        </div>
                                        <div>
                                            <label className='text-lg text-green-400 font-bold'>Recovered Email:</label>
                                            <input
                                                type="text"
                                                name='email'
                                                value={`${user?.email}`}
                                                readOnly
                                                className='border-2 w-full border-red-300 ml-4 p-2 rounded-xl my-4'
                                            />
                                        </div>
                                        <div className="flex justify-between mt-4">
                                            <button className="btn btn-error  mr-2">Submit</button>
                                            <form method="dialog">
                                                {/* if there is a button in form, it will close the modal */}
                                                <button className="btn btn-info">Close</button>
                                            </form>
                                            <img src={user?.photoURL} alt="" name="photo" className='h-14 w-14 rounded-full' />
                                        </div>
                                    </form>


                                </div>
                            </dialog>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default PostDetails;