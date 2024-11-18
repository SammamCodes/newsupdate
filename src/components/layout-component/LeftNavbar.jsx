import { data } from "autoprefixer";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";


const LeftNavbar = () => {
    const [categories, setCategories ]=useState([]);
    useEffect(()=>{
        fetch("https://openapi.programming-hero.com/api/news/categories")
        .then((res) => res.json())
        .then(data=>setCategories (data.data.news_category)
        )
    },[])
    return (
        <div >
<h1 className=" font-semibold mb-3">Our Master Castle List ({categories.length})</h1>
<div className="flex flex-col gap-4">
{
    categories.map(category=>(<NavLink to={`category/${category.category_id}`} className="btn bg-blue-500
     text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none" key={category.category_id}>
        {category.category_name}
      </NavLink>
      ))
}


    </div>  
        </div>
    );
};

export default LeftNavbar;