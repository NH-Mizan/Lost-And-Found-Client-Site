import React, { useContext, useEffect, useState } from 'react';
import { FcGoogle } from "react-icons/fc";
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';


const Register = () => {
    const [show, setShow] = useState(false)
    const [error, setError] = useState()
    const navigate = useNavigate()
    const { handleGoogleSinInAuth, setUser, createUserAuth, updateUserDashboard, setLoder} = useContext(AuthContext)
    useEffect(() => {
        document.title = "Register || Find It Zone"
    }, [])
    // handle register Form method===========
    const handleRegisterForm = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;

        if (!/[A-Z]/.test(password)) {
            setError("Password must contain at least one uppercase letter.");
            return
        }
        if (!/[a-z]/.test(password)) {
            setError("Password must contain at least one lowercase letter.");
            return
        }
        if (password.length < 6) {
            setError("Password must be at least 6 characters long.");
            return
        }



        createUserAuth(email, password)
            .then(res => {

                const user = res.user;
                // setUser(user)
                updateUserDashboard({ displayName: name, photoURL: photo })

                    .then(() => {
                        setUser((prev) => {
                            return { ...prev, displayName: name, photoURL: photo }
                            
                        })
                        setLoder(false)
                        navigate('/')
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "Your work has been saved",
                            showConfirmButton: false,
                            timer: 1500
                          });
                          

                    })
                    .catch((error) => {
                        const errorCode = error.code;
                        const errorMessage = error.message;
                    });
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });

    }


    // handle Google button method ============

    const handleGooleSingIn = () => {
        handleGoogleSinInAuth()
            .then(res => {
                const user = res.user;
                setUser(user)

         
                setLoder(false)
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your work has been saved",
                    showConfirmButton: false,
                    timer: 1500
                  });
                  navigate("/")
                  
            })
    }

    return (
        <div className=' mx-auto w-11/12 '>
            <div
                className="hero py-12"
                style={{
                    backgroundImage: "url(https://i.ibb.co.com/dBQJyTR/banner3.jpg)",
                }}>



                <div className="card bg-base-100 w-full max-w-lg py-12 shrink-0 shadow-2xl">
                    <h2 className="text-3xl font-bold text-center ">Join Our Mission !!</h2>

                    <form onSubmit={handleRegisterForm} className="card-body">
                        <label className="input input-bordered flex items-center my-2 gap-4">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="h-4 w-4 opacity-70">
                                <path
                                    d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                            </svg>
                            <input type="text" name='name' className="grow" placeholder="Username" required />
                        </label>
                        <label className="input input-bordered flex items-center my-2 gap-4">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="h-4 w-4 opacity-70">
                                <path
                                    d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                            </svg>
                            <input type="text" name='photo' className="grow" placeholder="Photo URL" required />
                        </label>

                        <label className="input input-bordered flex items-center my-2 gap-4">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="h-4 w-4 opacity-70">
                                <path
                                    d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                                <path
                                    d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                            </svg>
                            <input type="email" name='email' className="grow" placeholder="Email" required />
                        </label>

                        <div className="form-control relative my-2">

                            <input type={show ? 'text' : 'password'}
                                name='password' placeholder="password" className="input input-bordered" required />

                            <button type='button' onClick={() => setShow(!show)} className="btn btn-xs absolute right-4 top-3">{
                                show ? <FaEyeSlash /> : <FaEye />
                            } </button>
                        </div>
                        <label className="label text-red-500 font-bold">{error}</label>

                        <button className='btn btn-info'>Submit Now </button>

                        <button type='button' onClick={handleGooleSingIn} className='btn btn-info btn-outline mt-4'><FcGoogle className='text-xl' /> Google Login Now </button>
                    </form>


                    <p className=" text-center"> Already have an account? <Link to={'/login'} className='text-red-500 font-bold'>Login Now </Link> </p>



                </div>
            </div>
        </div>

    );
};

export default Register;