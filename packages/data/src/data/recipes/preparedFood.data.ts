import { Recipe } from "../@types/Recipes.types";

const preparedFoodList: Array<Omit<Recipe, "group" | "id" | "type">> = [
  {
    name: "Bread Dough",
    set: "food",
    stacks: 20,
    crafts: 2,
    stats: {
      crafts: 2,
      weight: 0.5,
    },
    station: {
      cauldron: 4,
    },
    materials: {
      "barley flour": 10,
    },
  },
  {
    name: "Unbaked Sweetbread",
    set: "food",
    stacks: 10,
    stats: {
      weight: 1,
    },
    station: {
      "food preparation table": 1,
    },
    materials: {
      cloudberries: 2,
      egg: 1,
      "barley flour": 1,
      honey: 1,
    },
  },
  {
    name: "Uncooked Fish n' Bread",
    set: "food",
    stacks: 10,
    stats: {
      weight: 1,
    },
    station: {
      "food preparation table": 1,
    },
    materials: {
      anglerfish: 1,
      "bread dough": 2,
    },
  },
  {
    name: "Uncooked Meat Platter",
    set: "food",
    stacks: 10,
    stats: {
      weight: 1,
    },
    station: {
      "food preparation table": 1,
    },
    materials: {
      "seeker meat": 1,
      "lox meat": 1,
      "hare meat": 2,
    },
  },
  {
    name: "Uncooked Honey Glazed Chicken",
    set: "food",
    stacks: 10,
    stats: {
      weight: 1,
    },
    station: {
      "food preparation table": 1,
    },
    materials: {
      "chicken meat": 1,
      honey: 3,
      "jotun puffs": 2,
    },
  },
  {
    name: "Uncooked Misthare Supreme",
    set: "food",
    stacks: 10,
    stats: {
      weight: 1,
    },
    station: {
      "food preparation table": 1,
    },
    materials: {
      "hare meat": 1,
      "jotun puffs": 3,
      carrot: 2,
    },
  },
  {
    name: "Uncooked Stuffed Mushroom",
    set: "food",
    stacks: 10,
    stats: {
      weight: 1,
    },
    station: {
      "food preparation table": 1,
    },
    materials: {
      magecap: 3,
      "blood clot": 1,
      turnip: 2,
    },
  },
  {
    name: "Uncooked Piquant Pie",
    set: "food",
    stacks: 10,
    stats: {
      weight: 1,
    },
    station: {
      "food preparation table": 1,
    },
    materials: {
      "asksvin tail": 2,
      vineberry: 2,
      "barley flour": 4,
    },
  },
  {
    name: "Uncooked Roasted Crust Pie",
    set: "food",
    stacks: 10,
    stats: {
      weight: 1,
    },
    station: {
      "food preparation table": 1,
    },
    materials: {
      vineberry: 2,
      "volture egg": 1,
      "barley flour": 4,
    },
  },
];

export const preparedFood: Array<Omit<Recipe, "id">> = preparedFoodList.map(
  (recipe) => ({
    ...recipe,
    group: "recipes",
    type: "prepared food",
  })
);
