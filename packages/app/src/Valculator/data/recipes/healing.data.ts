import { Recipe } from "../@types/Recipes.types";

const healingList: Array<Omit<Recipe, "group" | "id" | "type">> = [
  {
    name: "Medium Healing Mead",
    set: "mead",
    stacks: 10,
    crafts: 6,
    stats: {
      health: 75,
      duration: "10s",
      weight: 1,
    },
    station: {
      fermenter: 1,
    },
    materials: {
      "mead base: medium healing": 1,
    },
  },
  {
    name: "Minor Healing Mead",
    set: "mead",
    stacks: 10,
    crafts: 6,
    stats: {
      stamina: 50,
      duration: "10s",
      weight: 1,
    },
    station: {
      fermenter: 1,
    },
    materials: {
      "mead base: minor healing": 1,
    },
  },
];

export const healing: Array<Omit<Recipe, "id">> = healingList.map(
  (building) => ({
    ...building,
    group: "recipes",
    type: "healing",
  })
);
