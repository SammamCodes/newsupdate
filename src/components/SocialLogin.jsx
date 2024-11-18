import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const SocialLogin = () => {
    return (
        <div>
            <h2 className="font-semibold mb-3">Login with</h2>
            <div className="space-y-2">
                <div className="flex items-center justify-center space-x-2 bg-gray-100 hover:bg-gray-200 transition-all rounded-md py-2 px-4 cursor-pointer">
                    <FcGoogle className="text-xl" />
                    <span className="text-sm font-medium">Login with Google</span>
                </div>
                <div className="flex items-center justify-center space-x-2 bg-gray-100 hover:bg-gray-200 transition-all rounded-md py-2 px-4 cursor-pointer">
                    <FaGithub className="text-xl" />
                    <span className="text-sm font-medium">Login with Github</span>
                </div>
            </div>
        </div>
    );
};

export default SocialLogin;
