import React from "react";

export const Hero = () => {
	return (<div className="flex flex-col items-start  flex-start justify-center px-6 md:px-16 lg:px-24 xl:px-32 text-white bg-[url('/src/assets/heroImage.png')] bg-no-repeat bg-cover h-screen">

        <p className="bg-[#49B9FF]/50 px-3.5 py-1 rounded-full mt-20">The Ultimate Hotel Booking Experience</p>
        <h1 className="font-playfair text-2xl md:text-5xl md:text-[56px] md:leading-[56px] font-bold md:font-extrabold max-w-xl mt-4">Discover Your Perfect Gateway Destination</h1>
        <p className="max-w-130 mt-2 text-sm md:text-base">Unparalleled luxury and comfort await at the world's most exclusive hotels and resorts. Start Your journey today!</p>
        

        </div>);
};

export default Hero;