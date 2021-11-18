
import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import  CityContext  from "../context/CityContext";

function ScenicSpot() {

  const [city, setCity] = useState('');
  const [date, setDate] = useState('');
  const [themes, setTheme] = useState([]);
  const cities = useContext(CityContext);
  console.log(typeof cities);

return (
  <section className="container pt-6 pb-15">
    <CityContext>
    <nav>
      <Link className="text-primary" to="/">
        首頁
      </Link>
      <span>/</span>
      <Link className="text-gray" to="/scenic">
        探索景點
      </Link>
    </nav>
    <form className="flex flex-wrap space-y-2">
      <div>
        <label htmlFor="City">全部縣市</label>
        <select
          name="City"
          className="w-full border border-gray-100 rounded placeholder-primary-light py-3 pl-7 mb-2"
          onChange={(e) => setCity(e.target.value)}
        >
            <option value="all">全部縣市</option>
        </select>
        </div>
        <div>
          <label htmlFor="Date">選擇日期</label>
          <input
            id="Date"
            type="date"
            className="w-full bg-gray-light border border-gray-100 rounded placeholder-primary-light py-3 pl-7 mb-2"
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="Theme">選擇主題</label>
          <select
            name="Theme"
            className="w-full border border-gray-100 rounded placeholder-primary-light py-3 pl-7 mb-2"
            onChange={(e) => setTheme(e.target.value)}
          >
            <option value="all">全部主題</option>
          </select>
        </div>
    </form>
    </CityContext>
    <h1 className="font-light text-gray-dark text-2xl">熱門主題</h1>
  </section>
);
};

export default ScenicSpot;
