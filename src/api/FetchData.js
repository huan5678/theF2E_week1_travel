import axios from "axios";
import jsSHA from "jssha";

const apiUrl = "https://ptx.transportdata.tw/MOTC/v2/Tourism";
// https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot?$top=30&$format=JSON
const requestOptions = () => {
  let AppID = import.meta.env.VITE_APP_ID || process.env.VITE_APP_ID;
  let AppKey = import.meta.env.VITE_APP_KEY || process.env.VITE_APP_KEY;
  let GMTString = new Date().toGMTString();
  let ShaObj = new jsSHA("SHA-1", "TEXT");
  ShaObj.setHMACKey(AppKey, "TEXT");
  ShaObj.update(`x-date: ${GMTString}`);
  let HMAC = ShaObj.getHMAC("B64");
  let Authorization = `hmac username="${AppID}", algorithm="hmac-sha1", headers="x-date", signature="${HMAC}"`;
  // const myHeaders = new Headers();
  // myHeaders.append("Accept", "application/json");
  // myHeaders.append(
  //   "Authorization",
  //   `hmac username=\"${AppID}\", algorithm="hmac-sha1", headers="x-date", signature=\"${HMAC}\"`
  // );
  // myHeaders.append("x-date", GMTString);
  // myHeaders.append("Accept-Encoding", "gzip");

  return { 'Authorization': Authorization, 'X-Date': GMTString  };
};

// console.log(requestOptions)

const FetchData = async (url,city,params) => {
  let category = "";
  switch (url) {
    case "scenicSpot":
      category = "ScenicSpot";
      break;
    case "restaurant":
      category = "Restaurant";
      break;
    case "hotel":
      category = "Hotel";
      break;
    case "activity":
      category = "Activity";
      break;
    default:
      category = "ScenicSpot";
      break;
  }
  return !city
    ? await axios.get(
        `${apiUrl}/${category}?$filter=Picture%2FPictureUrl1%20ne%20null%20&${params}&$format=JSON`,
        {
          headers: requestOptions(),
        }
      )
    : await axios.get(
        `${apiUrl}/${category}/${city}?$filter=Picture%2FPictureUrl1%20ne%20null%20&$${params}&$format=JSON`,
        {
          headers: requestOptions(),
        }
      );
};
export default FetchData;