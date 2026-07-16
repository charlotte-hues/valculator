import { Misc } from "../@types/Misc.types";

const pilesList: Array<Omit<Misc, "group" | "id" | "type">> = [
  {
    name: "Coal Pile",
    set: "coal",
    station: {
      hammer: 1,
    },
    materials: {
      coal: 50,
    },
  },
  {
    name: "Coin Pile",
    set: "treasure",
    station: {
      hammer: 1,
    },
    materials: {
      coins: 999,
    },
  },
  {
    name: "Coin Stack",
    set: "treasure",
    station: {
      hammer: 1,
    },
    materials: {
      coins: 99,
    },
  },
  {
    name: "Core Wood Stack",
    set: "core wood",
    station: {
      hammer: 1,
    },
    materials: {
      "core wood": 50,
    },
  },
  {
    name: "Fine Wood Stack",
    set: "core wood",
    station: {
      hammer: 1,
    },
    materials: {
      "fine wood": 50,
    },
  },
  {
    name: "Wood Stack",
    set: "wood",
    station: {
      hammer: 1,
    },
    materials: {
      wood: 50,
    },
  },
  {
    name: "Stone Pile",
    set: "stone",
    station: {
      hammer: 1,
    },
    materials: {
      stone: 50,
    },
  },
  {
    name: "Yggdrasil Wood Stack",
    set: "wood",
    station: {
      hammer: 1,
    },
    materials: {
      "yggdrasil wood": 50,
    },
  },
  {
    name: "Bone Stack",
    set: "structures",
    station: {
      hammer: 1,
    },
    materials: {
      "bone fragments": 50,
    },
  },
  {
    name: "Black Marble Pile",
    set: "stone",
    station: {
      hammer: 1,
    },
    materials: {
      "black marble": 50,
    },
  },
  {
    name: "Grausten Pile",
    set: "stone",
    station: {
      hammer: 1,
    },
    materials: {
      grausten: 50,
    },
  },
  {
    name: "Pile of Skulls",
    set: "structures",
    station: {
      hammer: 1,
    },
    materials: {
      "charred skull": 50,
    },
  },
  {
    name: "Ashwood Stack",
    set: "wood",
    station: {
      hammer: 1,
    },
    materials: {
      ashwood: 50,
    },
  },
];

export const piles: Array<Omit<Misc, "id">> = pilesList.map((building) => ({
  ...building,
  group: "misc",
  type: "piles",
}));
