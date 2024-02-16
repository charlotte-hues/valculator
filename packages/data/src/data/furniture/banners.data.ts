import { Furniture } from "../@types/Furniture.types";

const bannersList: Array<Omit<Furniture, "group" | "id" | "type">> = [
  {
    name: "Black Banner",
    set: "banners",
    stats: {
      comfort: 1,
    },
    station: {
      workbench: 1,
    },
    materials: {
      "fine wood": 2,
      "leather scraps": 6,
      coal: 4,
    },
  },
  {
    name: "Blue Banner",
    set: "banners",
    stats: {
      comfort: 1,
    },
    station: {
      workbench: 1,
    },
    materials: {
      "fine wood": 2,
      "leather scraps": 6,
      blueberries: 4,
    },
  },
  {
    name: "Red Banner",
    set: "banners",
    stats: {
      comfort: 1,
    },
    station: {
      workbench: 1,
    },
    materials: {
      "fine wood": 2,
      "leather scraps": 6,
      bloodbag: 1,
    },
  },
  {
    name: "Green Banner",
    set: "banners",
    stats: {
      comfort: 1,
    },
    station: {
      workbench: 1,
    },
    materials: {
      "fine wood": 2,
      "leather scraps": 6,
      guck: 1,
    },
  },
  {
    name: "White and Red Banner",
    set: "banners",
    stats: {
      comfort: 1,
    },
    station: {
      workbench: 1,
    },
    materials: {
      "fine wood": 2,
      "leather scraps": 6,
      raspberries: 4,
    },
  },
  {
    name: "White and Blue Banner",
    set: "banners",
    stats: {
      comfort: 1,
    },
    station: {
      workbench: 1,
    },
    materials: {
      "fine wood": 2,
      "leather scraps": 6,
      blueberries: 2,
      cloudberries: 3,
    },
  },
  {
    name: "Blue, Red and White Banner",
    set: "banners",
    stats: {
      comfort: 1,
    },
    station: {
      workbench: 1,
    },
    materials: {
      "fine wood": 2,
      "leather scraps": 6,
      blueberries: 2,
      raspberries: 2,
      cloudberries: 1,
    },
  },
];

export const banners: Array<Omit<Furniture, "id">> = bannersList.map(
  (building) => ({
    ...building,
    group: "furniture",
    type: "banners",
  })
);
