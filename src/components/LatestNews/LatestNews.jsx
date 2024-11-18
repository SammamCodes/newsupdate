import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";


const LatestNews = () => {
    return (
        <div className="flex gap-2 items-center bg-slate-200 py-1">
         <p className="bg-[#D72050] text-white px-3 py-1 flex-none">  Next Quest</p> 
    <Marquee pauseOnHover={true} speed={50} className="space-x-10">
        <Link to={"/news"}>Gear up for our Next Quest, where thrilling experiences and breathtaking landscapes await! Join us for an unforgettable journey packed with adventure, discovery, and new challenges</Link>
        <Link to={"/news"}>Gear up for our Next Quest, where thrilling experiences and breathtaking landscapes await! Join us for an unforgettable journey packed with adventure, discovery, and new challenges</Link>
        <Link to={"/news"}>Gear up for our Next Quest, where thrilling experiences and breathtaking landscapes await! Join us for an unforgettable journey packed with adventure, discovery, and new challenges</Link>
    </Marquee>
        </div>
    );
};

export default LatestNews;