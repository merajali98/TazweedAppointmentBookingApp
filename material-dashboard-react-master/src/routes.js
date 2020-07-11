
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import BubbleChart from "@material-ui/icons/BubbleChart";
// core components/views for Admin layout
import BookedBuyers from "views/BookedBuyers/BookedBuyers";
import DashboardComponent from "views/Dashboard/Dashboard";
import UserProfile from "views/UserProfile/UserProfile.js";
import RejectedBuyers from "views/RejectedBuyers/RejectedBuyers";
import Availability from "views/Availability/Availability";
// core components/views for RTL layout

const dashboardRoutes = [
  {
    path: "/requestedbuyers",
    name: "Requested Buyers",
    rtlName: "لوحة القيادة",
    icon: Dashboard,
    component: DashboardComponent,
    layout: "/admin"
  },
  {
    path: "/user",
    name: "User Profile",
    rtlName: "ملف تعريفي للمستخدم",
    icon: Person,
    component: UserProfile,
    layout: "/admin"
  },
  {
    path: "/bookedbuyers",
    name: "Booked Buyers",
    rtlName: "قائمة الجدول",
    icon: Dashboard,
    component: BookedBuyers,
    layout: "/admin"
  },
  {
    path: "/rejectedbuyers",
    name: "Rejected Buyers",
    rtlName: "طباعة",
    icon: Dashboard,
    component: RejectedBuyers,
    layout: "/admin"
  },
  {
    path: "/availability",
    name: "Update Availability",
    rtlName: "الرموز",
    icon: BubbleChart,
    component: Availability,
    layout: "/admin"
  }
];

export default dashboardRoutes;
