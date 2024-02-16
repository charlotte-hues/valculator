import { Building } from "../@types/Building.types";

const pillarsList: Array<Omit<Building, "group" | "id" | "type">> = [
  {
    name: "Stone Pillar",
    set: "stone",
    stats: {
      size: "1x1x2",
    },
    station: {
      stonecutter: 0,
    },
    materials: {
      stone: 5,
    },
  },
];

export const pillars: Array<Omit<Building, "id">> = pillarsList.map(
  (building) => ({
    ...building,
    group: "building",
    type: "pillars",
  })
);
