import React, { useState, useEffect } from "react";

import iconPin from "../images/spot24_Y.svg";
import iconSearch from "../images/search30.svg";
import Lightbox from "../components/LightBox";
import NewActivitiesList from "../components/NewActivitiesList";
import PopRestaurant from "../components/PopRestaurant";
import PopScenicSpot from "../components/PopScenicSpot";


function Index() {

    return (
      <main>
        <section className="pt-3 md:pt-20 pb-6">
          <div className="container flex flex-col md:flex-row justify-center items-center w-full md:w-auto">
            <div className="mb-8 md:w-1/2">
              <h1 className="text-3xl md:text-5xl leading-normal font-normal text-gray-dark text-center md:text-left mb-4 md:mb-5">
                探索
                <span className="border-yellow text-gay-dark border-b-2">
                  台灣之美
                </span>
                <span className="block md:pt-6">讓我們更親近這片土地</span>
              </h1>
              <p className="text-gray flex justify-center md:justify-start items-center">
                <img src={iconPin} alt="" />
                <span className="pl-1 text-sm md:text-xl">
                  台灣旅遊景點導覽
                </span>
                <span className="pl-1 text-xs md:text-lg font-heroSerif font-bold">
                  Taiwan Travel Guide
                </span>
              </p>
            </div>
            <form className="w-full md:w-1/2">
              <select name="itemSelect" className="w-full border border-gray-100 rounded text-primary-light py-3 pl-7 mb-2">
                <option value="">探索景點</option>
                <option value="">節慶活動</option>
                <option value="">品嚐美食</option>
              </select>
              <label htmlFor="searchInput"></label>
              <input
                id="searchInput"
                placeholder="你想去哪裡？請輸入關鍵字"
                className="w-full bg-gray-light border border-gray-100 rounded placeholder-gray-300 py-3 pl-7 mb-2"
              />
              <button
                type="button"
                className="w-full bg-primary-light rounded text-white py-3 pl-7 mb-2"
              >
                <div className="flex justify-center items-center w-full">
                  <img className="inline pr-4" src={iconSearch} alt="搜尋" />
                  <span>
                    <span className="pr-5">搜</span>尋
                  </span>
                </div>
              </button>
            </form>
          </div>
        </section>
        <section className="space-y-9 mb-20">
          <div className="container space-y-9">
            <Lightbox />
            <NewActivitiesList />
          </div>
          <PopScenicSpot />
          <PopRestaurant />
        </section>

      </main>
    );
  }

export default Index;
