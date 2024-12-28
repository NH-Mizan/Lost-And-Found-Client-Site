import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const LatestFind = () => {
  const [latestItems, setLatestItems] = useState([]);

  useEffect(() => {
    const fetchLatestItems = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_apiURL}/latest-items`);
        setLatestItems(response.data);
      } catch (error) {
        console.error('Error fetching latest items:', error.message);
      }
    };

    fetchLatestItems();
  }, []);

  return (
    <div className="min-h-screen bg-base-200">
      <div className="w-11/12 mx-auto">
        <div className="text-center py-12">
          <h2 className="font-bold text-3xl mb-4">Latest Find & Lost Items</h2>
          <p>Here’s a quick glance at the most recent lost and found posts!</p>
        </div>

        {/* Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {latestItems.map((item) => (
            <div key={item._id} className="card bg-base-100 shadow-xl">
              <figure>
                <img src={item.thumbnail} alt="Post" className="h-56 w-full" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{item.title}</h2>
                <p>{item.description.substring(0, 50)}...</p>
                <p className="text-sm text-gray-600">{item.location}</p>
                <div className="card-actions justify-end">
                  <Link to={`/details/${item._id}`} className="btn btn-primary">
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* See All Button */}
        <div className="text-center">
          <Link to="/lost&found" className="btn btn-secondary my-12">
            See All More 
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LatestFind;
