import { useState } from "react";

const LeftNavbar = ({ setGurabaData, allGurabaData }) => {
  const [categories] = useState([
    "Safari", "Trekking", "Kayaking", "Farm Stay", "Expedition", "Hiking"
  ]);

  const handleCategoryClick = (category) => {
    // Filter data based on the selected category
    const filteredData = allGurabaData.filter(item => item.category_name === category);
    setGurabaData(filteredData); // Update the filtered data state in parent component
  };

  return (
    <div>
      <h1 className="font-semibold mb-3">Adventure Categories</h1>
      <div className="flex flex-col gap-4">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => handleCategoryClick(category)}
            className="btn bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none"
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LeftNavbar;
