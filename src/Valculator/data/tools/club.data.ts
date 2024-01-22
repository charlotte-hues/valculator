import { Tool } from "../@types/Tools.types";

const clubList: Array<Omit<Tool, "group" | "id" | "type">> = [
  {
    name: "Torch",
    set: "wood",
    stats: {
      fire: 15,
      blunt: 4,
      knockback: 30,
      "parry force": 10,
      durability: 20,
      weight: 1,
    },
    effects: {
      movementSpeed: "-5%",
    },
    materials: {
      wood: 1,
      resin: 1,
    },
  },
];

export const club: Array<Omit<Tool, "id">> = clubList.map((building) => ({
  ...building,
  group: "tools",
  type: "club",
}));
