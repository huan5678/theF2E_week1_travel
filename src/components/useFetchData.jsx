import { useState, useEffect } from "react";
import axios from "axios";
import jsSHA from "jssha";

let AppID = import.meta.env.VITE_TEST_API;
let AppKey = import.meta.env.VITE_TEST_API;
let GMTString = new Date().toGMTString();


let ShaObj = new jsSHA("SHA-1", "TEXT");
ShaObj.setHMACKey(AppKey, "TEXT");
ShaObj.update(`x-date: ${GMTString}`);
let HMAC = ShaObj.getHMAC("B64");
const myHeaders = new Headers();
myHeaders.append("Accept", "application/json");
myHeaders.append(
  "Authorization",
  `hmac username=\"${AppID}\", algorithm="hmac-sha1", headers="x-date", signature=\"${HMAC}\"`
);
myHeaders.append("x-date", GMTString);
myHeaders.append("Accept-Encoding", "gzip");

const requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow",
};

const baseUrl = "https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot?$top=30&$format=JSON";

console.log(requestOptions)

const useFetchData = (props) => {
  const [data, setData] = useState({ hits: [] });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [url, setUrl] = useState(props);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const result = await axios(url,requestOptions);
        setData(result.data);
      } catch (error) {
        setError(error);
      }
      setLoading(false);
    };
    fetchData();
  }, [url]);

  const doFetch = (url) => {
    setUrl(url);
  };

  return { data, error, loading, doFetch };
};

export default useFetchData;
