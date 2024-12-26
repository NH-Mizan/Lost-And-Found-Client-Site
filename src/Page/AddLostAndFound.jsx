import React, { useContext, useState } from 'react';
import DatePicker from 'react-datepicker';

import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';
import axios from 'axios';

const AddLostAndFound = () => {
    const { user } = useContext(AuthContext)
    const [formData, setFormData] = useState({ date: new Date() })


    const handleDateChange = (date) => {
        setFormData({ ...formData, date });
    };


    //    Add Data Lost and Found
    
    const handleSubmit = async e => {
        e.preventDefault();
        const data = e.target;
        const postType = data.postType.value;
        const thumbnail = data.thumbnail.value;
        const title = data.title.value;
        const description = data.description.value;
        const category = data.category.value;
        const location = data.location.value;
        const date = data.date.value;
        const contactName = data.contactName.value;
        const contactEmail = data.contactEmail.value;

        const addSubmitValue = { postType, thumbnail, title, description, category, location, date, contactName, contactEmail }
        console.log(addSubmitValue)
        // send add Capmaign value to the server
        
        try {
            await axios.post(`${import.meta.env.VITE_apiURL}/items`, addSubmitValue)
            Swal.fire({
                title: 'Success!',
                text: ' New Lost&Found Item Added Sucessfully',
                icon: 'success',
                confirmButtonText: 'Back'
            })
        } catch(error){
            Swal.fire({
                title: 'Oops.....!',
                text: `Somthing went wrong ! ${error.message}`,
                icon: 'error',
                confirmButtonText: 'Back'
            })
        }


    
    }






    return (
        <div className='bg-base-200 py-12'>
            <form onSubmit={handleSubmit} className="max-w-2xl mx-auto p-4 border rounded-md shadow-md bg-base-100">
                <h2 className="text-2xl font-bold mb-4 text-center">Add Lost or Found Item</h2>

                {/* Post Type */}
                <div className="mb-4">
                    <label htmlFor="postType" className="block mb-2 font-medium">Post Type</label>
                    <select
                        id="postType"
                        name="postType"

                        className="w-full p-2 border rounded-md"
                    >
                        <option value="Lost">Lost</option>
                        <option value="Found">Found</option>
                    </select>
                </div>

                {/* Thumbnail */}
                <div className="mb-4">
                    <label htmlFor="thumbnail" className="block mb-2 font-medium">Thumbnail (Image Upload)</label>
                    <input
                        type="text"
                        id="thumbnail"
                        name="thumbnail"
                        accept="image/*"

                        className="w-full p-2 border rounded-md"
                    />
                </div>

                {/* Title */}
                <div className="mb-4">
                    <label htmlFor="title" className="block mb-2 font-medium">Title</label>
                    <input
                        type="text"
                        id="title"
                        name="title"

                        required
                        className="w-full p-2 border rounded-md"
                    />
                </div>

                {/* Description */}
                <div className="mb-4">
                    <label htmlFor="description" className="block mb-2 font-medium">Description</label>
                    <textarea
                        id="description"
                        name="description"

                        rows="4"
                        required
                        className="w-full p-2 border rounded-md"
                    />
                </div>

                {/* Category */}
                <div className="mb-4">
                    <label htmlFor="category" className="block mb-2 font-medium">Category</label>
                    <select
                        id="category"
                        name="category"

                        className="w-full p-2 border rounded-md"
                        required
                    >
                        <option value="">Select Category</option>
                        <option value="Pets">Pets</option>
                        <option value="Documents">Documents</option>
                        <option value="Gadgets">Gadgets</option>
                    </select>
                </div>

                {/* Location */}
                <div className="mb-4">
                    <label htmlFor="location" className="block mb-2 font-medium">Location</label>
                    <input
                        type="text"
                        id="location"
                        name="location"

                        required
                        className="w-full p-2 border rounded-md"
                    />
                </div>

                {/* Date */}
                <div className="mb-4">
                    <label htmlFor="date" className="block mb-2 font-medium">Date Lost or Found</label>
                    <DatePicker
                        id="date"
                        name='date'
                        selected={formData.date}

                        dateFormat="dd/MM/yyyy"
                        className="w-full p-2 border rounded-md"
                        required
                    />
                </div>

                {/* Contact Info */}
                <div className="mb-4">
                    <label htmlFor="contactName" className="block mb-2 font-medium">Your Name</label>
                    <input
                        type="text"
                        id="contactName"
                        name="contactName"
                        defaultValue={user?.displayName}
                        readOnly
                        className="w-full p-2 border bg-gray-100 rounded-md"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="contactEmail" className="block mb-2 font-medium">Your Email</label>
                    <input
                        type="email"
                        id="contactEmail"
                        name="contactEmail"
                        defaultValue={user?.email}
                        readOnly
                        className="w-full p-2 border bg-gray-100 rounded-md"
                    />
                </div>

                {/* Submit Button */}
                <button type="submit" className="w-full p-3 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                    Add Post
                </button>
            </form>
        </div>
    );
};

export default AddLostAndFound;