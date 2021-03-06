import React, { useState, useEffect, useContext} from "react";
import { Link } from "react-router-dom";
import FetchData from "../api/FetchData";
import { IndexTitle } from "./IndexTitle";

import { iconContext } from "../context/Context";

const NewActivitiesList = () => {
  const { noImage255 } = useContext(iconContext);
  const [data, setData] = useState([]);
  //$filter=Picture%2FPictureUrl1%20ne%20null%20&$orderby=StartTime%20desc%2CUpdateTime&$top=4&$format=JSON
  useEffect(() => {
    let city;
    const params = `$orderby=StartTime%20desc%2CUpdateTime&$top=4`;
    FetchData("activity", city, params).then((res) => setData(res.data));
  }, []);
  return (
    <section className="container">
      <IndexTitle props={{ title: "近期活動",target: "/activity"}}></IndexTitle>
      <ul>
        {data.map((item, index) => (
          <li className="mb-4" key={item.ID}>
            <Link to={`/activity/${item.ID}`}>
              <div className="flex items-center gap-4">
                <img
                  className="max-h-16 w-24 object-cover object-center rounded-nr"
                  src={
                    item.Picture.PictureUrl1?? noImage255
                  }
                  alt={item.ActivityName}
                />
                <div className="flex flex-col">
                  <p className="text-gray text-xs">
                    {item.StartTime.slice(0, 10)} - {item.EndTime.slice(0, 10)}
                  </p>
                  <h3 className="line-clamp-1 text-gray-500 font-bold">
                    {item.Name}
                  </h3>
                  <p className="text-gray text-xs">{item.City}</p>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default NewActivitiesList;
