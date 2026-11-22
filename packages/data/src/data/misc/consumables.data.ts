import { Misc } from "../@types/Misc.types";

const consumablesList: Array<Omit<Misc, "group" | "id" | "type">> = [
  {
    name: "Bell",
    set: "other",
    station: {
      "black forge": 1,
    },
    materials: {
      "bell fragment": 3,
    },
  },
  {
    name: "Blue Fireworks",
    set: "other",
    station: {
      workbench: 1,
    },
    materials: {
      "basic fireworks": 1,
      blueberries: 1,
    },
  },
  {
    name: "Cold Fishing Bait",
    set: "other",
    crafts: 20,
    station: {
      "food preparation table": 1,
    },
    materials: {
      "fishing bait": 20,
      "fenring trophy": 1,
    },
  },
  {
    name: "Cyan Fireworks",
    set: "other",
    station: {
      workbench: 1,
    },
    materials: {
      "basic fireworks": 1,
      "greydwarf eye": 1,
    },
  },
  {
    name: "Frosty Fishing Bait",
    set: "other",
    crafts: 20,
    station: {
      "food preparation table": 1,
    },
    materials: {
      "fishing bait": 20,
      "drake trophy": 1,
    },
  },
  {
    name: "Green Fireworks",
    set: "other",
    station: {
      workbench: 1,
    },
    materials: {
      "basic fireworks": 1,
      guck: 1,
    },
  },
  {
    name: "Heavy Fishing Bait",
    set: "other",
    crafts: 20,
    station: {
      "food preparation table": 1,
    },
    materials: {
      "fishing bait": 20,
      "serpent trophy": 1,
    },
  },
  {
    name: "Hot Fishing Bait",
    set: "other",
    crafts: 20,
    station: {
      "food preparation table": 1,
    },
    materials: {
      "fishing bait": 20,
      "warrior trophy": 1,
    },
  },
  {
    name: "Mead Horn of Odin",
    set: "other",
    station: {
      workbench: 1,
    },
    materials: {
      "fine wood": 4,
      "deer trophy": 1,
      resin: 2,
    },
  },
  {
    name: "Misty Fishing Bait",
    set: "other",
    crafts: 20,
    station: {
      "food preparation table": 1,
    },
    materials: {
      "fishing bait": 20,
      "lox trophy": 1,
    },
  },
  {
    name: "Mossy Fishing Bait",
    set: "other",
    crafts: 20,
    station: {
      "food preparation table": 1,
    },
    materials: {
      "fishing bait": 20,
      "troll trophy": 1,
    },
  },
  {
    name: "Purple Fireworks",
    set: "other",
    station: {
      workbench: 1,
    },
    materials: {
      "basic fireworks": 1,
      turnip: 1,
    },
  },
  {
    name: "Red Fireworks",
    set: "other",
    station: {
      workbench: 1,
    },
    materials: {
      "basic fireworks": 1,
      raspberries: 1,
    },
  },
  {
    name: "Sealbreaker",
    set: "other",
    station: {
      "galdr table": 1,
    },
    materials: {
      "sealbreaker fragment": 9,
    },
  },
  {
    name: "Sharpening Stone",
    set: "stone",
    station: {
      stonecutter: 1,
    },
    materials: {
      stone: 5,
    },
  },
  {
    name: "Sticky Fishing Bait",
    set: "other",
    crafts: 20,
    station: {
      "food preparation table": 1,
    },
    materials: {
      "fishing bait": 20,
      "abomination trophy": 1,
    },
  },
  {
    name: "Stingy Fishing Bait",
    set: "other",
    crafts: 20,
    station: {
      "food preparation table": 1,
    },
    materials: {
      "fishing bait": 20,
      "fuling trophy": 1,
    },
  },
  {
    name: "Yellow Fireworks",
    set: "other",
    station: {
      workbench: 1,
    },
    materials: {
      "basic fireworks": 1,
      dandelion: 1,
    },
  },
];

export const consumables: Array<Omit<Misc, "id">> = consumablesList.map((item) => ({
  ...item,
  group: "misc",
  type: "consumables",
}));
