import React from 'react';
import { motion } from 'framer-motion';

const HowItWork = () => {
    return (
        <div>
            <section className="bg-white py-8">
                <div className="container mx-auto">
                    {/* Heading */}
                    <motion.div
                        className="text-center py-12"
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                    >
                        <h2 className="font-bold text-3xl mb-4">How It Works</h2>
                        <p>Follow these simple steps to reconnect with your lost belongings or help others recover their items. It's fast, secure, and hassle-free.</p>
                    </motion.div>

                    {/* Steps */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Step 1 */}
                        <motion.div
                            className="text-center border-2 bg-green-100 border-red-300 rounded-xl p-6"
                            whileHover={{ scale: 1.05 }}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                        >
                            <img
                                src="https://i.ibb.co/nQ0XZNM/images-1.jpg"
                                alt="Create Account"
                                className="mx-auto w-28 h-28 rounded-full mb-4"
                            />
                            <h3 className="font-bold text-lg mb-2">Step 1</h3>
                            <p>Create an account and log in.</p>
                        </motion.div>

                        {/* Step 2 */}
                        <motion.div
                            className="text-center border-2 bg-red-100 border-red-300 rounded-xl p-6"
                            whileHover={{ scale: 1.05 }}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            <img
                                src="https://i.ibb.co/k6bj6qq/img3.jpg"
                                alt="Post Details"
                                className="mx-auto w-28 h-28 rounded-full mb-4"
                            />
                            <h3 className="font-bold text-lg mb-2">Step 2</h3>
                            <p>Post details of your lost or found item.</p>
                        </motion.div>

                        {/* Step 3 */}
                        <motion.div
                            className="text-center border-2 bg-lime-200 border-red-300 rounded-xl p-6"
                            whileHover={{ scale: 1.05 }}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                        >
                            <img
                                src="https://i.ibb.co/yhHmXJp/images-4.jpg"
                                alt="Connect with Owner"
                                className="mx-auto w-28 h-28 rounded-full mb-4"
                            />
                            <h3 className="font-bold text-lg mb-2">Step 3</h3>
                            <p>Recover or connect with the rightful owner.</p>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HowItWork;
