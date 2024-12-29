import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { AuthContext } from '../Provider/AuthProvider';

const LatestFind = () => {
    const { setLoder } = useContext(AuthContext);
    const [latestItems, setLatestItems] = useState([]);

    useEffect(() => {
        const fetchLatestItems = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_apiURL}/latest-items`);
                setLatestItems(response.data);
                setLoder(false);
            } catch (error) {
                console.error('Error fetching latest items:', error.message);
            }
        };

        fetchLatestItems();
    }, []);

    return (
        <motion.div
            className="min-h-screen bg-base-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div className="w-11/12 mx-auto">
                {/* Title Section */}
                <motion.div
                    className="text-center py-12"
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.7 }}
                >
                    <h2 className="font-bold text-3xl mb-4">Latest Find & Lost Items</h2>
                    <p>Here’s a quick glance at the most recent lost and found posts!</p>
                </motion.div>

                {/* Posts Grid */}
                <motion.div
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8"
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: { opacity: 0, scale: 0.95 },
                        visible: {
                            opacity: 1,
                            scale: 1,
                            transition: {
                                staggerChildren: 0.2,
                            },
                        },
                    }}
                >
                    {latestItems.map((item) => (
                        <motion.div
                            key={item._id}
                            className="card bg-base-100 shadow-xl"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <figure>
                                <img src={item.thumbnail} alt="Post" className="h-56 w-full" />
                            </figure>
                            <div className="card-body">
                                <div className="flex justify-between items-center">
                                    <h2 className="card-title">{item.title}</h2>
                                    <div>
                                        <h2 className="font-bold border-2 border-orange-500 px-2 rounded-3xl my-4 bg-lime-100">
                                            {item.postType}
                                        </h2>
                                    </div>
                                </div>
                                <div className="text-sm flex justify-between">
                                    <span className="font-bold border-2 p-2 flex rounded-3xl my-4 bg-lime-100">
                                        <h2 className="text-orange-500 mr-2">Deadline</h2>: {item.date}
                                    </span>
                                    <span className="font-bold border-2 p-2 flex rounded-3xl my-4 bg-lime-100">
                                        <h2 className="text-orange-500 mr-2">Location</h2>: {item.location}
                                    </span>
                                </div>
                                <p>{item.description.substring(0, 50)}...</p>
                                <div className="card-actions justify-end">
                                    <Link to={`/details/${item._id}`} className="btn btn-primary">
                                        View Details
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* See All Button */}
                <motion.div
                    className="text-center"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                >
                    <Link to="/lost&found" className="btn btn-secondary my-12">
                        See All More
                    </Link>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default LatestFind;
