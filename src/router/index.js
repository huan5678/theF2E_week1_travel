// router/index.js
import Index from "@/views/Index";
import Activity from "@/views/Activity";
import CityFs from "@/views/CityFs";
import Restaurant from "@/views/Restaurant";
import Hotel from "@/views/Hotel";
import ScenicSpot from "@/views/ScenicSpot";

const routes = [
  {
    path: "/",
    component: Index,
    exact: true,
  },
  {
    path: "/activity",
    component: Activity,
  },
  {
    path: "/cities",
    component: CityFs,
  },
  {
    path: "/scenic",
    component: ScenicSpot,
  },
  {
    path: "/hotel",
    component: Hotel,
  },
  {
    path: "/restaurant",
    component: Restaurant,
  }
];

export default routes;
