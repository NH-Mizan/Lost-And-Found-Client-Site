import React from 'react';

const UserTestimonials = () => {
    return (
        <div>
            <section class="bg-gray-50 py-8">
                <div class="container mx-auto">

                    <div className="text-center py-12 ">
                      
                        <h2 className='font-bold text-3xl mb-4 '>User Testmonials </h2>
                        <p >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis impedit deleniti ipsam, delectus maxime fuga. Eius totam atque hic quasi </p>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-12 px-4">
                        <div class="p-4 bg-white rounded-xl shadow-md">
                            <div className="items-center justify-center flex ">
                            <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="" className='w-44 h-44 rounded-full mb-4 ' />
                            </div>
                            <p>"I found my lost phone easily using this platform! It’s amazing!"</p>
                            <h4 class="font-bold mt-2">Arif Mohammed</h4>
                            <span class="text-gray-500 text-sm">Dhaka</span>
                        </div>
                        <div class="p-4 bg-white rounded-xl shadow-md">
                        <div className="items-center justify-center flex ">
                            <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="" className='w-44 h-44 rounded-full mb-4 ' />
                            </div>
                            <p>"Thanks to this website, I found my lost pet effortlessly!"</p>
                            <h4 class="font-bold mt-2">Sabrina Alam</h4>
                            <span class="text-gray-500 text-sm">Chittagong</span>
                        </div>
                        <div class="p-4 bg-white  rounded-xl shadow-md">
                        <div className="items-center justify-center flex ">
                            <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="" className='w-44 h-44 rounded-full mb-4 ' />
                            </div>
                            <p>"This platform was a lifesaver. Truly brilliant service."</p>
                            <h4 class="font-bold mt-2">Jayanta Kar</h4>
                            <span class="text-gray-500 text-sm">Sylhet</span>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default UserTestimonials;