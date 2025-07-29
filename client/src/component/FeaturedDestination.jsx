import React from "react";
import {roomsDummyData} from "../assets/assets";
import HotelCard from "./HotelCard";
import Title from "./Title";
import {useNavigate} from "react-router-dom";

const FeaturedDestination = () => {
	const navigate = useNavigate();

	return (
		<div className='flex flex-col items-center px-6 md:px-16 lg:px-24 bg-slate-50 py-20'>
			<Title
				title='Featured Destinations'
				subtitle=' Discover our hand-picked selection of exceptional properties around the world, Offering unparalleled luxury and unforgettable experience'
			/>
			<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-6 mt-20'>
				{roomsDummyData.slice(0, 4).map((room, index) => (
					<HotelCard key={room._id} room={room} index={index} />
				))}
			</div>

			<button className='my-16 px-4 py-2 text-sm font-medium border border-gray-300 rounded bg-black text-white hover:bg-black/80 transition-all cursor-pointer' onClick={() => {navigate("/rooms"); scrollTo(0, 0);}}>
				View All Destination
			</button>
		</div>
	);
};

export default FeaturedDestination;
