import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa";
// import { AuthContext } from '../../Provider/AuthProvider';

const LogIn = () => {
    // const {handleGoogleSinInAuth, setUser,userLoginAuth} = useContext(AuthContext)
    const [show, setShow] = useState(false)
    const [error, setError] = useState({})
    
    // form handle method
    const handleLoginForm = e =>{
    }

//    google Login method 
    const handleGooleSingIn = () =>{
        // handleGoogleSinInAuth()
        // .then(res => {
        //     const  user = res.user;
        //     setUser(user)
        // })

    }
    return (
        <div>
            <div className=' mx-auto w-11/12 '>
                <div
                    className="hero py-12"
                    style={{
                        backgroundImage: "url(https://i.ibb.co.com/dBQJyTR/banner3.jpg)",
                    }}>


                    <div className="hero-content  p-12 rounded-xl flex flex-col lg:flex-row md:flex-row gap-12 bg-lime-100 text-center">
                        <div className=""><img src='https://i.ibb.co.com/dBQJyTR/banner3.jpg' alt="" className="rounded-lg h-80 w-80" /></div>
                        <div className="max-w-md text-left">
                        {/* login section */}

                            <div className="card p-4 w-full max-w-lg py-12">
                                <h2 className="text-3xl font-bold text-center mb-6 ">Welcome Back Login Now !!</h2>
                                <form onSubmit={handleLoginForm} className="card-body border-2 border-white bg-green-100  p-4 rounded-xl">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control relative">
                                        <label className="label">
                                            <span className="label-text">Password</span>
                                        </label>
                                        <input type={show ? 'text' : 'password'}
                                            name='password' placeholder="password" className="input input-bordered" required />

                                        <button type='button' onClick={() => setShow(!show)} className="btn btn-xs absolute right-4 top-12">{
                                            show ? <FaEyeSlash /> : <FaEye />
                                        } </button>
                                        {
                                            error.login &&
                                            <label className="label text-red-500 font-bold">{error.login}</label>


                                        }
                                        <label className="label">

                                            <Link to={'/forget'} className="label-text-alt link link-hover">Forgot password?</Link>
                                        </label>
                                    </div>
                                    <div className="form-control mt-6">
                                        <button className="btn btn-primary">Login</button>
                                    </div>
                                    <button type='button' onClick={handleGooleSingIn} className='btn btn-primary btn-outline mt-4'><FcGoogle className='text-xl' /> Google Login Now </button>
                                <p className=" text-center"> Don’t have an account? <Link to={'/register'} className='text-red-500 font-bold'>Register Here </Link> </p>
                                </form>

                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default LogIn;