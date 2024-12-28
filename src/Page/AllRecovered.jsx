import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import axios from "axios";
import Loder from "../Layout/Loder";
import { LuLayoutGrid, LuLayoutList } from "react-icons/lu";

const AllRecovered = () => {
  const { user, loder, setLoder } = useContext(AuthContext);
  const [recoveredPosts, setRecoveredPosts] = useState([]);
  const [layout, setLayout] = useState("card"); 

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
    document.title = "All Recovered Page || Find It Zone";
  }, [user.email]);

  if (loder) {
    return <Loder />;
  }

  const toggleLayout = () => {
    setLayout((prevLayout) => (prevLayout === "card" ? "table" : "card"));
  };

  return (
    <div className="w-11/12 mx-auto">
      <div className="container mx-auto my-8 min-h-screen">
        <div className="flex justify-between items-center my-4">
          <h2 className="text-2xl font-bold text-center">Recovered Posts</h2>
          <button
            onClick={toggleLayout}
            className="btn btn-outline text-xl btn-secondary"
          >  Layout :
            {layout === "card" ? <LuLayoutList/> : <LuLayoutGrid/>}
          </button>
        </div>
        {recoveredPosts.length === 0 ? (
          <p className="text-center text-xl font-semibold text-gray-500">
            No recovered items found. Once you recover an item, it will appear here.
          </p>
        ) : layout === "card" ? (
          // Card Layout
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recoveredPosts.map((post) => (
              <div
                key={post._id}
                className="card bg-base-100 shadow-xl p-4 rounded-lg"
              >
                <h3 className="text-lg font-semibold">{post.recoveredName || "N/A"}</h3>
                <p>
                  <strong>Date:</strong> {post.recoveredDate || "N/A"}
                </p>
                <p>
                  <strong>Location:</strong> {post.recoveredLocation || "N/A"}
                </p>
                <p className="text-green-600 font-bold mt-2">Recovered</p>
              </div>
            ))}
          </div>
        ) : (
          // Table Layout
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
                    <td className="border px-4 py-2">
                      {post.recoveredName || "N/A"}
                    </td>
                    <td className="border px-4 py-2">
                      {post.recoveredDate || "N/A"}
                    </td>
                    <td className="border px-4 py-2">
                      {post.recoveredLocation || "N/A"}
                    </td>
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
