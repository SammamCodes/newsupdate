import LatestNews from "../components/LatestNews/LatestNews";
import LeftNavbar from "../components/layout-component/LeftNavbar";
import Vedio from "../components/vedio/Vedio";
import RightNav from "../layout-component/RightNav";

import Navbar from "../Navbar/Navbar";



const HomeLayout = () => {
    return (
        <div className="font-poppins">
            
<nav className="w-11/12 mx-auto py-0" >    <Navbar></Navbar></nav>
<header>
   
</header>
<section className="w-11/12  mx-auto">
  
   <Vedio></Vedio>
   <LatestNews></LatestNews>
</section>

<main className="w-11/12 mx-auto pt-5 grid md:grid-cols-12 gap-3">
<aside className="left col-span-3"><LeftNavbar></LeftNavbar></aside>
<section className="col-span-6">Main Content</section>
<aside className=" right col-span-3"><RightNav></RightNav> </aside></main>
        </div>
    );
};

export default HomeLayout;