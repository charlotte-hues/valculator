import { Recipe } from "../@types/Recipes.types";

const potionsList: Array<Omit<Recipe, "group" | "id" | "type">> = [
  {
    name: "Berserkir Mead",
    set: "mead",
    stacks: 10,
    crafts: 3,
    stats: {
      crafts: 3,
      weight: 1,
    },
    station: {
      fermenter: 1,
    },
    materials: {
      "mead base: berserkir": 1,
    },
  },
  {
    name: "Mead of Troll Endurance",
    set: "mead",
    stacks: 10,
    crafts: 6,
    stats: {
      crafts: 6,
      weight: 1,
    },
    station: {
      fermenter: 1,
    },
    materials: {
      "mead base: troll endurance": 1,
    },
  },
  {
    name: "Draught of Vananidir",
    set: "mead",
    stacks: 10,
    crafts: 6,
    stats: {
      crafts: 6,
      weight: 1,
    },
    station: {
      fermenter: 1,
    },
    materials: {
      "mead base: vananidir": 1,
    },
  },
  {
    name: "Brew of Animal Whispers",
    set: "mead",
    stacks: 10,
    crafts: 6,
    stats: {
      crafts: 6,
      weight: 1,
    },
    station: {
      fermenter: 1,
    },
    materials: {
      "mead base: animal whispers": 1,
    },
  },
  {
    name: "Lightfoot Mead",
    set: "mead",
    stacks: 10,
    crafts: 6,
    stats: {
      crafts: 6,
      weight: 1,
    },
    station: {
      fermenter: 1,
    },
    materials: {
      "mead base: lightfoot": 1,
    },
  },
];

export const potions: Array<Omit<Recipe, "id">> = potionsList.map((recipe) => ({
  ...recipe,
  group: "recipes",
  type: "potions",
}));
