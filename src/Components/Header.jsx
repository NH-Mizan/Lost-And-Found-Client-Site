import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import { FaRegUserCircle } from "react-icons/fa";



const Header = () => {
    const {user,  logOut } = useContext(AuthContext)
    console.log(user)
    // console.log(user)
   

    const [mode, setMode] = useState("light");
    // Apply theme to the document

    const toggleTheme = () => {
        const html = document.documentElement;

        if (mode == "light") {
            // html.classList.remove("light");
            html.removeAttribute('data-theme')
            html.setAttribute('data-theme', "dark")
            setMode("dark");
            localStorage.setItem("mode", "dark");
        } else {
            html.removeAttribute('data-theme')
            html.setAttribute('data-theme', "light")
            setMode("light");
            localStorage.setItem("mode", "light");
        }

    };
    useEffect(() => {
        const currentMode = localStorage.getItem("mode") || "light";
        document.documentElement.classList.add(currentMode);
        setMode(currentMode);
    }, []);

    return (
        <div>
            <div className=" stiky top-0">
                <div className="navbar w-11/12 mx-auto itrms-center flex ">
                    <div className="navbar-start">

                     <div className="flex items-center
                     ">
                     <img src="https://i.ibb.co.com/rv1zsFf/images.jpg" alt="" className="lg:w-22 w-8 rounded-lg" />
                     <h2 className='font-bold text-xl'> Find<span className='text-orange-500'>It</span>Zone</h2>
                     </div>

                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                <li>
                                    <NavLink to={'/'}> Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/lost&found'}> Lost & Found Items </NavLink>
                                </li>


                            </ul>
                        </div>
                    </div>
                    



                    <div className="navbar-end">
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 flex gap-2 text-lg font-bold">

                            <li>
                                <NavLink to={'/'}> Home</NavLink>
                            </li>
                            <li>
                                <NavLink to={'/lost&found'}> Lost & Found Items </NavLink>
                            </li>


                        </ul>

                    </div>
                        <label className="grid cursor-pointer mr-4 place-items-center">
                            <input
                                type="checkbox"

                                onChange={toggleTheme}
                                className="toggle theme-controller bg-base-content col-span-2 col-start-1 row-start-1" />
                            <svg
                                className="stroke-base-100 fill-base-100 col-start-1 row-start-1"
                                xmlns="http://www.w3.org/2000/svg"
                                width="14"
                                height="14"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round">
                                <circle cx="12" cy="12" r="5" />
                                <path
                                    d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                            </svg>
                            <svg
                                className="stroke-base-100 fill-base-100 col-start-2 row-start-1"
                                xmlns="http://www.w3.org/2000/svg"
                                width="14"
                                height="14"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round">
                                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                            </svg>
                        </label>


                       {
                        user?(
                            <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img
                                        title={user?.displayName}
                                        alt="Tailwind CSS Navbar component"
                                        src={user?.photoURL } />
                                </div>

                            </div>
                            <ul
                                tabIndex={0}

                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-4 font-bold text-md shadow">


                                <li><NavLink to={'/addItems'}>Add Lost & Found </NavLink></li>
                                <li><NavLink to={'/allRecovered '}>All Recovered Item </NavLink></li>
                                <li><NavLink to={'/manageItems'}>Manage My Items</NavLink></li>


                            </ul>
                        </div>
                        ):
                        (
                            <div  className=" rounded-full">
                                   <FaRegUserCircle className='text-3xl'/>
                                </div>
                        )
                       }

                        <div className="">
                            {
                                user?
                                 <button onClick={logOut} className='btn btn-outline ml-2'>LogOut</button>
                                 :
                                 <Link to={'/logIn'} className='btn btn-outline ml-2'>LogIn</Link>
                            }
                            
                           
                            
                        </div>


                    </div>

                </div>

            </div>


        </div >
    );
};

export default Header;