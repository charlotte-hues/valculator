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
  {
    name: "Yellow Banner",
    set: "banners",
    station: {
      workbench: 1,
    },
    materials: {
      "leather scraps": 6,
      "fine wood": 2,
      dandelion: 4,
      coal: 2,
    },
  },
  {
    name: "Purple Banner",
    set: "banners",
    station: {
      workbench: 1,
    },
    materials: {
      "leather scraps": 6,
      "fine wood": 2,
      blueberries: 2,
      raspberries: 3,
    },
  },
  {
    name: "Orange Banner",
    set: "banners",
    station: {
      workbench: 1,
    },
    materials: {
      "leather scraps": 6,
      "fine wood": 2,
      carrot: 2,
      cloudberries: 3,
    },
  },
  {
    name: "White Banner",
    set: "banners",
    station: {
      workbench: 1,
    },
    materials: {
      "leather scraps": 6,
      "fine wood": 2,
      coal: 2,
      cloudberries: 4,
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
