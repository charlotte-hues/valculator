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
  {
    name: "Mead Base: Ratatosk",
    set: "mead",
    stacks: 1,
    stats: {
      weight: 1,
    },
    station: {
      "mead ketill": 1,
    },
    materials: {
      honey: 10,
      blueberries: 10,
      "cured squirrel hamstring": 1,
    },
  },
  {
    name: "Mead Base: Berserkir",
    set: "mead",
    stacks: 1,
    stats: {
      weight: 1,
    },
    station: {
      "mead ketill": 1,
    },
    materials: {
      mushroom: 10,
      "yellow mushroom": 10,
      toadstool: 1,
    },
  },
  {
    name: "Mead Base: Troll Endurance",
    set: "mead",
    stacks: 1,
    stats: {
      weight: 1,
    },
    station: {
      "mead ketill": 1,
    },
    materials: {
      trollfish: 2,
      honey: 10,
      "powdered dragon eggshells": 1,
    },
  },
  {
    name: "Mead Base: Lightfoot",
    set: "mead",
    stacks: 1,
    stats: {
      weight: 1,
    },
    station: {
      "mead ketill": 1,
    },
    materials: {
      "hare trophy": 1,
      feathers: 10,
      magecap: 5,
    },
  },
  {
    name: "Mead Base: Vananidir",
    set: "mead",
    stacks: 1,
    stats: {
      weight: 1,
    },
    station: {
      "mead ketill": 1,
    },
    materials: {
      dandelion: 10,
      perch: 2,
      "fresh seaweed": 1,
    },
  },
  {
    name: "Mead Base: Animal Whispers",
    set: "mead",
    stacks: 1,
    stats: {
      weight: 1,
    },
    station: {
      "mead ketill": 1,
    },
    materials: {
      onion: 5,
      carrot: 10,
      "pungent pebbles": 1,
    },
  },
  {
    name: "Mead Base: Anti-Sting",
    set: "mead",
    stacks: 1,
    stats: {
      weight: 1,
    },
    station: {
      "mead ketill": 1,
    },
    materials: {
      cloudberries: 10,
      grouper: 3,
      "fragrant bundle": 1,
    },
  },
  {
    name: "Mead Base: Major Healing",
    set: "mead",
    stacks: 1,
    stats: {
      weight: 1,
    },
    station: {
      "mead ketill": 1,
    },
    materials: {
      honey: 10,
      "blood clot": 4,
      "royal jelly": 5,
    },
  },
  {
    name: "Mead Base: Minor Eitr",
    set: "mead",
    stacks: 1,
    stats: {
      weight: 1,
    },
    station: {
      "mead ketill": 1,
    },
    materials: {
      honey: 10,
      sap: 5,
      "jotun puffs": 2,
      magecap: 5,
    },
  },
  {
    name: "Mead Base: Lingering Stamina",
    set: "mead",
    stacks: 1,
    stats: {
      weight: 1,
    },
    station: {
      "mead ketill": 1,
    },
    materials: {
      sap: 10,
      cloudberries: 10,
      "jotun puffs": 10,
    },
  },
  {
    name: "Mead Base: Lingering Eitr",
    set: "mead",
    stacks: 1,
    stats: {
      weight: 1,
    },
    station: {
      "mead ketill": 1,
    },
    materials: {
      sap: 10,
      vineberry: 10,
      magecap: 10,
    },
  },
  {
    name: "Mead Base: Lingering Health",
    set: "mead",
    stacks: 1,
    stats: {
      weight: 1,
    },
    station: {
      "mead ketill": 1,
    },
    materials: {
      sap: 10,
      vineberry: 10,
      "smoke puff": 10,
    },
  },
];

export const base: Array<Omit<Recipe, "id">> = baseList.map((building) => ({
  ...building,
  group: "recipes",
  type: "base",
}));
