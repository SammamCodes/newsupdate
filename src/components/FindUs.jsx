import { FaFacebookSquare } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";
const FindUs = () => {
    return (
        <div>
        <h2 className="font-semibold mb-3">Find Us On </h2>
        <div className="space-y-2">
            <div className="flex items-center justify-center space-x-2 bg-gray-100 hover:bg-gray-200 transition-all rounded-md py-2 px-4 cursor-pointer">
                <FaFacebookSquare className="text-xl" />
                <span className="text-sm font-medium">Facebook </span>
            </div>
            <div className="flex items-center justify-center space-x-2 bg-gray-100 hover:bg-gray-200 transition-all rounded-md py-2 px-4 cursor-pointer">
                <BsInstagram  className="text-xl" />
                <span className="text-sm font-medium">Instagram </span>
            </div>
            <div className="flex items-center justify-center space-x-2 bg-gray-100 hover:bg-gray-200 transition-all rounded-md py-2 px-4 cursor-pointer">
                <FaXTwitter className="text-xl" />
                <span className="text-sm font-medium">Twitter</span>
            </div>
            <div className="flex items-center justify-center space-x-2 bg-gray-100 hover:bg-gray-200 transition-all rounded-md py-2 px-4 cursor-pointer">
                < FaWhatsappSquare className="text-xl" />
                <span className="text-sm font-medium">Whatsapp</span>
            </div>
        </div>
    </div>
    );
};

export default FindUs;

