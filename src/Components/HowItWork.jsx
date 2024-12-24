import React from 'react';

const HowItWork = () => {
    return (
        <div>
    
            <section class="bg-white py-8">
                <div class="container mx-auto">
                   
                <div className="text-center py-12 ">
                      
                      <h2 className='font-bold text-3xl mb-4 '>How It Works </h2>
                      <p > Follow these simple steps to reconnect with your lost belongings or help others recover their items. It's fast, secure, and hassle-free. </p>
                  </div>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div class="text-center border-2 bg-green-100 border-red-300 rounded-xl p-4">
                        <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="Step 3" class="mx-auto w-28 h-28 rounded-full mb-4" />
                            <h3 class="font-bold">Step 1</h3>
                            <p>Create an account and log in.</p>
                        </div>
                        <div class="text-center border-2 bg-red-100 border-red-300 rounded-xl p-4">
                        <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="Step 3" class="mx-auto w-28 h-28 rounded-full mb-4" />
                            <h3 class="font-bold">Step 2</h3>
                            <p>Post details of your lost or found item.</p>
                        </div>
                        <div class="text-center border-2 bg-lime-200 border-red-300 rounded-xl p-4">
                            <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="Step 3" class="mx-auto w-28 h-28 rounded-full mb-4" />
                            <h3 class="font-bold">Step 3</h3>
                            <p>Recover or connect with the rightful owner.</p>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default HowItWork;