import React from 'react';
import { NavLink } from 'react-router';
const NavBar = () => {
    const Links = <>
        <li>
            <NavLink className={({ isActive }) => `font-semibold mr-4 ${(
                isActive ? "text-green-400 border-2 border-green-400" : ""
            )}`} to='/'> Home</NavLink></li>
        <li>
            <NavLink className={({ isActive }) => `font-semibold mr-4 ${(
                isActive ? "text-green-400 border-2 border-green-400" : ""
            )}`} to='/BookPage'>Listed Books</NavLink></li>
        <li>
            <NavLink className={({ isActive }) => `font-semibold mr-4 ${(
                isActive ? "text-green-400 border-2 border-green-400" : ""
            )}`} to='/MeterPage'>Pages to Read</NavLink></li>
    </>
    return (
        <>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 font-bold text-[#23BE0A]" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {Links}
                        </ul>
                    </div>
                    <a className=" text-2xl font-bold">Book Vibe</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {Links}
                    </ul>
                </div>
                <div className="navbar-end ">
                    <a className="btn bg-[#23BE0A] mr-4 px-7 py-4 font-semibold text-white outline-none border-none">Sign In</a>
                    <a className="btn bg-[#59C6D2] mr-4 px-7 py-4 font-semibold text-white outline-none border-none">Sign Up</a>

                </div>
            </div>
        </>
    );
};

export default NavBar;