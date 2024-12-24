import React, { useEffect, useState } from 'react';

const Banner = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const slides = [
        {
            title: "IdeaBloom: Cultivating Creativity for a Better World",
            image: "https://i.ibb.co.com/fD4QyfQ/downloadbuss.jpg",
            description: "IdeaBloom nurtures bold ideas that can change the world. Join us in empowering dreamers to transform their creative visions into meaningful impact."
        },
        {
            title: "Hope for Healing: Together We Save Lives",
            image: "https://i.ibb.co.com/K7fQqbh/images-Madecal.jpg",
            description: "Every life matters. This campaign aims to provide critical medical assistance to those who need it most. From funding life-saving surgeries to ensuring access to essential medicines, your contribution can make the difference between despair and hope."
        },
        {
            title: "LaunchPad: Empowering Tomorrow’s Entrepreneurs",
            image: "https://i.ibb.co.com/G0D1WxL/images4.jpg",
            description: "LaunchPad is a hub for visionaries and dreamers. With your support, we’ll empower small businesses to rise, innovate, and redefine industries for a brighter economic future."
        },
        {
            title: "NextGen Ventures: Fueling Innovation, One Idea at a Time",
            image: "https://i.ibb.co.com/2KHfr7R/images3.jpg",
            description: "NextGen Ventures supports bold entrepreneurs with innovative ideas. We’re on a journey to discover and nurture the next big thing in the business world."
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
