import { NavLink } from "react-router-dom";


const Nav = () => {

   const  nav = <>
   
    <li className=" sea text-white hover:border-[1px] border-cyan-400 " ><NavLink  to='/' >HOME</NavLink></li>
    <li className=" sea text-white hover:border-[1px] border-cyan-400 " ><NavLink  to='/about' >ABOUT</NavLink></li>
    <li className=" sea text-white hover:border-[1px] border-cyan-400 " ><NavLink  to='/service' >SERVICE</NavLink></li>
    <li className=" sea text-white hover:border-[1px] border-cyan-400 " ><NavLink  to='/work' >WORK</NavLink></li>
    <li className=" sea text-white hover:border-[1px] border-cyan-400 " ><NavLink  to='/page' >PAGE</NavLink></li>
    <li className=" sea text-white hover:border-[1px] border-cyan-400 " ><NavLink  to='/blog' >BLOG</NavLink></li>
    <li className=" sea text-white hover:border-[1px] border-cyan-400 " ><NavLink  to='/contact' >CONTACT</NavLink></li>
   
   
   
   
   </>





    return (
        <div>


        <div className="navbar bg-black shadow p-10">
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className=" text-white btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className=" bg-black menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
               {nav}
              </ul>
            </div>
            <div className=" flex items-center gap-2 ">
               
            <img className=" h-[50px] " src="https://webdesign-finder.com/deepdigital-ai-v2/wp-content/uploads/2023/06/logo_AI.png" alt="" />
            <a className=" text-2xl sea text-white  ">Deep <span className=" text-[#40F8FF] ">Sea</span></a>

            </div>
            
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
            {nav}
            </ul>
          </div>
          <div className="navbar-end">
            <a className=" text-xl sea text-white"><span className=" text-[#40F8FF] ">01950</span>374409</a>
          </div>
        </div>
            
        </div>
    );
};

export default Nav;