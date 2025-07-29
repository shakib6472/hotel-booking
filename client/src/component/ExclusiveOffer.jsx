import React from "react";
import Title from "./Title";
import { assets, exclusiveOffers } from "../assets/assets";

const ExclusiveOffer = () => {
  return (
    <div className="flex flex-col items-center px-6 md:px-16 lg:px-24 xl:px-32 pt-20 pb-30">
        <div className="flex flex-col md:flex-row items-center justify-between w-full">
            <Title
                title='Exclusive Offer'
                subtitle=' Take advantage of our limited time offers and special packages to enhance your stay and create unforgettable memories'align='left' font='font-playfair'
            />
            <button className='my-16 px-4 py-2 text-sm font-medium border border-gray-300 rounded bg-gray text-black hover:bg-gray-50 transition-all cursor-pointer flex gap-2'>
                View All Offers <img src={assets.arrowIcon} alt="Arrow icon" className=" group-hover:translate-x-1 transition-all" />
            </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 "> 
            {exclusiveOffers.map((item) => (
                <div key={item._id} className="group relative flex flex-col items-start justify-between gap-1 pt-12 md:pt-18 px-4 rounded-xl text-white bg-no-repeat bg-cover bg-center" style={{backgroundImage: `url(${item.image})`}} >
                    <p className="px-3 py-1 absolute top-4 left-4 text-xs bg-white text-gray-800 font-medium rounded-full">{item.priceOff}% Off</p>
                    <div>
                        <p className="text-2xl font-medium font-playfair">{item.title}</p>
                        <p className="">{item.description}</p>
                        <p className="text-xs text-white/70 mt-3">Expired {item.expiryDate}</p> 
                    </div>
                    <button className="flex items-center gap-2 font-medium cursor-pointer mt-4 mb-5">
                        View Offers <img src={assets.arrowIcon} alt="Arrow icon" className=" invert group-hover:translate-x-1 transition-all" />
                    </button>
                </div>
            ))}

        </div>
    </div>
  )
};

export default ExclusiveOffer;
