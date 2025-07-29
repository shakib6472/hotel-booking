import React from "react";
import Title from "../component/Title";
import { assets, roomsDummyData } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import StartRating from "../component/StartRating";

const AllRooms = () => {
    const navigate = useNavigate();
	return (
		<div className='flex flex-col-reverse lg:flex-row items-start justify-between pt-28 md:pt-35 px-4 md:px-16 lg:px-24'>
			<div>  
                <Title title="All Rooms" subtitle=" Take advantage of our limited time offers and special packages to enhance your stay and create unforgettable memories" font="font-playfair" align='left' />

                {roomsDummyData.map((room) => (
                    <div> 
                        <img src={room.images[0]} alt="hotel-img" title="View Room Details" className="max-h-65 md:w-1/2 rounded-xl shadow-lg object-cover cursor-pointer" onClick={() => {navigate(`/rooms/${room._id}`);  scrollTo(0, 0);}}/>
                        <div className="md:w1/2 flex flex-col gap-2">
                            <p className="text-gray-500">{room.hotel.city}</p>
                            <p onClick={() => {navigate(`/rooms/${room._id}`);  scrollTo(0, 0);}} className="text-gray-800 text-3xl font-playfair cursor-pointer">{room.hotel.name}</p>
                            <div className="flex items-center  ">
                                <StartRating rating={room.hotel.rating} />
                                <p className="ml-2">200+ reviews</p>
                            </div>
                            <div className="flex items-center gap-1 text-gray-500 mt-2">
                                <img src={assets.locationIcon} alt="Location Icon"  />
                                <span>{room.hotel.address}</span>
                            </div>
                        </div>
                    </div>

                ))}
            </div>


            {/* Filters */}
			<div>

            </div>
		</div>
	);
};

export default AllRooms;
