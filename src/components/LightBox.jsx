import React, { useState, useEffect} from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import FetchData from "../api/FetchData";
import getRandomArray from "./getRandomArray";

import dotUnselectIcon from '../images/Dot_unselect.svg';
import dotSelectedIcon from '../images/Dot_selected.svg';
import arrowLeftIcon from '../images/Arrow-Left.svg';
import arrowLeftDisIcon from '../images/Arrow-Left_disable.svg';
import arrowLeftHoverIcon from '../images/Arrow-Left_hover.svg';
import arrowRightIcon from '../images/Arrow-Right.svg';
import arrowRightDisIcon from '../images/Arrow-Right_disable.svg';
import arrowRightHoverIcon from '../images/Arrow-Right_hover.svg';


import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./swiper.css"

import SwiperCore, {
  Navigation,
  Pagination,
  Mousewheel,
} from "swiper";

SwiperCore.use([Pagination, Navigation, Mousewheel]);

const Lightbox = () => {
  const [data, setData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [swiper, setSwiper] = useState(null);

  const handlePrev = () => {
    if (currentIndex === 0) {
      return;
    }
    swiper.slidePrev();
  };

  const handleNext = () => {
    if (currentIndex === data.length - 1) {
      return;
    }
    swiper.slideNext();
  };

  const handleSwiper = (swiper) => {
    setSwiper(swiper);
  };

  const handleIndexChange = (index) => {
    setCurrentIndex(index);
  };


  useEffect(async() => {
      const params = `$format=JSON`;
      let city;
      const result = await FetchData("scenicSpot", city, params);
      let random = getRandomArray(result.data, 6);
    setData(random);
  },[]);

  const paginationCheck = () => {
    const dotUnselect = document.querySelectorAll(".swiper-pagination-bullet>img");
    const dotSelected = document.querySelector(
      ".swiper-pagination-bullet-active>img"
    );
    if (dotSelected != undefined) {
      dotUnselect.forEach((item) => {
        item.src = dotUnselectIcon;
      });
    dotSelected.src = dotSelectedIcon;
    }
  }

  useEffect(() => {
    if (swiper) {
      swiper.on("slideChange", () => {
        handleIndexChange(swiper.activeIndex);
      });
    }
    paginationCheck();
  }, [currentIndex,swiper]);

  return (
    <Swiper
      spaceBetween={15}
      pagination={{
        clickable: true,
        renderBullet: (idx, className) =>
          `<span className=${className}><img src=${
            currentIndex === idx ? dotSelectedIcon : dotUnselectIcon
          } /></span>`,
      }}
      onInit={(swiper) => {
        handleSwiper(swiper);
        swiper.navigation.init();
        swiper.navigation.update();
        swiper.pagination.update();
      }}
    >
      {data.map((item, idx) => {
        return (
          <SwiperSlide key={item.ID}>
            <div
              className="rounded-md flex justify-center items-center h-[185px] md:h-[400px] bg-center bg-no-repeat bg-cover"
              style={{
                backgroundImage: `url(${item.Picture.PictureUrl1})`,
              }}
            >
              <p className="text-white md:text-2xl">{`${item.City} | ${item.Name}`}</p>
            </div>
          </SwiperSlide>
        );
      })}
      <div className="w-full px-5 md:px-10 hidden md:flex justify-between items-center absolute top-1/2 -translate-y-1/2 z-20">
        <div
          className={`${
            currentIndex === 0 ? "" : "cursor-pointer"
          }`}
        >
          <img
            id="arrowLeftIcon"
            src={currentIndex === 0 ? arrowLeftDisIcon : arrowLeftIcon}
            onClick={handlePrev}
            onMouseOver={(e) =>
              currentIndex === 0
                ? arrowLeftDisIcon
                : (e.currentTarget.src = arrowLeftHoverIcon)
            }
            onMouseOut={(e) =>
              currentIndex === 0
                ? arrowLeftDisIcon
                : (e.currentTarget.src = arrowLeftIcon)
            }
            alt="arrowLeft"
            className=""
            draggable="false"
          />
        </div>
        <div
          className={`${
            currentIndex === data.length - 1 ? "" : "cursor-pointer"
          }`}
        >
          <img
            id="arrowRightIcon"
            src={
              currentIndex === data.length - 1
                ? arrowRightDisIcon
                : arrowRightIcon
            }
            onClick={handleNext}
            onMouseOver={(e) =>
              currentIndex === data.length - 1
                ? arrowRightDisIcon
                : (e.currentTarget.src = arrowRightHoverIcon)
            }
            onMouseOut={(e) =>
              currentIndex === data.length - 1
                ? arrowRightDisIcon
                : (e.currentTarget.src = arrowRightIcon)
            }
            alt="arrowRight"
            className=""
            draggable="false"
          />
        </div>
      </div>
    </Swiper>
  );
}

export default Lightbox;
