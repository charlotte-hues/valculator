import { Recipe } from "../@types/Recipes.types";

const cookedFoodList: Array<Omit<Recipe, "group" | "id" | "type">> = [
  {
    name: "Black Soup",
    set: "food",
    stacks: 10,
    stats: {
      "max health": 50,
      "max stamina": 17,
      healing: 3,
      duration: "1200s",
      weight: 1,
    },
    station: {
      cauldron: 1,
    },
    materials: {
      bloodbag: 1,
      honey: 1,
      turnip: 1,
    },
  },
  {
    name: "Boar Jerky",
    set: "food",
    stacks: 20,
    crafts: 2,
    stats: {
      "max health": 23,
      "max stamina": 23,
      healing: 2,
      duration: "1800s",
      crafts: 2,
      weight: 1,
    },
    station: {
      cauldron: 1,
    },
    materials: {
      "boar meat": 1,
      honey: 1,
      turnip: 1,
    },
  },
  {
    name: "Carrot Soup",
    set: "food",
    stacks: 10,
    stats: {
      "max health": 15,
      "max stamina": 45,
      healing: 2,
      duration: "1500s",
      weight: 1,
    },
    station: {
      cauldron: 1,
    },
    materials: {
      mushroom: 1,
      carrot: 3,
    },
  },
  {
    name: "Deer Stew",
    set: "food",
    stacks: 10,
    stats: {
      "max health": 45,
      "max stamina": 15,
      healing: 3,
      duration: "1500s",
      weight: 1,
    },
    station: {
      cauldron: 1,
    },
    materials: {
      blueberries: 1,
      carrot: 1,
      "cooked deer meat": 1,
    },
  },
  {
    name: "Minced Meat Sauce",
    set: "food",
    stacks: 10,
    stats: {
      "max health": 40,
      "max stamina": 13,
      healing: 3,
      duration: "1600s",
      weight: 1,
    },
    station: {
      cauldron: 1,
    },
    materials: {
      "boar meat": 1,
      "neck tail": 1,
      carrot: 1,
    },
  },
  {
    name: "Muckshake",
    set: "food",
    stacks: 10,
    stats: {
      "max health": 16,
      "max stamina": 50,
      healing: 1,
      duration: "1200s",
      weight: 1,
    },
    station: {
      cauldron: 2,
    },
    materials: {
      ooze: 1,
      raspberries: 2,
      blueberries: 2,
    },
  },
  {
    name: "Onion Soup",
    set: "food",
    stacks: 10,
    stats: {
      "max health": 20,
      "max stamina": 60,
      healing: 1,
      duration: "1200s",
      weight: 1,
    },
    station: {
      cauldron: 1,
    },
    materials: {
      onion: 3,
    },
  },
  {
    name: "Queens Jam",
    set: "food",
    stacks: 10,
    crafts: 4,
    stats: {
      "max health": 14,
      "max stamina": 40,
      healing: 2,
      duration: "1200s",
      crafts: 4,
      weight: 1,
    },
    station: {
      cauldron: 1,
    },
    materials: {
      raspberries: 8,
      blueberries: 6,
    },
  },
  {
    name: "Sausages",
    set: "food",
    stacks: 20,
    crafts: 4,
    stats: {
      "max health": 55,
      "max stamina": 18,
      healing: 3,
      duration: "1500s",
      crafts: 4,
      weight: 0.5,
    },
    station: {
      cauldron: 1,
    },
    materials: {
      entrails: 4,
      "boar meat": 1,
      thistle: 1,
    },
  },
  {
    name: "Serpent Stew",
    set: "food",
    stacks: 10,
    stats: {
      "max health": 80,
      "max stamina": 26,
      healing: 4,
      duration: "1800s",
      weight: 1,
    },
    station: {
      cauldron: 1,
    },
    materials: {
      mushroom: 1,
      "cooked serpent meat": 1,
      honey: 2,
    },
  },
  {
    name: "Turnip Stew",
    set: "food",
    stacks: 10,
    stats: {
      "max health": 18,
      "max stamina": 55,
      healing: 2,
      duration: "1500s",
      weight: 1,
    },
    station: {
      cauldron: 1,
    },
    materials: {
      "boar meat": 1,
      turnip: 3,
    },
  },
  {
    name: "Lox Meat Pie",
    set: "food",
    stacks: 10,
    stats: {
      "max health": 75,
      "max stamina": 24,
      healing: 4,
      duration: "1800s",
      weight: 1,
    },
    station: {
      "Stone Oven": 1,
    },
    materials: {
      "unbaked lox meat pie": 1,
    },
  },
];

export const cookedFood: Array<Omit<Recipe, "id">> = cookedFoodList.map(
  (building) => ({
    ...building,
    group: "recipes",
    type: "cooked food",
  })
);
