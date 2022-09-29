import Collection from "@/assets/svg/Collection.svg";
import ContactUs from "@/assets/svg/ContactUs.svg";
import Home from "@/assets/svg/Home.svg";
import Incentives from "@/assets/svg/Incentives.svg";
import Link from "@/assets/svg/Link.svg";
import Orders from "@/assets/svg/Orders.svg";
import Outlet from "@/assets/svg/Outlet.svg";
import Section from "@/assets/svg/Section.svg";
import University from "@/assets/svg/University.svg";
import Warning from "@/assets/svg/Warning.svg";
import YourShow from "@/assets/svg/YourShow.svg";

import type { SidebarLink } from "../types";

export const links: SidebarLink[] = [
  {
    id: 1,
    url: "/",
    text: "home",
    isMainLink: true,
    Icon: Home,
  },
  {
    id: 2,
    url: "/orders",
    text: "orders",
    Icon: Orders,
    isMainLink: true,
    subLinks: [
      {
        id: 1,
        url: "/orders/order-processing",
        text: "order processing",
        isSubLink: true,
        subLinks: [
          {
            id: 1,
            url: "/orders/order-processing/work-with-client",
            text: "work with client",
          },
          {
            id: 2,
            url: "/orders/order-processing/customer-receipt",
            text: "customer receipt header / footer",
          },
          {
            id: 3,
            url: "/orders/order-processing/weekly-shipping",
            text: "change weekly shipping option",
          },
        ],
      },
      {
        id: 2,
        url: "/orders/order-details",
        text: "order review, pictures, reports",
        isSubLink: true,
      },
      {
        id: 3,
        url: "/orders/accounting",
        text: "accounting",
        isSubLink: true,
      },
    ],
  },
  {
    id: 3,
    url: "/incentives",
    text: "incentives",
    isMainLink: true,
    Icon: Incentives,
  },
  {
    id: 4,
    url: "/your-show",
    text: "your show",
    isMainLink: true,
    Icon: YourShow,
  },
  {
    id: 5,
    url: "/collection",
    text: "collection",
    isMainLink: true,
    Icon: Collection,
  },
  {
    id: 6,
    url: "/university",
    text: "carlisle university",
    isMainLink: true,
    Icon: University,
  },
  {
    id: 7,
    url: "/style-section",
    text: "style section",
    isMainLink: true,
    Icon: Section,
  },
  {
    id: 8,
    url: "/policies",
    text: "policies",
    isMainLink: true,
    Icon: Warning,
  },
  {
    id: 9,
    url: "/weblinks",
    text: "weblinks",
    isMainLink: true,
    Icon: Link,
  },
  {
    id: 10,
    url: "/outlet",
    text: "outlet",
    isMainLink: true,
    Icon: Outlet,
  },
  {
    id: 11,
    url: "/contact-us",
    text: "contact us",
    isMainLink: true,
    Icon: ContactUs,
  },
];
