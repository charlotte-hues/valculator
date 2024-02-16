import { Recipe } from "../@types/Recipes.types";

const resistanceList: Array<Omit<Recipe, "group" | "id" | "type">> = [
  {
    name: "Fire Resistance Barley Wine",
    set: "mead",
    stacks: 10,
    crafts: 6,
    stats: {
      resistance: "fire",
      duration: "600s",
      weight: 1,
    },
    station: {
      fermenter: 1,
    },
    materials: {
      "barley wine base": 1,
    },
  },
  {
    name: "Frost Resistance Mead",
    set: "mead",
    stacks: 10,
    crafts: 6,
    stats: {
      resistance: "frost",
      duration: "600s",
      weight: 1,
    },
    station: {
      cauldron: 1,
    },
    materials: {
      "mead base: frost resistance": 1,
    },
  },
  {
    name: "Poison Resistance Mead",
    set: "mead",
    stacks: 10,
    crafts: 6,
    stats: {
      resistance: "poison",
      duration: "600s",
      weight: 1,
    },
    station: {
      fermenter: 1,
    },
    materials: {
      "mead base: poison resistance": 1,
    },
  },
];

export const resistance: Array<Omit<Recipe, "id">> = resistanceList.map(
  (building) => ({
    ...building,
    group: "recipes",
    type: "resistance",
  })
);
