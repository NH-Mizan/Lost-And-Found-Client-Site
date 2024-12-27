import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import axios from 'axios';
import Swal from 'sweetalert2';

const ManageItems = () => {
    const [posts, setPosts] = useState([])
    const { user } = useContext(AuthContext);
   
    useEffect(() => {
        const myItem = async () => {
            const { data } = await axios.get(
                `${import.meta.env.VITE_apiURL}/post/${user?.email}`
            );
            setPosts(data)
        }
        myItem()
          document.title = 'Manage Page || Find It Zone'

    }, [user]);


    
    const handleDelete = id =>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then(result  =>{
            if(result.isConfirmed){
                fetch(`${import.meta.env.VITE_apiURL}/items/${id}`,{
                    method:'DELETE'
                }).then(res =>res.json())
                .then(data =>{
                    if(data.deletedCount > 0){
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your Campaign has been deleted.",
                            icon: "success"
                          });
                          myItem()
                        //   const remaining = myCampaign.filter(cam => cam._id !== _id);
                        //   setMyCampaign(remaining);
                    }
                })
            }
          })
    }

    return (
        <div className='min-h-screen w-11/12 mx-auto'>
            <div className="p-4">
                {posts?.length > 0 ? (
                    <table className="table-auto border-collapse border border-gray-300 w-full">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="border border-gray-300 p-2">Photo</th>
                                <th className="border border-gray-300 p-2">Title</th>
                                <th className="border border-gray-300 p-2">Category</th>
                                <th className="border border-gray-300 p-2">Location</th>
                                <th className="border border-gray-300 p-2">Date</th>
                                <th className="border border-gray-300 p-2">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {posts.map((post) => (
                                <tr key={post._id} className="text-center">
                                    <td className="border border-gray-300 p-2"><img src={post.thumbnail} className='w-14 h-14 rounded-full' alt="" /></td>
                                    <td className="border border-gray-300 p-2">{post.title}</td>
                                    <td className="border border-gray-300 p-2">{post.category}</td>
                                    <td className="border border-gray-300 p-2">{post.location}</td>
                                    <td className="border border-gray-300 p-2">{post.date}</td>
                                    <td className="border border-gray-300 p-2 flex justify-around">
                                        <Link
                                            to={`/update/${post._id}`}
                                            className="btn btn-primary"
                                        >
                                            Update
                                        </Link>
                                        <button
                                            onClick={() => handleDelete(post._id)}
                                            className="btn btn-danger"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <div className="text-center p-4">
                        <h2 className="text-2xl font-bold">No Posts Found</h2>
                        <p>It seems like you haven’t added any posts yet.</p>
                    </div>
                )}
            </div>
        </div>


    );
};

export default ManageItems;