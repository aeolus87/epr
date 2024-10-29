import React from "react";
import { useNavigate } from "react-router-dom";

export const MapScroll = ({ maps }) => {
  const navigate = useNavigate();

  // Double the maps array to create seamless loop with 11 maps
  const duplicatedMaps = [...maps, ...maps];

  return (
    <div className="relative overflow-hidden w-full">
      {/* Main scrolling container */}
      <div className="relative w-full overflow-hidden py-4">
        <div className="flex animate-slide">
          {duplicatedMaps.map((map, index) => (
            <div
              key={`${map.name}-${index}`}
              className="flex-shrink-0 w-[280px] mx-3 bg-gradient-to-br from-gray-900 to-[#484835] rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="relative h-40">
                <img
                  src={map.image}
                  alt={map.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = "/placeholder-map.jpg";
                  }}
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold text-white text-center ">
                  {map.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Gradient overlays for smooth fade effect */}
      <div className="absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-black to-transparent pointer-events-none z-10" />
      <div className="absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-black to-transparent pointer-events-none z-10" />

      {/* Vote button */}
      <div className="flex justify-center mt-8">
        <button
          onClick={() => navigate("/maps-poll-analytics")}
          className="px-8 py-3 bg-[#b69200] hover:bg-[#947800]  rounded-lg font-bold text-lg shadow-lg transform  transition-transform duration-300"
        >
          VOTE NOW
        </button>
      </div>
    </div>
  );
};

export default MapScroll;
