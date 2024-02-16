import { Misc } from "../@types/Misc.types";

const roadList: Array<Omit<Misc, "group" | "id" | "type">> = [
  {
    name: "Paved Road",
    set: "stone",
    station: {
      stonecutter: 0,
    },
    materials: {
      stone: 1,
    },
  },
];

export const road: Array<Omit<Misc, "id">> = roadList.map((building) => ({
  ...building,
  group: "misc",
  type: "road",
}));
