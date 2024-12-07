
import { FaTwitter } from "react-icons/fa";
import { AiFillFacebook } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa6";
import { MdLocationOn } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa";
import { MdEdit } from "react-icons/md";

const Footer = () => {

    return (
        <div className=" mt-20  bg-no-repeat bg-cover "
        style={{
            backgroundImage: "url(https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGFyayUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D)",}}
        >


                <div className=" flex-col md:flex-row lg:flex-row flex  justify-center  p-20 gap-20  text-white ">
                <div>
                <p className=" deep  text-4xl  ">Blog</p>
                <p className=" mt-10 text-xl deep ">Sample post</p>
                <p className=" text-xl deep text-cyan-400 ">June 16, 2023
                </p>
                <p className=" mt-10 text-xl deep ">Sample post with image</p>
                <p className=" text-xl deep text-cyan-400 ">May 20, 2023
                </p>
                </div>
                <div>
                <p className=" deep  text-4xl  ">About</p>
                <p className=" mt-10  deep ">Lorem ipsum dolor sit amet,<br></br> consectetur adipisicing elit, sed<br></br> do eiusmod tempor incididunt ut<br></br> labore et dolore magna aliqua.<br></br> Ut enim ad minim veniam,<br></br>quis nostrud exercitation.</p>
                </div>
                <div>
                <p className=" deep  text-4xl  ">Social</p>
                <div className=" mt-10 ">
                <div className=" flex items-center gap-2">
                <p><FaTwitter className=" h-[30px] w-[30px] text-cyan-400 "></FaTwitter></p>
                <p className=" deep text-xl text-gray-300 ">twitter</p>
                </div>
                <p className=" mt-3 h-[1px] w-[200px] bg-gray-500 "></p>
                <div className=" mt-3 flex items-center gap-2">
                <p><AiFillFacebook className=" h-[30px] w-[30px] text-blue-700 "></AiFillFacebook></p>
                <p className=" deep text-xl text-gray-300 ">Facebook</p>
                </div>
                <p className=" mt-3 h-[1px] w-[200px] bg-gray-500 "></p>
                <div className=" mt-3 flex items-center gap-2">
                <p><FaYoutube className=" h-[30px] w-[30px] text-red-600"></FaYoutube></p>
                <p className=" deep text-xl text-gray-300 ">You tube</p>
                </div>
                </div>
                </div>
                <div>
                <p className=" deep  text-4xl  ">Contact</p>
                <div className=" mt-10 ">
                <div className=" mt-3 flex items-center gap-2">
                <p><MdLocationOn className=" h-[30px] w-[30px] text-cyan-400"></MdLocationOn></p>
                <p className=" deep  text-gray-300 ">4518 Spirit Drive, Deland,<br></br> Florida, US, 32720</p>
                </div>
                <div className=" mt-3 flex items-center gap-2">
                <p><FaPhoneVolume className=" h-[30px] w-[30px] text-cyan-400"></FaPhoneVolume></p>
                <p className=" deep  text-gray-300 "><span className=" text-cyan-400 ">1-800</span>-123-4567</p>
                </div>
                <div className=" mt-3 flex items-center gap-2">
                <p><MdEdit className=" h-[30px] w-[30px] text-cyan-400"></MdEdit></p>
                <p className=" deep  text-cyan-400 ">DeepSea@gmail.com</p>
                </div>
                </div>
                </div>
                </div>
                <div className="bg p-8">
                <p className=" deep text-center text-white ">© Copyright 2024 All Rights Reserved</p>
                </div>



            
        </div>
    );
};

export default Footer;