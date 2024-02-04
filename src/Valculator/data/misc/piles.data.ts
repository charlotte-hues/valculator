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
];

export const piles: Array<Omit<Misc, "id">> = pilesList.map((building) => ({
  ...building,
  group: "misc",
  type: "piles",
}));
