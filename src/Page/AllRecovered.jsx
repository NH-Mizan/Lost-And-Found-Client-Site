import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import axios from "axios";
import Loder from "../Layout/Loder";

const AllRecovered = () => {
  const { user, loder, setLoder } = useContext(AuthContext);
  const [recoveredPosts, setRecoveredPosts] = useState([]);


  useEffect(() => {
    const fetchRecoveredPosts = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_apiURL}/recovered-items?email=${user.email}`
        );
        setRecoveredPosts(response.data);
        setLoder(false);
      } catch (error) {
        console.error("Error fetching recovered posts:", error.message);
        setLoder(false);
      }
    };

    fetchRecoveredPosts();
      document.title = 'All Recovered Page || Find It Zone'

    
  }, [user.email]);

  if (loder) {
    return <Loder/>
  }

  return (
    <div className="w-11/12 mx-auto">
        <div className="container mx-auto my-8 min-h-screen">
      <h2 className="text-2xl font-bold text-center my-4">Recovered Posts</h2>
      {recoveredPosts.length === 0 ? (
        <p className="text-center text-xl font-semibold text-gray-500">
          No recovered items found. Once you recover an item, it will appear here.
        </p>
      ) : (
        <div className="overflow-x-auto">
          <table className="table-auto w-full border border-gray-300">
            <thead className="bg-gray-200">
              <tr>
                <th className="border px-4 py-2">Item Name</th>
                <th className="border px-4 py-2">Recovery Date</th>
                <th className="border px-4 py-2">Recovery Location</th>
                <th className="border px-4 py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {recoveredPosts.map((post) => (
                <tr key={post._id}>
                  <td className="border px-4 py-2">{post.recoveredName || "N/A"}</td>
                  <td className="border px-4 py-2">{post.recoveredDate}</td>
                  <td className="border px-4 py-2">{post.recoveredLocation}</td>
                  <td className="border px-4 py-2 text-green-600 font-bold">
                    Recovered
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
    </div>
  );
};

export default AllRecovered;
