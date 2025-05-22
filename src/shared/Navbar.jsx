import logo from "../assets/software-logo.svg";
import { IoCallOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className="navbar backdrop-blur-lg shadow-sm px-8 bg-gradient-to-tr from-[#1A1A1A] to-[#391060] py-4">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li className="hover:text-[#F4CB0A]">
              <a>Home</a>
            </li>
            <li className="hover:text-[#F4CB0A]">
              <a>Services</a>
            </li>
            <li className="hover:text-[#F4CB0A]">
              <a>Pages</a>
            </li>
            <li className="hover:text-[#F4CB0A]">
              <a>Portfolio</a>
            </li>
            <li className="hover:text-[#F4CB0A]">
              <a>Contact Us</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">
          <img
            src={logo}
            alt=""
            className="w-[95%] h-[95%] lg:w-[130%] lg:h-[130%]"
          />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li className="hover:text-[#F4CB0A]">
            <a>Home</a>
          </li>
          <li className="hover:text-[#F4CB0A]">
            <a>Services</a>
          </li>
          <li className="hover:text-[#F4CB0A]">
            <a>Pages</a>
          </li>
          <li className="hover:text-[#F4CB0A]">
            <a>Portfolio</a>
          </li>
          <li className="hover:text-[#F4CB0A]">
            <a>Contact Us</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end flex items-center gap-8">
        <div className="flex items-center gap-4">
          <div className="hidden lg:block md:block border-r-2 pr-4 border-gray-500">
            <IoCallOutline className="w-8 h-8" />
          </div>
          <div>
            <h2 className="hidden lg:block md:hidden text-md text-gray-400">
              To More Inquiry
            </h2>
            <p className="hidden lg:block md:hidden text-lg font-semibold">
              +990-737 621 432
            </p>
          </div>
        </div>
        <a className="btn text-black bg-white lg:px-10 lg:py-7 text-xs px-2 py-1 lg:text-[14px] font-semibold rounded-full">
          Get in Touch
        </a>
      </div>
    </div>
  );
};

export default Navbar;
