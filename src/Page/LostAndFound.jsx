import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';



const LostAndFound = () => {
    const [originalItems, setOriginalItems] = useState([]);
    const [postItem, setPostItem] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");


    useEffect(() => {
        document.title = "Lost and Found || Find It Zone";

        const fetchItems = async () => {
            try {
                const { data } = await axios.get(`${import.meta.env.VITE_apiURL}/items`);
                setOriginalItems(data); // Save original items
                setPostItem(data); // Display fetched items initially
            } catch (error) {
                console.error("Failed to fetch items:", error);
            }
        };
        fetchItems();
    }, []);

    // Handle search input
    const handleSearch = (e) => {
        const query = e.target.value.toLowerCase();
        setSearchQuery(query);

        const filteredItems = originalItems.filter(
            (item) =>
                item.title.toLowerCase().includes(query) ||
                item.location.toLowerCase().includes(query)
        );

        setPostItem(filteredItems); // Update displayed items
    };

    return (
        <div className="min-h-screen bg-base-200">
            <div className="w-11/12 mx-auto">
                <div className="text-center py-12">
                    <h2 className="font-bold text-3xl mb-4">Latest Find & Lost Items</h2>
                    <p>
                        Here’s a quick glance at the most recent lost and found posts. Don’t wait—click to view details
                        and make a difference!
                    </p>
                </div>

                {/* Search Bar */}
                <div className="flex mb-12 justify-center items-center">
                    <label className="input input-bordered input-error flex items-center gap-2">
                        <input
                            type="text"
                            className="grow"
                            placeholder="Search by title or location"
                            value={searchQuery}
                            onChange={handleSearch}
                        />
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-4 w-4 opacity-70">
                            <path
                                fillRule="evenodd"
                                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                clipRule="evenodd"
                            />
                        </svg>

                    </label>
                </div>

                {/* Posts Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {postItem.length > 0 ? (
                        postItem.map((item) => (
                            <div key={item._id} className="card bg-base-100 shadow-xl">
                                <figure>
                                    <img src={item.thumbnail} alt="Post" className="h-56 w-full" />
                                </figure>
                                <div className="card-body">
                                    <div className="flex justify-between items-center">
                                        <h2 className="card-title">{item.title}</h2>
                                        <div>
                                            <h2 className="font-bold border-2 border-orange-500 px-2 rounded-3xl my-4 bg-lime-100">{item.postType}</h2>

                                        </div>
                                    </div>
                                    <p>{item.description.substring(0, 40)}...</p>

                                   
                                        <div className="text-sm flex justify-between">
                                            <span className="font-bold border-2 p-2 flex rounded-3xl my-4 bg-lime-100"><h2 className="text-orange-500 mr-2"> Deadline </h2> : {item.date}</span>  <span className="font-bold font-bold border-2 p-2 flex rounded-3xl my-4 bg-lime-100"><h2 className="text-orange-500 mr-2"> Location </h2>: {item.location}</span>
                                        </div>
                                 
                                    <div className="card-actions justify-end">
                                        <Link to={`/details/${item._id}`} className="btn btn-primary">
                                            View Details
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="text-center col-span-full">
                            <h3 className="text-xl font-semibold">No items match your search query.</h3>


                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default LostAndFound;
