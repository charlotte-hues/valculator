import { Building } from "../@types/Building.types";

const roofList: Array<Omit<Building, "group" | "id" | "type">> = [
  {
    name: "Thatch Roof 26°",
    set: "wood",
    stats: {
      size: "2x2",
    },
    station: {
      workbench: 1,
    },
    materials: {
      wood: 2,
    },
  },
  {
    name: "Thatch Roof 45°",
    set: "wood",
    stats: {
      size: "2x2",
    },
    station: {
      workbench: 1,
    },
    materials: {
      wood: 2,
    },
  },
  {
    name: "Thatch Roof i-corner 26°",
    set: "wood",
    stats: {
      size: "2x2",
    },
    station: {
      workbench: 1,
    },
    materials: {
      wood: 2,
    },
  },
  {
    name: "Thatch Roof i-corner 45°",
    set: "wood",
    stats: {
      size: "2x2",
    },
    station: {
      workbench: 1,
    },
    materials: {
      wood: 2,
    },
  },
  {
    name: "Thatch Roof o-corner 26°",
    set: "wood",
    stats: {
      size: "2x2",
    },
    station: {
      workbench: 1,
    },
    materials: {
      wood: 2,
    },
  },
  {
    name: "Thatch Roof o-corner 45°",
    set: "wood",
    stats: {
      size: "2x2",
    },
    station: {
      workbench: 1,
    },
    materials: {
      wood: 2,
    },
  },
  {
    name: "Thatch Roof Ridge 26°",
    set: "wood",
    stats: {
      size: "2x2",
    },
    station: {
      workbench: 1,
    },
    materials: {
      wood: 2,
    },
  },
  {
    name: "Thatch Roof Ridge 45°",
    set: "wood",
    stats: {
      size: "2x2x1",
    },
    station: {
      workbench: 1,
    },
    materials: {
      wood: 2,
    },
  },
  {
    name: "Shingle Roof 26°",
    set: "dark wood",
    stats: {
      size: "2x2",
    },
    station: {
      workbench: 1,
    },
    materials: {
      wood: 2,
      tar: 1,
    },
  },
  {
    name: "Shingle Roof 45°",
    set: "dark wood",
    stats: {
      size: "2x2",
    },
    station: {
      workbench: 1,
    },
    materials: {
      wood: 2,
      tar: 1,
    },
  },
  {
    name: "Shingle Roof i-corner 26°",
    set: "dark wood",
    stats: {
      size: "2x2",
    },
    station: {
      workbench: 1,
    },
    materials: {
      wood: 2,
      tar: 1,
    },
  },
  {
    name: "Shingle Roof i-corner 45°",
    set: "dark wood",
    stats: {
      size: "2x2",
    },
    station: {
      workbench: 1,
    },
    materials: {
      wood: 2,
      tar: 1,
    },
  },
  {
    name: "Shingle Roof o-corner 26°",
    set: "dark wood",
    stats: {
      size: "2x2",
    },
    station: {
      workbench: 1,
    },
    materials: {
      wood: 2,
      tar: 1,
    },
  },
  {
    name: "Shingle Roof o-corner 45°",
    set: "dark wood",
    stats: {
      size: "2x2",
    },
    station: {
      workbench: 1,
    },
    materials: {
      wood: 2,
      tar: 1,
    },
  },
  {
    name: "Shingle Roof Ridge 26°",
    set: "dark wood",
    stats: {
      size: "2x2",
    },
    station: {
      workbench: 1,
    },
    materials: {
      wood: 2,
      tar: 1,
    },
  },
  {
    name: "Shingle Roof Ridge 45°",
    set: "dark wood",
    stats: {
      size: "2x2x1",
    },
    station: {
      workbench: 1,
    },
    materials: {
      wood: 2,
      tar: 1,
    },
  },
  {
    name: "Wood Roof Cross 26°",
    set: "wood",
    stats: {
      size: "2x1",
    },
    station: {
      workbench: 1,
    },
    materials: {
      wood: 2,
    },
  },
  {
    name: "Wood Roof Cross 45°",
    set: "wood",
    stats: {
      size: "2x2",
    },
    station: {
      workbench: 1,
    },
    materials: {
      wood: 2,
    },
  },
  {
    name: "Ashwood Wall Roof 26°",
    set: "ash",
    stats: {
      size: "26°",
    },
    station: {
      workbench: 1,
    },
    materials: {
      ashwood: 1,
    },
  },
  {
    name: "Ashwood Wall Roof 45°",
    set: "ash",
    stats: {
      size: "45°",
    },
    station: {
      workbench: 1,
    },
    materials: {
      ashwood: 1,
    },
  },
  {
    name: "Grausten Roof",
    set: "grausten",
    stats: {
      size: "2x2",
    },
    station: {
      stonecutter: 1,
    },
    materials: {
      grausten: 5,
    },
  },
  {
    name: "Grausten Arched Roof",
    set: "grausten",
    stats: {
      size: "2x2",
    },
    station: {
      stonecutter: 1,
    },
    materials: {
      grausten: 5,
    },
  },
  {
    name: "Ashwood Roof Cross 26°",
    set: "ash",
    stats: {
      size: "2x1",
    },
    station: {
      workbench: 1,
    },
    materials: {
      ashwood: 1,
    },
  },
  {
    name: "Ashwood Roof Cross 45°",
    set: "ash",
    stats: {
      size: "2x2",
    },
    station: {
      workbench: 1,
    },
    materials: {
      ashwood: 1,
    },
  },
  {
    name: "Ashwood Wall Roof 26° (Inverted)",
    set: "ash",
    stats: {
      size: "2x1",
    },
    station: {
      workbench: 1,
    },
    materials: {
      ashwood: 1,
    },
  },
  {
    name: "Ashwood Wall Roof 45° (Inverted)",
    set: "ash",
    stats: {
      size: "2x2",
    },
    station: {
      workbench: 1,
    },
    materials: {
      ashwood: 1,
    },
  },
];

export const roof: Array<Omit<Building, "id">> = roofList.map((building) => ({
  ...building,
  group: "building",
  type: "roof",
}));
