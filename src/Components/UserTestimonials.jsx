import React from 'react';
import { motion } from 'framer-motion';

const UserTestimonials = () => {
    return (
        <div>
            <section className="bg-gray-50 py-12">
                <div className="container mx-auto">
                    {/* Heading */}
                    <motion.div
                        className="text-center py-8"
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                    >
                        <h2 className="font-bold text-3xl mb-4">Testimonials</h2>
                        <p className="text-gray-600">
                            Our users are at the heart of what we do. Discover their success stories and see how this platform has made a difference in their lives.
                        </p>
                    </motion.div>

                    {/* Testimonials */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
                        {[
                            {
                                id: 1,
                                img: "https://i.ibb.co/wdLxPzt/avatar-5-150x150.png",
                                text: "I found my lost phone easily using this platform! It’s amazing!",
                                name: "Arif Mohammed",
                                location: "Dhaka",
                            },
                            {
                                id: 2,
                                img: "https://i.ibb.co/ySgdCq0/avatar-4-150x150.png",
                                text: "Thanks to this website, I found my lost pet effortlessly!",
                                name: "Sabrina Alam",
                                location: "Chittagong",
                            },
                            {
                                id: 3,
                                img: "https://i.ibb.co/LvFt2Q0/avatar-1-150x150.png",
                                text: "This platform was a lifesaver. Truly brilliant service.",
                                name: "Jayanta Kar",
                                location: "Sylhet",
                            },
                        ].map((testimonial, index) => (
                            <motion.article
                                key={testimonial.id}
                                className="p-6 bg-white rounded-xl shadow-md flex flex-col items-center"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                            >
                                <img
                                    src={testimonial.img}
                                    alt={`${testimonial.name}'s avatar`}
                                    className="w-28 h-28 rounded-full mb-4"
                                />
                                <p className="italic text-center text-gray-700 mb-4">"{testimonial.text}"</p>
                                <h4 className="font-bold text-lg">{testimonial.name}</h4>
                                <span className="text-sm text-gray-500">{testimonial.location}</span>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default UserTestimonials;
