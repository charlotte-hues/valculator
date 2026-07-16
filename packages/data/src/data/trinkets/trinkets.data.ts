import { Trinket } from "../@types/Trinket.types";

const trinketsList: Array<Omit<Trinket, "group" | "id" | "type">> = [
  {
    name: "Heart of the Forest",
    set: "bronze",
    stats: {
      weight: 2,
    },
    station: {
      forge: 1,
    },
    materials: {
      "ancient seed": 5,
      bronze: 5,
      "greydwarf shaman trophy": 1,
    },
  },
  {
    name: "Bronze Pendant",
    set: "bronze",
    stats: {
      weight: 2,
    },
    station: {
      forge: 1,
    },
    materials: {
      "bear trophy": 1,
      ruby: 3,
      bronze: 5,
    },
  },
  {
    name: "Fins of Destiny",
    set: "bronze",
    stats: {
      weight: 2,
    },
    station: {
      forge: 1,
    },
    materials: {
      "serpent trophy": 1,
      chitin: 5,
      "serpent scale": 5,
    },
  },
  {
    name: "Iron Brooch",
    set: "iron",
    stats: {
      weight: 2,
    },
    station: {
      forge: 1,
    },
    materials: {
      "leech trophy": 1,
      "ancient bark": 5,
      iron: 5,
    },
  },
  {
    name: "Nimble Anklet",
    set: "iron",
    stats: {
      weight: 2,
    },
    station: {
      forge: 1,
    },
    materials: {
      "withered bone": 5,
      "surtling trophy": 1,
      iron: 5,
    },
  },
  {
    name: "Wolf Sight",
    set: "silver",
    stats: {
      weight: 2,
    },
    station: {
      forge: 1,
    },
    materials: {
      "fenring trophy": 1,
      silver: 5,
      "wolf fang": 5,
    },
  },
  {
    name: "Crystal Heart",
    set: "silver",
    stats: {
      weight: 2,
    },
    station: {
      forge: 1,
    },
    materials: {
      "stone golem trophy": 1,
      crystal: 5,
      silver: 5,
    },
  },
  {
    name: "Bracelets of the Brave",
    set: "black metal",
    stats: {
      weight: 2,
    },
    station: {
      forge: 1,
    },
    materials: {
      "black metal": 5,
      "lox pelt": 5,
      "lox trophy": 1,
    },
  },
  {
    name: "Evasion Mantle",
    set: "black metal",
    stats: {
      weight: 2,
    },
    station: {
      forge: 1,
    },
    materials: {
      "black metal": 5,
      "fulling berserker trophy": 1,
      "linen thread": 10,
    },
  },
  {
    name: "Pulsating Earrings",
    set: "carapace",
    stats: {
      weight: 2,
    },
    station: {
      "black forge": 1,
    },
    materials: {
      carapace: 5,
      "gjall trophy": 1,
      "refined eitr": 5,
    },
  },
  {
    name: "Resounding Shackle",
    set: "carapace",
    stats: {
      weight: 2,
    },
    station: {
      "black forge": 1,
    },
    materials: {
      "refined eitr": 5,
      "scale hide": 5,
      "seeker trophy": 1,
      mandible: 1,
    },
  },
  {
    name: "Jörmundling",
    set: "flametal",
    stats: {
      weight: 2,
    },
    station: {
      "black forge": 1,
    },
    materials: {
      "refined eitr": 5,
      "fallen valkyrie trophy": 1,
      bloodstone: 1,
      flametal: 5,
    },
  },
  {
    name: "Brimstone",
    set: "flametal",
    stats: {
      weight: 2,
    },
    station: {
      "black forge": 1,
    },
    materials: {
      "morgen trophy": 1,
      sulfur: 5,
      "molten core": 1,
      flametal: 5,
    },
  },
];

export const trinkets: Array<Omit<Trinket, "id">> = trinketsList.map(
  (trinket) => ({
    ...trinket,
    group: "trinkets",
    type: "trinket",
  })
);
