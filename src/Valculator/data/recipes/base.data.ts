import { Recipe } from "../@types/Recipes.types";

const baseList: Array<Omit<Recipe, "group" | "id" | "type">> = [
  {
    name: "Barley Wine Base: Fire Resistance",
    set: "mead",
    stacks: 1,
    stats: {
      time: "2 days",
      crafts: 6,
      weight: 1,
    },
    station: {
      cauldron: 0,
    },
    materials: {
      barley: 10,
      cloudberries: 10,
    },
  },
  {
    name: "Unbaked Lox Pie",
    set: "food",
    stacks: 1,
    stats: {
      weight: 1,
    },
    station: {
      cauldron: 4,
    },
    materials: {
      "barley flour": 4,
      cloudberries: 2,
      "lox meat": 2,
    },
  },
  {
    name: "Mead Base: Frost Resistance",
    set: "mead",
    stacks: 1,
    stats: {
      time: "2 days",
      crafts: 6,
      weight: 1,
    },
    station: {
      cauldron: 1,
    },
    materials: {
      honey: 10,
      thistle: 5,
      bloodbag: 2,
      "greydwarf eye": 1,
    },
  },
  {
    name: "Mead Base: Medium Healing",
    set: "mead",
    stacks: 1,
    stats: {
      time: "2 days",
      crafts: 6,
      weight: 1,
    },
    station: {
      cauldron: 1,
    },
    materials: {
      honey: 10,
      bloodbag: 2,
      raspberries: 1,
      dandelion: 1,
    },
  },
  {
    name: "Mead Base: Medium Stamina",
    set: "mead",
    stacks: 1,
    stats: {
      time: "2 days",
      crafts: 6,
      weight: 1,
    },
    station: {
      cauldron: 1,
    },
    materials: {
      honey: 10,
      cloudberries: 10,
      "yellow mushroom": 10,
    },
  },
  {
    name: "Mead Base: Minor Healing",
    set: "mead",
    stacks: 1,
    stats: {
      time: "2 days",
      crafts: 6,
      weight: 1,
    },
    station: {
      cauldron: 1,
    },
    materials: {
      honey: 10,
      blueberries: 5,
      raspberries: 10,
      dandelion: 1,
    },
  },
  {
    name: "Mead Base: Minor Stamina",
    set: "mead",
    stacks: 1,
    stats: {
      time: "2 days",
      crafts: 6,
      weight: 1,
    },
    station: {
      cauldron: 1,
    },
    materials: {
      honey: 10,
      raspberries: 10,
      "yellow mushroom": 10,
    },
  },
  {
    name: "Mead Base: Poison Resistance",
    set: "mead",
    stacks: 1,
    stats: {
      time: "2 days",
      crafts: 6,
      weight: 1,
    },
    station: {
      cauldron: 1,
    },
    materials: {
      honey: 10,
      thistle: 5,
      "neck tail": 1,
      coal: 10,
    },
  },
  {
    name: "Mead Base: Tasty",
    set: "mead",
    stacks: 1,
    stats: {
      time: "2 days",
      crafts: 6,
      weight: 1,
    },
    station: {
      cauldron: 1,
    },
    materials: {
      honey: 10,
      raspberries: 10,
      blueberries: 5,
    },
  },
];

export const base: Array<Omit<Recipe, "id">> = baseList.map((building) => ({
  ...building,
  group: "recipes",
  type: "base",
}));
