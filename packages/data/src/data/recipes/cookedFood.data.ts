import { Recipe } from "../@types/Recipes.types";

const cookedFoodList: Array<Omit<Recipe, "group" | "id" | "type" | "set">> = [
  {
    name: "Black Soup",
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
  {
    name: "Meat Platter",
    stacks: 10,
    stats: {
      "max health": 80,
      "max stamina": 26,
      healing: 5,
      duration: "30m",
      weight: 1,
    },
    station: {
      cauldron: 5,
      "Stone Oven": 1,
    },
    materials: {
      "hare meat": 1,
      "seeker meat": 1,
      "lox meat": 1,
    },
  },
  {
    name: "Bread",
    stacks: 20,
    stats: {
      "max health": 23,
      "max stamina": 70,
      healing: 2,
      duration: "25m",
      weight: 0.5,
    },
    station: {
      cauldron: 4,
      "Stone Oven": 1,
    },
    materials: {
      "barley flour": 10,
    },
  },
  {
    name: "Honey Glazed Chicked",
    stacks: 10,
    stats: {
      "max health": 80,
      "max stamina": 26,
      healing: 5,
      duration: "30m",
      weight: 1,
    },
    station: {
      cauldron: 5,
      "Stone Oven": 1,
    },
    materials: {
      "chicken meat": 1,
      honey: 3,
      "jotun puffs": 2,
    },
  },
  {
    name: "Misthare Supreme",
    stacks: 10,
    stats: {
      "max health": 85,
      "max stamina": 28,
      healing: 5,
      duration: "25m",
      weight: 1,
    },
    station: {
      cauldron: 5,
      "Stone Oven": 1,
    },
    materials: {
      "hare meat": 1,
      "jotun puffs": 3,
      carrot: 2,
    },
  },
  {
    name: "Salad",
    stacks: 10,
    crafts: 3,
    stats: {
      "max health": 26,
      "max stamina": 80,
      healing: 3,
      crafts: 3,
      duration: "25m",
      weight: 1,
    },
    station: {
      cauldron: 5,
    },
    materials: {
      "jotun puffs": 3,
      onion: 3,
      cloudberries: 3,
    },
  },
  {
    name: "Mushroom Omelette",
    stacks: 10,
    stats: {
      "max health": 28,
      "max stamina": 85,
      healing: 3,
      duration: "25m",
      weight: 1,
    },
    station: {
      cauldron: 5,
    },
    materials: {
      egg: 3,
      "jotun puffs": 3,
    },
  },
  {
    name: "Fish n' Bread",
    stacks: 10,
    stats: {
      "max health": 30,
      "max stamina": 90,
      healing: 3,
      duration: "30m",
      weight: 1,
    },
    station: {
      cauldron: 5,
      "Stone Oven": 1,
    },
    materials: {
      anglerfish: 1,
      "barley flour": 20,
    },
  },
  {
    name: "Stuffed Mushroom",
    stacks: 10,
    stats: {
      "max health": 25,
      "max stamina": 12,
      healing: 3,
      duration: "25m",
      weight: 1,
    },
    station: {
      cauldron: 5,
      "Stone Oven": 1,
    },
    materials: {
      magecap: 3,
      "blood clot": 1,
      turnip: 2,
    },
  },
  {
    name: "Blood Pudding",
    stacks: 10,
    stats: {
      "max health": 25,
      "max stamina": 75,
      healing: 2,
      duration: "30m",
      weight: 1,
    },
    station: {
      cauldron: 4,
    },
    materials: {
      thistle: 2,
      bloodbag: 2,
      "barley flour": 4,
    },
  },
  {
    name: "Yggdrasil Porridge",
    stacks: 10,
    stats: {
      "max health": 27,
      "max stamina": 13,
      "max eitr": 80,
      healing: 3,
      duration: "25m",
      weight: 1,
    },
    station: {
      cauldron: 5,
    },
    materials: {
      sap: 4,
      barley: 3,
      "royal jelly": 2,
    },
  },
  {
    name: "Seeker Aspic",
    stacks: 10,
    stats: {
      "max health": 28,
      "max stamina": 14,
      "max eitr": 85,
      healing: 3,
      duration: "30m",
      weight: 1,
    },
    station: {
      cauldron: 5,
    },
    materials: {
      "seeker meat": 2,
      magecap: 2,
      "royal jelly": 2,
    },
  },
  {
    name: "Fish Wraps",
    stacks: 10,
    stats: {
      "max health": 70,
      "max stamina": 23,
      healing: 4,
      duration: "25m",
      weight: 1,
    },
    station: {
      cauldron: 4,
    },
    materials: {
      "cooked fish": 2,
      "barley flour": 4,
    },
  },
  {
    name: "Eyescream",
    stacks: 10,
    stats: {
      "max health": 21,
      "max stamina": 65,
      healing: 1,
      duration: "25m",
      weight: 0.5,
    },
    station: {
      cauldron: 3,
    },
    materials: {
      "greydwarf eye": 3,
      "freeze gland": 1,
    },
  },
  {
    name: "Wolf Scewer",
    stacks: 20,
    stats: {
      "max health": 65,
      "max stamina": 21,
      healing: 3,
      duration: "25m",
      weight: 0.5,
    },
    station: {
      cauldron: 3,
    },
    materials: {
      "wolf meat": 1,
      mushroom: 2,
      onion: 1,
    },
  },
  {
    name: "Wolf Jerky",
    stacks: 20,
    crafts: 2,
    stats: {
      "max health": 33,
      "max stamina": 33,
      healing: 3,
      duration: "30m",
      crafts: 2,
      weight: 0.5,
    },
    station: {
      cauldron: 3,
    },
    materials: {
      "wolf meat": 1,
      honey: 1,
    },
  },
];

export const cookedFood: Array<Omit<Recipe, "id">> = cookedFoodList.map(
  (building) => ({
    ...building,
    group: "recipes",
    type: "cooked food",
    set: "food",
  })
);
