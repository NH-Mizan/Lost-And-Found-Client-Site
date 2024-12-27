import React, { useContext, useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import { AuthContext } from '../../Provider/AuthProvider';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

const Update = () => {
    const {user} = useContext(AuthContext);
    const [data , setData] = useState({})
    const {id} = useParams()
    const navigate = useNavigate()
    
    const [formData, setFormData] = useState({ date: new Date() })
    console.log(data)

    const updateData = async ()=>{
        const  {data} = await axios.get(`${import.meta.env.VITE_apiURL}/update/${id}`);
        setData(data)
        
    }
    useEffect(() =>{
        updateData()
    },[id])

    const handleUpdateSubmit = async e =>{
        e.preventDefault();
        const form = e.target;
        const postType = form.postType.value;
        const thumbnail = form.thumbnail.value;
        const title = form.title.value;
        const description = form.description.value;
        const category = form.category.value;
        const location = form.location.value;
        const date = form.date.value;
        const contactName = form.contactName.value;
        const contactEmail = form.contactEmail.value;

        const updateSubmitValue = { postType, thumbnail, title, description, category, location, date, contactName, contactEmail }
        
        try {
            await axios.put(`${import.meta.env.VITE_apiURL}/update/${id}`, updateSubmitValue)
            Swal.fire({
                title: 'Success!',
                text: ' Update Sucessfully',
                icon: 'success',
                confirmButtonText: 'Back'
            })
            navigate('/manageItems')


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
        <div className='bg-base-200 py-12'>
        <form onSubmit={handleUpdateSubmit} className="max-w-2xl mx-auto p-4 border rounded-md shadow-md bg-base-100">
            <h2 className="text-2xl font-bold mb-4 text-center">Update Your Lost and Found Item</h2>

            {/* Post Type */}
          {
            data?.postType &&
            <div className="mb-4">
            <label htmlFor="postType" className="block mb-2 font-medium">Post Type</label>
            <select
                id="postType"
                name="postType"
                defaultValue={data.postType}
                className="w-full p-2 border rounded-md"
            >
                <option value="Lost">Lost</option>
                <option value="Found">Found</option>
            </select>
        </div>
          }

            {/* Thumbnail */}
            <div className="mb-4">
                <label htmlFor="thumbnail" className="block mb-2 font-medium">Thumbnail (Image Upload)</label>
                <input
                    type="text"
                    id="thumbnail"
                    name="thumbnail"
                    accept="image/*"
                    defaultValue={data.thumbnail}
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
                    defaultValue={data.title}
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
                    defaultValue={data.description}
                    rows="4"
                    required
                    className="w-full p-2 border rounded-md"
                />
            </div>

            {/* Category */}
            {
                data?.category &&
                <div className="mb-4">
                <label htmlFor="category" className="block mb-2 font-medium">Category</label>
                <select
                    id="category"
                    name="category"
                    defaultValue={data.category}
                    className="w-full p-2 border rounded-md"
                    required
                >
                    <option value="">Select Category</option>
                    <option value="Pets">Pets</option>
                    <option value="Documents">Documents</option>
                    <option value="Gadgets">Gadgets</option>
                </select>
            </div>
            }

            {/* Location */}
            <div className="mb-4">
                <label htmlFor="location" className="block mb-2 font-medium">Location</label>
                <input
                    type="text"
                    id="location"
                    name="location"
                    defaultValue={data.location}
                    required
                    className="w-full p-2 border rounded-md"
                />
            </div>

            {/* Date */}
           {
            data?.date && 
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
           }

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
                Update Now !
            </button>
        </form>
    </div>
    );
};

export default Update;