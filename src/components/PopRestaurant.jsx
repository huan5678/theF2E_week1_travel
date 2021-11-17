import React,{useState, useEffect} from 'react';
// import PopCard from './popCard';
import FetchData from '../api/FetchData';
import { IndexTitle } from "./IndexTitle";
import { Swiper,SwiperSlide } from 'swiper/react';
import SwiperCore, { Mousewheel } from "swiper";
import noImage255 from "../images/NoImage-255x200.png";
import pinIcon from "../images/spot16.svg";
import getRandomArray from "./getRandomArray";

SwiperCore.use([Mousewheel]);
import "swiper/css";


const PopRestaurant = () => {
  const [data, setData] = useState([]);
  const [swiper, setSwiper] = useState(null);
  const handleSwiper = (swiper) => {
    setSwiper(swiper);
  };


  useEffect(async() => {
    let city;
    const params = "$top=6&$format=JSON";
    const result = await FetchData("restaurant", city, params);
    let random = getRandomArray(result.data, 6);
    setData(random);
  },[]);


  return (
    <section className="container">
        <IndexTitle props={{ title: "一再回訪美食", target: "/restaurant" }} />
      <Swiper
        spaceBetween={15}
        slidesPerView={2}
        breakpoints={{
          768: {
            width: 768,
            slidesPerView: 4,
          },
        }}
        onInit={(swiper) => {
          handleSwiper(swiper);
        }}
      >
        {data.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <div>
                <div className="overflow-hidden rounded-lg mb-2 max-w-[220px] max-h-40 aspect-w-3 aspect-h-2">
                  <img
                    className="w-full h-full object-cover object-center transition duration-300 md:hover:scale-110"
                    src={item.Picture.PictureUrl1 ?? noImage255}
                    alt={item.Name}
                  />
                </div>
                <h3 className="font-bold text-gray-500 text-lg mb-4">
                  {item.Name}
                </h3>
                <p className="flex">
                  <img className="mr-1" src={pinIcon} alt={item.Name} />
                  <span className="text-gray">{item.City}</span>
                </p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}

export default PopRestaurant;
