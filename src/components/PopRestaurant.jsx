import React,{useState, useEffect} from 'react';
import PopCard from './popCard';
import useFetchData from '../api/useFetchData';
import { IndexTitle } from "./IndexTitle";
import Swiper from 'swiper';
import { SwiperSlide } from 'swiper/react';
import SwiperCore, { Mousewheel } from "swiper";

import "swiper/css";

SwiperCore.use([Mousewheel]);


const PopRestaurant = () => {
  const [data, setData] = useState([]);
  const [swiper, setSwiper] = useState(null);
  const handleSwiper = (swiper) => {
    setSwiper(swiper);
  };

  useEffect(() => {
    let city;
    const params = "$top=6&$format=JSON";
    useFetchData("restaurant", city, params).then((res) => setData(res.data));
    }, []);


  return (
    <section>
      <IndexTitle props={{ title: "一再回訪美食", target: "/restaurant" }} />
      <Swiper
        spaceBetween={15}
        onInit={(swiper) => {
          handleSwiper(swiper);
        }}
      >
        {data.map((item) =>
          render(
            <SwiperSlide key={item.id}>
              <li>
                <PopCard props={item} />
              </li>
            </SwiperSlide>
          )
        )}
      </Swiper>
    </section>
  );
}

export default PopRestaurant;
