import { SideNavItem } from "./types";

//Routes for Navigation Menu

export const SIDENAV_ITEMS: SideNavItem[] = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Mining Expo",
    path: "/main-event-programme",
    submenu: true,
    subMenuItems: [
      { title: "Main Event Programme", path: "/main-event-programme" },
      {
        title: "Registration and Info",
        path: "/main-event-programme/registration-info",
      },
      { title: "Floor Plans", path: "/main-event-programme/floor-plans" },
      { title: "Exhibitors", path: "/main-event-programme/exhibitors" },
    ],
  },
  {
    title: "Conference",
    path: "/conference-programme",
    submenu: true,
    subMenuItems: [
      { title: "Programme", path: "/conference-programme" },
      { title: "Speakers", path: "/conference-programme/speakers-list" },
    ],
  },
  {
    title: "Marketing Opportunities",
    path: "/suppliers-platform",
    submenu: true,
    subMenuItems: [
      { title: "Supplier's Platform", path: "/suppliers-platform" },
      { title: "B2B", path: "/suppliers-platform/b2b" },
    ],
  },
  {
    title: "Past Events",
    path: "/past-presentations",
    submenu: true,
    subMenuItems: [
      { title: "Past Presentations", path: "/past-presentations" },
      {
        title: "2023 Presentations",
        path: "/past-presentations/2023-presentations",
      },
    ],
  },
  {
    title: "Contact",
    path: "/contact",
  },
];
