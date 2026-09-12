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
  {
    name: "Wolf Skewer",
    set: "food",
    stacks: 20,
    stats: {
      "max health": 65,
      "max stamina": 21,
      healing: 3,
      duration: "1500s",
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
    set: "food",
    stacks: 20,
    crafts: 2,
    stats: {
      "max health": 33,
      "max stamina": 33,
      healing: 3,
      duration: "1800s",
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
  {
    name: "Eyescream",
    set: "food",
    stacks: 10,
    stats: {
      "max health": 21,
      "max stamina": 65,
      healing: 1,
      duration: "1500s",
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
    name: "Blood Pudding",
    set: "food",
    stacks: 10,
    stats: {
      "max health": 25,
      "max stamina": 75,
      healing: 2,
      duration: "1800s",
      weight: 1,
    },
    station: {
      cauldron: 4,
    },
    materials: {
      bloodbag: 2,
      "barley flour": 4,
      thistle: 2,
    },
  },
  {
    name: "Fish Wraps",
    set: "food",
    stacks: 10,
    stats: {
      "max health": 70,
      "max stamina": 23,
      healing: 4,
      duration: "1500s",
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
    name: "Salad",
    set: "food",
    stacks: 10,
    crafts: 3,
    stats: {
      "max health": 26,
      "max stamina": 80,
      healing: 3,
      duration: "1500s",
      crafts: 3,
      weight: 1,
    },
    station: {
      cauldron: 3,
    },
    materials: {
      "jotun puffs": 3,
      onion: 3,
      cloudberries: 3,
    },
  },
  {
    name: "Mushroom Omelette",
    set: "food",
    stacks: 10,
    stats: {
      "max health": 28,
      "max stamina": 85,
      healing: 3,
      duration: "1500s",
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
    name: "Bread",
    set: "food",
    stacks: 20,
    stats: {
      "max health": 23,
      "max stamina": 70,
      healing: 2,
      duration: "1500s",
      weight: 0.5,
    },
    station: {
      "Stone Oven": 1,
    },
    materials: {
      "bread dough": 1,
    },
  },
  {
    name: "Fish n' Bread",
    set: "food",
    stacks: 10,
    stats: {
      "max health": 30,
      "max stamina": 90,
      healing: 3,
      duration: "1800s",
      weight: 1,
    },
    station: {
      "Stone Oven": 1,
    },
    materials: {
      "uncooked fish n' bread": 1,
    },
  },
  {
    name: "Meat Platter",
    set: "food",
    stacks: 10,
    stats: {
      "max health": 80,
      "max stamina": 26,
      healing: 5,
      duration: "1800s",
      weight: 1,
    },
    station: {
      "Stone Oven": 1,
    },
    materials: {
      "uncooked meat platter": 1,
    },
  },
  {
    name: "Honey Glazed Chicken",
    set: "food",
    stacks: 10,
    stats: {
      "max health": 80,
      "max stamina": 26,
      healing: 5,
      duration: "1800s",
      weight: 1,
    },
    station: {
      "Stone Oven": 1,
    },
    materials: {
      "uncooked honey glazed chicken": 1,
    },
  },
  {
    name: "Misthare Supreme",
    set: "food",
    stacks: 10,
    stats: {
      "max health": 85,
      "max stamina": 28,
      healing: 5,
      duration: "1500s",
      weight: 1,
    },
    station: {
      "Stone Oven": 1,
    },
    materials: {
      "uncooked misthare supreme": 1,
    },
  },
  {
    name: "Frosted Sweetbread",
    set: "food",
    stacks: 10,
    stats: {
      "max health": 43,
      "max stamina": 43,
      healing: 4,
      duration: "1800s",
      weight: 1,
    },
    station: {
      "Stone Oven": 1,
    },
    materials: {
      "unbaked sweetbread": 1,
    },
  },
  {
    name: "Piquant Pie",
    set: "food",
    stacks: 10,
    stats: {
      "max health": 105,
      "max stamina": 35,
      healing: 6,
      duration: "1800s",
      weight: 1,
    },
    station: {
      "Stone Oven": 1,
    },
    materials: {
      "uncooked piquant pie": 1,
    },
  },
  {
    name: "Roasted Crust Pie",
    set: "food",
    stacks: 10,
    stats: {
      "max health": 105,
      "max stamina": 24,
      healing: 6,
      duration: "1800s",
      weight: 1,
    },
    station: {
      "Stone Oven": 1,
    },
    materials: {
      "uncooked roasted crust pie": 1,
    },
  },
  {
    name: "Fiery Svinstew",
    set: "food",
    stacks: 10,
    stats: {
      "max health": 95,
      "max stamina": 32,
      healing: 6,
      duration: "1500s",
      weight: 1,
    },
    station: {
      cauldron: 5,
    },
    materials: {
      "asksvin tail": 1,
      "smoke puff": 1,
      "vineberry cluster": 2,
    },
  },
  {
    name: "Mashed Meat",
    set: "food",
    stacks: 10,
    stats: {
      "max health": 100,
      "max stamina": 34,
      healing: 6,
      duration: "1500s",
      weight: 1,
    },
    station: {
      cauldron: 6,
    },
    materials: {
      "asksvin tail": 1,
      "volture meat": 1,
      fiddlehead: 1,
    },
  },
  {
    name: "Cooked Egg",
    set: "food",
    stacks: 20,
    stats: {
      "max health": 35,
      "max stamina": 12,
      healing: 2,
      duration: "1200s",
      weight: 1,
    },
    station: {
      cauldron: 1,
    },
    materials: {
      egg: 1,
    },
  },
  {
    name: "Fish Soup",
    set: "food",
    stacks: 10,
    stats: {
      "max health": 37,
      "max stamina": 18,
      "max eitr": 105,
      healing: 5,
      duration: "1800s",
      weight: 1,
    },
    station: {
      cauldron: 1,
    },
    materials: {
      "raw fish": 3,
      kale: 2,
      ice: 2,
    },
  },
  {
    name: "Lingonberry Juice",
    set: "food",
    stacks: 10,
    stats: {
      "max health": 35,
      "max stamina": 105,
      healing: 5,
      duration: "1500s",
      weight: 1,
    },
    station: {
      cauldron: 1,
    },
    materials: {
      lingonberries: 5,
      ice: 5,
    },
  },
  {
    name: "Meat In Bread",
    set: "food",
    stacks: 10,
    crafts: 2,
    stats: {
      "max health": 110,
      "max stamina": 37,
      healing: 7,
      duration: "1800s",
      weight: 1,
    },
    station: {
      cauldron: 1,
    },
    materials: {
      "moose meat": 1,
      kale: 2,
      "oat flour": 1,
      lingonberries: 2,
    },
  },
  {
    name: "Meatballs and Poteitr",
    set: "food",
    stacks: 10,
    stats: {
      "max health": 35,
      "max stamina": 18,
      "max eitr": 105,
      healing: 5,
      duration: "1500s",
      weight: 1,
    },
    station: {
      cauldron: 1,
    },
    materials: {
      "moose meat": 1,
      lingonberries: 2,
      poteitr: 2,
    },
  },
  {
    name: "Northern Morning Fare",
    set: "food",
    stacks: 5,
    stats: {
      "max health": 85,
      "max stamina": 85,
      "max eitr": 43,
      healing: 7,
      duration: "3000s",
      weight: 1,
    },
    station: {
      cauldron: 1,
    },
    materials: {
      "cooked moose meat": 3,
      poteitr: 5,
      "oat flour": 2,
      "seasoning of the gourd": 1,
    },
  },
  {
    name: "Oat Milk",
    set: "food",
    stacks: 10,
    stats: {
      "max health": 37,
      "max stamina": 110,
      healing: 5,
      duration: "1500s",
      weight: 1,
    },
    station: {
      cauldron: 1,
    },
    materials: {
      oats: 5,
      ice: 5,
    },
  },
  {
    name: "Oatmeal",
    set: "food",
    stacks: 10,
    stats: {
      "max health": 39,
      "max stamina": 115,
      "max eitr": 85,
      healing: 5,
      duration: "1800s",
      weight: 1,
    },
    station: {
      cauldron: 1,
    },
    materials: {
      oats: 2,
      lingonberries: 2,
      "oat milk": 1,
    },
  },
  {
    name: "Oven Pancake Batter",
    set: "food",
    stacks: 10,
    stats: {
      "max health": 39,
      "max stamina": 115,
      healing: 5,
      duration: "1500s",
      weight: 1,
    },
    station: {
      cauldron: 1,
    },
    materials: {
      "moose meat": 1,
      poteitr: 2,
      lingonberries: 2,
      "oat flour": 2,
    },
  },
  {
    name: "Pancakes",
    set: "food",
    stacks: 10,
    crafts: 3,
    stats: {
      "max health": 39,
      "max stamina": 115,
      healing: 5,
      duration: "1800s",
      weight: 1,
    },
    station: {
      cauldron: 1,
    },
    materials: {
      "oat milk": 1,
      "oat flour": 2,
      egg: 2,
      blueberries: 2,
    },
  },
  {
    name: "Pulled Bear",
    set: "food",
    stacks: 10,
    stats: {
      "max health": 37,
      "max stamina": 16,
      healing: 3,
      duration: "1800s",
      weight: 1,
    },
    station: {
      cauldron: 1,
    },
    materials: {
      "cooked bear meat": 1,
      carrot: 2,
      blueberries: 1,
    },
  },
  {
    name: "Raw Fish",
    set: "food",
    stacks: 20,
    stats: {
      "max health": 20,
      "max stamina": 20,
      healing: 1,
      duration: "600s",
      weight: 0.5,
    },
    station: {
      cauldron: 1,
    },
    materials: {
      perch: 1,
      pike: 1,
      tuna: 1,
      tetra: 1,
      trollfish: 1,
      "giant herring": 1,
      grouper: 1,
      "coral cod": 1,
      anglerfish: 1,
      "northern salmon": 1,
      magmafish: 1,
      pufferfish: 1,
    },
  },
  {
    name: "Raw Kale Chips",
    set: "food",
    stacks: 10,
    crafts: 4,
    stats: {
      "max health": 39,
      "max stamina": 115,
      healing: 5,
      duration: "1500s",
      weight: 1,
    },
    station: {
      cauldron: 1,
    },
    materials: {
      kale: 12,
    },
  },
  {
    name: "Seal Meat Soup",
    set: "food",
    stacks: 10,
    stats: {
      "max health": 110,
      "max stamina": 37,
      healing: 7,
      duration: "1800s",
      weight: 1,
    },
    station: {
      cauldron: 1,
    },
    materials: {
      "seal blubber": 2,
      kale: 2,
      ice: 2,
    },
  },
  {
    name: "Smoked Fish",
    set: "food",
    stacks: 10,
    stats: {
      "max health": 30,
      "max stamina": 16,
      "max eitr": 95,
      healing: 5,
      duration: "1500s",
      weight: 1,
    },
    station: {
      cauldron: 1,
    },
    materials: {
      "raw fish": 1,
      kale: 1,
      poteitr: 1,
    },
  },
  {
    name: "Smoked Moose Meat",
    set: "food",
    stacks: 10,
    stats: {
      "max health": 105,
      "max stamina": 35,
      healing: 7,
      duration: "1500s",
      weight: 1,
    },
    station: {
      cauldron: 1,
    },
    materials: {
      "moose meat": 1,
      kale: 2,
    },
  },
  {
    name: "Unbaked Poteitr",
    set: "food",
    stacks: 10,
    stats: {
      "max health": 37,
      "max stamina": 19,
      "max eitr": 110,
      healing: 5,
      duration: "1500s",
      weight: 1,
    },
    station: {
      cauldron: 1,
    },
    materials: {
      "seal blubber": 1,
      kale: 2,
      poteitr: 1,
      "oat flour": 2,
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
