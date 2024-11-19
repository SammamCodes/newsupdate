import { useState, useEffect } from "react";
import LeftNavbar from "../components/layout-component/LeftNavbar";
import Vedio from "../components/vedio/Vedio";
import Navbar from "../Navbar/Navbar";
import LatestNews from "../components/LatestNews/LatestNews";
import RightNav from "../layout-component/RightNav";

const HomeLayout = () => {
  const [gurabaData, setGurabaData] = useState([]); // State to store filtered data
  const [allGurabaData, setAllGurabaData] = useState([]); // State to store all data
  const [loading, setLoading] = useState(false); // State to manage loading state
  const [error, setError] = useState(null); // State to manage error state

  // Fetch data on component mount
  useEffect(() => {
    setLoading(true);
    fetch("/adventure.JSON")
      .then((res) => res.json())
      .then((data) => {
        setAllGurabaData(data); // Set all data
        setGurabaData(data); // Initially set all data for display
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError("Failed to fetch data.");
        setLoading(false);
      });
  }, []);

  return (
    <div className="font-poppins">
      {/* Navbar */}
      <nav className="w-11/12 mx-auto py-0">
        <Navbar />
      </nav>

      {/* Main Content */}
      <section className="w-11/12 mx-auto">
        <Vedio />
        <LatestNews />
      </section>

      {/* Main Layout */}
      <main className="w-11/12 mx-auto pt-5 grid md:grid-cols-12 gap-3">
        {/* Left Navbar */}
        <aside className="left col-span-3">
          <LeftNavbar
            setGurabaData={setGurabaData}
            allGurabaData={allGurabaData} // Pass all data to LeftNavbar for filtering
          />
        </aside>

        {/* Cards Content */}
        <section className="col-span-6 w-11/12 mx-auto mt-8">
          {loading ? (
            <div className="w-full h-full flex items-center justify-center">
              <div className="spinner-border text-blue-500"></div>
              <p>Loading...</p>
            </div>
          ) : error ? (
            <p className="text-red-500 text-center">{error}</p>
          ) : gurabaData.length === 0 ? (
            <p className="text-center text-gray-500">
              No data available for this category.
            </p>
          ) : (
            <div className="flex flex-col gap-6">
              {gurabaData.map((item) => (
                <div key={item.id} className="card bg-gray-100 p-4 rounded-lg shadow-md">
                  <img
                    src={item.image}
                    alt={item.adventure_title}
                    className="w-full h-48 object-cover rounded"
                  />
                  <h2 className="font-bold text-lg mt-4">{item.adventure_title}</h2>
                  <p className="text-gray-700">{item.short_description}</p>
                  <div className="mt-2">
                    <span className="font-semibold">Cost: </span>
                    {item.adventure_cost}
                  </div>
                  <div className="mt-2">
                    <span className="font-semibold">Duration: </span>
                    {item.duration}
                  </div>
                  <div className="mt-2">
                    <span className="font-semibold">Location: </span>
                    {item.location}
                  </div>

                  {/* Displaying included items */}
                  <div className="mt-4">
                    <h3 className="font-semibold">Included Items:</h3>
                    <ul className="list-disc pl-5 mt-2">
                      {item.included_items.map((includedItem, index) => (
                        <li key={index} className="text-gray-700">{includedItem}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Optional Additional Info (if you want to display other data) */}
                  <div className="mt-4">
                    <h3 className="font-semibold">Special Instructions:</h3>
                    <ul className="list-disc pl-5 mt-2">
                      {item.special_instructions.map((instruction, index) => (
                        <li key={index} className="text-gray-700">{instruction}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Right Navigation (Optional) */}
        <aside className="right col-span-3">
          <RightNav />
        </aside>
      </main>
    </div>
  );
};

export default HomeLayout;
