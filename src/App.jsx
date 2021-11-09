import { useState } from 'react'
import jsSHA from 'jssha'


let AppID = import.meta.env.VITE_TEST_API;
let AppKey = import.meta.env.VITE_TEST_API;
let GMTString = new Date().toGMTString();

  let ShaObj = new jsSHA("SHA-1", "TEXT");
  ShaObj.setHMACKey(`${AppKey}`, "TEXT");
  ShaObj.update(`x-date: ${GMTString}`);
  let HMAC = ShaObj.getHMAC("B64");
const myHeaders = new Headers();
myHeaders.append("Accept", "application/json");
myHeaders.append(
  "Authorization",
  `hmac username=${AppID}, algorithm="hmac-sha1", headers="x-date", signature="${HMAC}"`
);
myHeaders.append("x-date", GMTString);
myHeaders.append("Accept-Encoding", "gzip");

const requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow",
};

fetch(
  "https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot?$top=30&$format=JSON",
  requestOptions
)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.log("error", error));



function App() {
  const [count, setCount] = useState(0)

  console.log(import.meta.env);

  return (
    <div>
      <h1>
        <a href="#" className="logo">
          TAIWAN GO
        </a>
      </h1>
    </div>
  )
}

export default App
