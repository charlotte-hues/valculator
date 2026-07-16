import { Recipe } from "../@types/Recipes.types";

const eitrList: Array<Omit<Recipe, "group" | "id" | "type">> = [
  {
    name: "Magically Stuffed Shroom",
    set: "food",
    stacks: 10,
    stats: {
      "max health": 25,
      "max stamina": 15,
      "max eitr": 75,
      healing: 3,
      duration: "1500s",
      weight: 1,
    },
    station: {
      "Stone Oven": 1,
    },
    materials: {
      "uncooked magically stuffed shroom": 1,
    },
  },
  {
    name: "Seeker Aspic",
    set: "food",
    stacks: 10,
    crafts: 2,
    stats: {
      "max health": 28,
      "max stamina": 14,
      "max eitr": 85,
      healing: 3,
      duration: "1800s",
      crafts: 2,
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
    name: "Yggdrasil Porridge",
    set: "food",
    stacks: 10,
    stats: {
      "max health": 27,
      "max stamina": 13,
      "max eitr": 80,
      healing: 3,
      duration: "1500s",
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
    name: "Spicy Marmalade",
    set: "food",
    stacks: 10,
    stats: {
      "max health": 28,
      "max stamina": 14,
      "max eitr": 85,
      healing: 4,
      duration: "1500s",
      weight: 1,
    },
    station: {
      cauldron: 5,
    },
    materials: {
      vineberry: 3,
      honey: 1,
      fiddlehead: 1,
    },
  },
  {
    name: "Scorching Medley",
    set: "food",
    stacks: 10,
    crafts: 3,
    stats: {
      "max health": 28,
      "max stamina": 14,
      "max eitr": 85,
      healing: 4,
      duration: "1500s",
      crafts: 3,
      weight: 1,
    },
    station: {
      cauldron: 6,
    },
    materials: {
      "jotun puffs": 3,
      onion: 3,
      fiddlehead: 3,
    },
  },
  {
    name: "Sizzling Berry Broth",
    set: "food",
    stacks: 10,
    stats: {
      "max health": 28,
      "max stamina": 14,
      "max eitr": 85,
      healing: 4,
      duration: "1500s",
      weight: 1,
    },
    station: {
      cauldron: 5,
    },
    materials: {
      sap: 3,
      fiddlehead: 2,
      vineberry: 2,
    },
  },
  {
    name: "Sparkling Shroomshake",
    set: "food",
    stacks: 10,
    stats: {
      "max health": 30,
      "max stamina": 15,
      "max eitr": 90,
      healing: 4,
      duration: "1500s",
      weight: 1,
    },
    station: {
      cauldron: 6,
    },
    materials: {
      sap: 4,
      vineberry: 2,
      "smoke puff": 2,
      magecap: 2,
    },
  },
  {
    name: "Marinated Greens",
    set: "food",
    stacks: 10,
    stats: {
      "max health": 32,
      "max stamina": 16,
      "max eitr": 95,
      healing: 4,
      duration: "1800s",
      weight: 1,
    },
    station: {
      cauldron: 6,
    },
    materials: {
      sap: 3,
      magecap: 2,
      fiddlehead: 2,
      "smoke puff": 2,
    },
  },
  {
    name: "Minor Eitr Mead",
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
      "mead base: minor eitr": 1,
    },
  },
  {
    name: "Lingering Eitr Mead",
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
      "mead base: lingering eitr": 1,
    },
  },
];

export const eitr: Array<Omit<Recipe, "id">> = eitrList.map((recipe) => ({
  ...recipe,
  group: "recipes",
  type: "eitr",
}));
