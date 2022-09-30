import type { SidebarLink } from "../types";

export const links: SidebarLink[] = [
  {
    id: 1,
    url: "/",
    text: "home",
    isMainLink: true,
    icon: "Home",
  },
  {
    id: 2,
    url: "/orders",
    text: "orders",
    icon: "Orders",
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
    icon: "Incentives",
  },
  {
    id: 4,
    url: "/your-show",
    text: "your show",
    isMainLink: true,
    icon: "YourShow",
  },
  {
    id: 5,
    url: "/collection",
    text: "collection",
    isMainLink: true,
    icon: "Collection",
  },
  {
    id: 6,
    url: "/university",
    text: "carlisle university",
    isMainLink: true,
    icon: "University",
  },
  {
    id: 7,
    url: "/style-section",
    text: "style section",
    isMainLink: true,
    icon: "Section",
  },
  {
    id: 8,
    url: "/policies",
    text: "policies",
    isMainLink: true,
    icon: "Warning",
  },
  {
    id: 9,
    url: "/weblinks",
    text: "weblinks",
    isMainLink: true,
    icon: "Link",
  },
  {
    id: 10,
    url: "/outlet",
    text: "outlet",
    isMainLink: true,
    icon: "Outlet",
  },
  {
    id: 11,
    url: "/contact-us",
    text: "contact us",
    isMainLink: true,
    icon: "ContactUs",
  },
];
