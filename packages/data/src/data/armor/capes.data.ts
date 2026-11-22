import { Armor } from "../@types/Armor.types";

const capeList: Array<Omit<Armor, "group" | "id" | "type">> = [
  {
    name: "Deer Hide Cape",
    level: 1,
    set: "leather",
    stats: {
      protection: 1,
      durability: 400,
      weight: 4,
    },
    effects: {},
    station: {
      workbench: 2,
    },
    materials: {
      "deer hide": 4,
      "bone fragments": 5,
    },
  },
  {
    name: "Deer Hide Cape",
    level: 2,
    set: "leather",
    stats: {
      protection: 2,
      durability: 450,
      weight: 4,
    },
    effects: {},
    station: {
      workbench: 3,
    },
    materials: {
      "deer hide": 8,
      "bone fragments": 10,
    },
  },
  {
    name: "Deer Hide Cape",
    level: 3,
    set: "leather",
    stats: {
      protection: 3,
      durability: 500,
      weight: 4,
    },
    effects: {},
    station: {
      workbench: 4,
    },
    materials: {
      "deer hide": 16,
      "bone fragments": 20,
    },
  },
  {
    name: "Deer Hide Cape",
    level: 4,
    set: "leather",
    stats: {
      protection: 4,
      durability: 550,
      weight: 4,
    },
    effects: {},
    station: {
      workbench: 5,
    },
    materials: {
      "deer hide": 32,
      "bone fragments": 40,
    },
  },
  {
    name: "Troll Hide Cape",
    level: 1,
    set: "troll",
    stats: {
      protection: 1,
      durability: 500,
      weight: 4,
    },
    effects: {
      sneak: "+25%",
    },
    station: {
      workbench: 3,
    },
    materials: {
      "bone fragments": 10,
      "troll hide": 10,
    },
  },
  {
    name: "Troll Hide Cape",
    level: 2,
    set: "troll",
    stats: {
      protection: 2,
      durability: 550,
      weight: 4,
    },
    effects: {
      sneak: "+25%",
    },
    station: {
      workbench: 4,
    },
    materials: {
      "bone fragments": 15,
      "troll hide": 15,
    },
  },
  {
    name: "Troll Hide Cape",
    level: 3,
    set: "troll",
    stats: {
      protection: 3,
      durability: 600,
      weight: 4,
    },
    effects: {
      sneak: "+25%",
    },
    station: {
      workbench: 5,
    },
    materials: {
      "bone fragments": 25,
      "troll hide": 25,
    },
  },
  {
    name: "Troll Hide Cape",
    level: 4,
    set: "troll",
    stats: {
      protection: 4,
      durability: 650,
      weight: 4,
    },
    effects: {
      sneak: "+25%",
    },
    station: {
      workbench: 6,
    },
    materials: {
      "bone fragments": 45,
      "troll hide": 45,
    },
  },

  {
    name: "Wolf Fur Cape",
    level: 1,
    set: "wolf",
    stats: {
      protection: 1,
      durability: 1000,
      weight: 4,
    },
    effects: {
      "frost resistance": true,
    },
    station: {
      workbench: 2,
    },
    materials: {
      silver: 4,
      "wolf pelt": 6,
      "wolf trophy": 1,
    },
  },
  {
    name: "Wolf Fur Cape",
    level: 2,
    set: "wolf",
    stats: {
      protection: 2,
      durability: 1200,
      weight: 4,
    },
    effects: {
      "frost resistance": true,
    },
    station: {
      workbench: 3,
    },
    materials: {
      silver: 6,
      "wolf pelt": 10,
      "wolf trophy": 1,
    },
  },
  {
    name: "Wolf Fur Cape",
    level: 3,
    set: "wolf",
    stats: {
      protection: 3,
      durability: 1400,
      weight: 4,
    },
    effects: {
      "frost resistance": true,
    },
    station: {
      workbench: 4,
    },
    materials: {
      silver: 10,
      "wolf pelt": 18,
      "wolf trophy": 1,
    },
  },
  {
    name: "Wolf Fur Cape",
    level: 4,
    set: "wolf",
    stats: {
      protection: 4,
      durability: 1600,
      weight: 4,
    },
    effects: {
      "frost resistance": true,
    },
    station: {
      workbench: 5,
    },
    materials: {
      silver: 18,
      "wolf pelt": 34,
      "wolf trophy": 1,
    },
  },

  {
    name: "Linen Cape",
    level: 1,
    set: "padded",
    stats: {
      protection: 1,
      durability: 1500,
      weight: 4,
    },
    effects: {},
    station: {
      workbench: 2,
    },
    materials: {
      silver: 1,
      "linen thread": 20,
    },
  },
  {
    name: "Linen Cape",
    level: 2,
    set: "padded",
    stats: {
      protection: 2,
      durability: 1550,
      weight: 4,
    },
    effects: {},
    station: {
      workbench: 3,
    },
    materials: {
      silver: 1,
      "linen thread": 24,
    },
  },
  {
    name: "Linen Cape",
    level: 3,
    set: "padded",
    stats: {
      protection: 3,
      durability: 1600,
      weight: 4,
    },
    effects: {},
    station: {
      workbench: 4,
    },
    materials: {
      silver: 1,
      "linen thread": 32,
    },
  },
  {
    name: "Linen Cape",
    level: 4,
    set: "padded",
    stats: {
      protection: 4,
      durability: 1650,
      weight: 4,
    },
    effects: {},
    station: {
      workbench: 5,
    },
    materials: {
      silver: 1,
      "linen thread": 48,
    },
  },
  {
    name: "Lox Cape",
    level: 1,
    set: "lox",
    stats: {
      protection: 1,
      durability: 1200,
      weight: 4,
    },
    effects: {
      additional: "Resistant vs. Frost (negated when Wet)",
    },
    station: {
      workbench: 2,
    },
    materials: {
      silver: 2,
      "lox pelt": 6,
    },
  },
  {
    name: "Lox Cape",
    level: 2,
    set: "lox",
    stats: {
      protection: 2,
      durability: 1250,
      weight: 4,
    },
    effects: {
      additional: "Resistant vs. Frost (negated when Wet)",
    },
    station: {
      workbench: 3,
    },
    materials: {
      silver: 2,
      "lox pelt": 8,
    },
  },
  {
    name: "Lox Cape",
    level: 3,
    set: "lox",
    stats: {
      protection: 3,
      durability: 1300,
      weight: 4,
    },
    effects: {
      additional: "Resistant vs. Frost (negated when Wet)",
    },
    station: {
      workbench: 4,
    },
    materials: {
      silver: 2,
      "lox pelt": 12,
    },
  },
  {
    name: "Lox Cape",
    level: 4,
    set: "lox",
    stats: {
      protection: 4,
      durability: 1350,
      weight: 4,
    },
    effects: {
      additional: "Resistant vs. Frost (negated when Wet)",
    },
    station: {
      workbench: 5,
    },
    materials: {
      silver: 2,
      "lox pelt": 20,
    },
  },
  {
    name: "Feather Cape",
    level: 1,
    set: "eitr",
    stats: {
      protection: 1,
      durability: 1200,
      weight: 4,
    },
    effects: {
      additional: "Resistant vs. Frost (negated when Wet)",
    },
    station: {
      "galdr table": 1,
    },
    materials: {
      "refined eitr": 20,
      "scale hide": 5,
      feathers: 10,
    },
  },
  {
    name: "Feather Cape",
    level: 2,
    set: "eitr",
    stats: {
      protection: 2,
      durability: 1250,
      weight: 4,
    },
    effects: {
      additional: "Resistant vs. Frost (negated when Wet)",
    },
    station: {
      "galdr table": 2,
    },
    materials: {
      "refined eitr": 23,
      "scale hide": 10,
      feathers: 12,
    },
  },
  {
    name: "Feather Cape",
    level: 3,
    set: "eitr",
    stats: {
      protection: 3,
      durability: 1300,
      weight: 4,
    },
    effects: {
      additional: "Resistant vs. Frost (negated when Wet)",
    },
    station: {
      "galdr table": 3,
    },
    materials: {
      "refined eitr": 29,
      "scale hide": 20,
      feathers: 16,
    },
  },
  {
    name: "Feather Cape",
    level: 4,
    set: "eitr",
    stats: {
      protection: 4,
      durability: 1350,
      weight: 4,
    },
    effects: {
      additional: "Resistant vs. Frost (negated when Wet)",
    },
    station: {
      "galdr table": 4,
    },
    materials: {
      "refined eitr": 41,
      "scale hide": 40,
      feathers: 24,
    },
  },
  {
    name: "Asksvin Cloak",
    level: 1,
    set: "ash",
    stats: {
      protection: 1,
      durability: 1500,
      weight: 4,
    },
    effects: {
      additional: "Resistant vs. Frost (negated when Wet)",
    },
    station: {
      "galdr table": 2,
    },
    materials: {
      "morgen sinew": 2,
      "asksvin hide": 6,
    },
  },
  {
    name: "Asksvin Cloak",
    level: 2,
    set: "ash",
    stats: {
      protection: 2,
      durability: 1550,
      weight: 4,
    },
    effects: {
      additional: "Resistant vs. Frost (negated when Wet)",
    },
    station: {
      "galdr table": 3,
    },
    materials: {
      "morgen sinew": 2,
      "asksvin hide": 8,
    },
  },
  {
    name: "Asksvin Cloak",
    level: 3,
    set: "ash",
    stats: {
      protection: 3,
      durability: 1600,
      weight: 4,
    },
    effects: {
      additional: "Resistant vs. Frost (negated when Wet)",
    },
    station: {
      "galdr table": 4,
    },
    materials: {
      "morgen sinew": 2,
      "asksvin hide": 12,
    },
  },
  {
    name: "Asksvin Cloak",
    level: 4,
    set: "ash",
    stats: {
      protection: 4,
      durability: 1650,
      weight: 4,
    },
    effects: {
      additional: "Resistant vs. Frost (negated when Wet)",
    },
    station: {
      "galdr table": 4,
    },
    materials: {
      "morgen sinew": 2,
      "asksvin hide": 20,
    },
  },
  {
    name: "Ashen Cape",
    level: 1,
    set: "ash",
    stats: {
      protection: 12,
      durability: 1200,
      weight: 4,
    },
    effects: {
      additional: "Resistant vs. Frost (negated when Wet)",
    },
    station: {
      "black forge": 3,
    },
    materials: {
      "asksvin hide": 6,
      "morgen sinew": 2,
      flametal: 5,
    },
  },
  {
    name: "Ashen Cape",
    level: 2,
    set: "ash",
    stats: {
      protection: 14,
      durability: 1250,
      weight: 4,
    },
    effects: {
      additional: "Resistant vs. Frost (negated when Wet)",
    },
    station: {
      "black forge": 4,
    },
    materials: {
      "asksvin hide": 8,
      "morgen sinew": 2,
      flametal: 5,
    },
  },
  {
    name: "Ashen Cape",
    level: 3,
    set: "ash",
    stats: {
      protection: 16,
      durability: 1300,
      weight: 4,
    },
    effects: {
      additional: "Resistant vs. Frost (negated when Wet)",
    },
    station: {
      "black forge": 5,
    },
    materials: {
      "asksvin hide": 12,
      "morgen sinew": 2,
      flametal: 5,
    },
  },
  {
    name: "Ashen Cape",
    level: 4,
    set: "ash",
    stats: {
      protection: 18,
      durability: 1350,
      weight: 4,
    },
    effects: {
      additional: "Resistant vs. Frost (negated when Wet)",
    },
    station: {
      "black forge": 5,
    },
    materials: {
      "asksvin hide": 20,
      "morgen sinew": 2,
      flametal: 5,
    },
  },
  {
    name: "Cape of Odin",
    level: 1,
    set: "leather",
    stats: {
      protection: 1,
      durability: 1500,
      weight: 4,
    },
    effects: {},
    station: {
      workbench: 1,
    },
    materials: {
      "leather scraps": 10,
      coal: 4,
    },
  },
  {
    name: "Cape of Odin",
    level: 2,
    set: "leather",
    stats: {
      protection: 2,
      durability: 1550,
      weight: 4,
    },
    effects: {},
    station: {
      workbench: 1,
    },
    materials: {
      "leather scraps": 15,
      coal: 6,
    },
  },
  {
    name: "Cape of Odin",
    level: 3,
    set: "leather",
    stats: {
      protection: 3,
      durability: 1600,
      weight: 4,
    },
    effects: {},
    station: {
      workbench: 1,
    },
    materials: {
      "leather scraps": 25,
      coal: 10,
    },
  },
  {
    name: "Cape of Odin",
    level: 4,
    set: "leather",
    stats: {
      protection: 4,
      durability: 1650,
      weight: 4,
    },
    effects: {},
    station: {
      workbench: 1,
    },
    materials: {
      "leather scraps": 45,
      coal: 18,
    },
  },
  {
    name: "Cape of the Caller",
    level: 1,
    set: "caller",
    stats: {
      protection: 12,
      durability: 1200,
      weight: 4,
    },
    effects: {},
    station: {
      "galdr table": 4,
    },
    materials: {
      "seal pelt": 6,
      nornathread: 2,
      bloodgold: 5,
      "refined eitr": 15,
    },
  },
  {
    name: "Cape of the Caller",
    level: 2,
    set: "caller",
    stats: {
      protection: 14,
      durability: 1250,
      weight: 4,
    },
    effects: {},
    station: {
      "galdr table": 4,
    },
    materials: {
      "seal pelt": 9,
      nornathread: 3,
      bloodgold: 7,
      "refined eitr": 20,
    },
  },
  {
    name: "Cape of the Caller",
    level: 3,
    set: "caller",
    stats: {
      protection: 16,
      durability: 1300,
      weight: 4,
    },
    effects: {},
    station: {
      "galdr table": 4,
    },
    materials: {
      "seal pelt": 15,
      nornathread: 5,
      bloodgold: 11,
      "refined eitr": 30,
    },
  },
  {
    name: "Cape of the Caller",
    level: 4,
    set: "caller",
    stats: {
      protection: 18,
      durability: 1350,
      weight: 4,
    },
    effects: {},
    station: {
      "galdr table": 4,
    },
    materials: {
      "seal pelt": 27,
      nornathread: 9,
      bloodgold: 19,
      "refined eitr": 50,
    },
  },
  {
    name: "Moose Hide Cape",
    level: 1,
    set: "moose",
    stats: {
      protection: 12,
      durability: 1200,
      weight: 4,
    },
    effects: {},
    station: {
      "black forge": 4,
    },
    materials: {
      "moose hide": 6,
      "moose sinew": 2,
      bloodgold: 5,
    },
  },
  {
    name: "Moose Hide Cape",
    level: 2,
    set: "moose",
    stats: {
      protection: 14,
      durability: 1250,
      weight: 4,
    },
    effects: {},
    station: {
      "black forge": 4,
    },
    materials: {
      "moose hide": 9,
      "moose sinew": 3,
      bloodgold: 7,
    },
  },
  {
    name: "Moose Hide Cape",
    level: 3,
    set: "moose",
    stats: {
      protection: 16,
      durability: 1300,
      weight: 4,
    },
    effects: {},
    station: {
      "black forge": 4,
    },
    materials: {
      "moose hide": 15,
      "moose sinew": 5,
      bloodgold: 11,
    },
  },
  {
    name: "Moose Hide Cape",
    level: 4,
    set: "moose",
    stats: {
      protection: 18,
      durability: 1350,
      weight: 4,
    },
    effects: {},
    station: {
      "black forge": 4,
    },
    materials: {
      "moose hide": 27,
      "moose sinew": 9,
      bloodgold: 19,
    },
  },
];

export const cape: Array<Omit<Armor, "id">> = capeList.map((armor) => ({
  ...armor,
  group: "armor",
  type: "cape",
}));
