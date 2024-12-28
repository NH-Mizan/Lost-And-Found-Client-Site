import React, { useEffect, useState } from 'react';

const Banner = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const slides = [
        {
            title: "Every Item Deserves a Home!",
            image: "https://i.ibb.co.com/DD8Btnf/download-8.jpg",
            description: "Join us in making lost and found easy. Explore FindItZone to browse, post, and recover belongings—all at your fingertips.."
        },
        {
            title: "Your Go-To Lost & Found Solution!",
            image: "https://i.ibb.co.com/3NrBSTp/download-9.jpg",
            description: "From misplaced treasures to unexpected finds, FindItZone bridges the gap. Start your search or share what you've discovered now!"
        },
        {
            title: "Lost Something? Find It Here!",
            image: "https://i.ibb.co.com/nk8ymd2/images-5.jpg",
            description: "Discover a reliable way to reunite with your lost valuables or report items you've found. Connect with your community through FindItZone today!"
        },
       
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
        }, 6000);

        return () => clearInterval(interval);
    }, [slides.length]);

    return (
        <div className="relative overflow-hidden w-full max-w-full mx-auto h-full pb-8 mt-4">
            {/* Carousel Content */}
            <div
                className="flex transition-transform duration-1000"
                style={{
                    transform: `translateX(-${currentIndex * 100}%)`,
                }}
            >
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className="relative w-full h-[80vh] flex-shrink-0"
                    >
                        {/* Background Image */}
                        <img
                            src={slide.image}
                            alt={`Slide ${index + 1}`}
                            className="w-full h-[80vh]  rounded-xl"
                        />
                        {/* Title and Description */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white p-6">
                            <h2 className="text-4xl font-bold mb-4">{slide.title}</h2>
                            <p className="text-lg max-w-2xl">{slide.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Navigation Buttons */}
            <div className="absolute inset-0 flex items-center justify-between px-4">
                <button
                    className="btn btn-circle bg-white text-black"
                    onClick={() =>
                        setCurrentIndex((prevIndex) =>
                            prevIndex === 0 ? slides.length - 1 : prevIndex - 1
                        )
                    }
                >
                    ❮
                </button>
                <button
                    className="btn btn-circle bg-white text-black"
                    onClick={() =>
                        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length)
                    }
                >
                    ❯
                </button>
            </div>

            {/* Indicators */}
            <div className="flex justify-center mt-4 space-x-2">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        className={`btn btn-xs ${currentIndex === index ? "bg-warning" : "bg-gray-300"
                            }`}
                        onClick={() => setCurrentIndex(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Banner;
