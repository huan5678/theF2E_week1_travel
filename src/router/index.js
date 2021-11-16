// router/index.js
import Index from "@/views/Index";
import Activity from "@/views/Activity";
import Restaurant from "@/views/Restaurant";
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
    path: "/scenic",
    component: ScenicSpot,
  },
  {
    path: "/restaurant",
    component: Restaurant,
  }
];

export default routes;
