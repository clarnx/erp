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
    url: "/",
    text: "orders",
    Icon: Orders,
    isMainLink: true,
    subLinks: [
      {
        id: 1,
        url: "/",
        text: "order processing",
        isSubLink: true,
        subLinks: [
          {
            id: 1,
            url: "/",
            text: "order processing",
          },
          {
            id: 2,
            url: "/",
            text: "order review, pictures, reports",
          },
          { id: 3, url: "/", text: "accounting" },
        ],
      },
      {
        id: 2,
        url: "/",
        text: "order review, pictures, reports",
        isSubLink: true,
        subLinks: [
          {
            id: 1,
            url: "/",
            text: "order processing",
          },
          {
            id: 2,
            url: "/",
            text: "order review, pictures, reports",
          },
          { id: 3, url: "/", text: "accounting" },
        ],
      },
      {
        id: 3,
        url: "/",
        text: "accounting",
        isSubLink: true,
        subLinks: [
          {
            id: 1,
            url: "/",
            text: "order processing",
          },
          {
            id: 2,
            url: "/",
            text: "order review, pictures, reports",
          },
          { id: 3, url: "/", text: "accounting" },
        ],
      },
    ],
  },
  {
    id: 3,
    url: "/",
    text: "incentives",
    isMainLink: true,
    Icon: Incentives,
  },
  {
    id: 4,
    url: "/",
    text: "your show",
    isMainLink: true,
    Icon: YourShow,
  },
  {
    id: 5,
    url: "/",
    text: "collection",
    isMainLink: true,
    Icon: Collection,
  },
  {
    id: 6,
    url: "/",
    text: "carlisle university",
    isMainLink: true,
    Icon: University,
  },
  {
    id: 7,
    url: "/",
    text: "style section",
    isMainLink: true,
    Icon: Section,
  },
  {
    id: 8,
    url: "/",
    text: "policies",
    isMainLink: true,
    Icon: Warning,
  },
  {
    id: 9,
    url: "/",
    text: "weblinks",
    isMainLink: true,
    Icon: Link,
  },
  {
    id: 10,
    url: "/",
    text: "outlet",
    isMainLink: true,
    Icon: Outlet,
  },
  {
    id: 11,
    url: "/",
    text: "contact us",
    isMainLink: true,
    Icon: ContactUs,
  },
];
