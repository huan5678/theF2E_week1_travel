import React from 'react';
import noImage255 from "../images/NoImage-255x200.png";
import pinIcon from "../images/spot16.svg";

const PopCard = (item) => {
    <div>
      <div className="overflow-hidden rounded-lg mb-2">
        <img
          className="w-full h-full object-cover object-center transition duration-300 md:hover:scale-110 max-w-[220px]"
          src={item.Picture.PictureUrl1 ?? noImage255}
          alt={item.Name}
        />
      </div>
      <h3 className="font-bold text-gray-500 text-lg mb-4 line-clamp-1">{item.Name}</h3>
      <p className="flex">
        <img className="mr-1" src={pinIcon} alt={item.Name} />
        <span className="text-gray">{item.City}</span>
      </p>
    </div>
}

export default PopCard;
