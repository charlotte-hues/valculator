import { Armor } from "../@types/Armor.types";

const helmetsList: Array<Omit<Armor, "group" | "id" | "type">> = [
  {
    name: "Leather Helmet",
    level: 1,
    set: "leather",
    stats: {
      protection: 2,
      durability: 400,
      weight: 1,
    },
    effects: {},
    station: {
      workbench: 2,
    },
    materials: {
      "deer hide": 6,
    },
  },
  {
    name: "Leather Helmet",
    level: 2,
    set: "leather",
    stats: {
      protection: 4,
      durability: 450,
      weight: 1,
    },
    effects: {},
    station: {
      workbench: 3,
    },
    materials: {
      "deer hide": 12,
      "bone fragments": 5,
    },
  },
  {
    name: "Leather Helmet",
    level: 3,
    set: "leather",
    stats: {
      protection: 6,
      durability: 500,
      weight: 1,
    },
    effects: {},
    station: {
      workbench: 4,
    },
    materials: {
      "deer hide": 24,
      "bone fragments": 15,
    },
  },
  {
    name: "Leather Helmet",
    level: 4,
    set: "leather",
    stats: {
      protection: 8,
      durability: 550,
      weight: 1,
    },
    effects: {},
    station: {
      workbench: 5,
    },
    materials: {
      "deer hide": 42,
      "bone fragments": 30,
    },
  },
  {
    name: "Troll Leather Helmet",
    level: 1,
    set: "troll",
    stats: {
      protection: 6,
      durability: 500,
      weight: 1,
    },
    effects: {
      sneak: "+25%",
    },
    station: {
      workbench: 3,
    },
    materials: {
      "troll leather": 5,
      "bone fragments": 3,
    },
  },
  {
    name: "Troll Leather Helmet",
    level: 2,
    set: "troll",
    stats: {
      protection: 8,
      durability: 700,
      weight: 1,
    },
    effects: {
      sneak: "+25%",
    },
    station: {
      workbench: 4,
    },
    materials: {
      "troll leather": 7,
      "bone fragments": 4,
    },
  },
  {
    name: "Troll Leather Helmet",
    level: 3,
    set: "troll",
    stats: {
      protection: 10,
      durability: 900,
      weight: 1,
    },
    effects: {
      sneak: "+25%",
    },
    station: {
      workbench: 5,
    },
    materials: {
      "troll leather": 11,
      "bone fragments": 6,
    },
  },
  {
    name: "Troll Leather Helmet",
    level: 4,
    set: "troll",
    stats: {
      protection: 12,
      durability: 1100,
      weight: 1,
    },
    effects: {
      sneak: "+25%",
    },
    station: {
      workbench: 6,
    },
    materials: {
      "troll leather": 17,
      "bone fragments": 9,
    },
  },
  {
    name: "Bronze Helmet",
    level: 1,
    set: "bronze",
    stats: {
      protection: 8,
      durability: 1000,
      weight: 3,
    },
    effects: {},
    station: {
      forge: 1,
    },
    materials: {
      bronze: 5,
      "deer hide": 2,
    },
  },
  {
    name: "Bronze Helmet",
    level: 2,
    set: "bronze",
    stats: {
      protection: 10,
      durability: 1200,
      weight: 3,
    },
    effects: {},
    station: {
      forge: 2,
    },
    materials: {
      bronze: 8,
      "deer hide": 2,
    },
  },
  {
    name: "Bronze Helmet",
    level: 3,
    set: "bronze",
    stats: {
      protection: 12,
      durability: 1400,
      weight: 3,
    },
    effects: {},
    station: {
      forge: 3,
    },
    materials: {
      bronze: 14,
      "deer hide": 2,
    },
  },
  {
    name: "Bronze Helmet",
    level: 4,
    set: "bronze",
    stats: {
      protection: 14,
      durability: 1600,
      weight: 3,
    },
    effects: {},
    station: {
      forge: 4,
    },
    materials: {
      bronze: 23,
      "deer hide": 2,
    },
  },

  {
    name: "Iron Helmet",
    level: 1,
    set: "iron",
    stats: {
      protection: 14,
      durability: 1200,
      weight: 3,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      forge: 2,
    },
    materials: {
      iron: 20,
      "deer hide": 2,
    },
  },
  {
    name: "Iron Helmet",
    level: 2,
    set: "iron",
    stats: {
      protection: 16,
      durability: 1400,
      weight: 3,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      forge: 3,
    },
    materials: {
      iron: 25,
      "deer hide": 2,
    },
  },
  {
    name: "Iron Helmet",
    level: 3,
    set: "iron",
    stats: {
      protection: 18,
      durability: 1600,
      weight: 3,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      forge: 4,
    },
    materials: {
      iron: 35,
      "deer hide": 2,
    },
  },
  {
    name: "Iron Helmet",
    level: 4,
    set: "iron",
    stats: {
      protection: 20,
      durability: 1800,
      weight: 3,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      forge: 5,
    },
    materials: {
      iron: 50,
      "deer hide": 2,
    },
  },

  {
    name: "Drake Helmet",
    level: 1,
    set: "wolf",
    stats: {
      protection: 20,
      durability: 1000,
      weight: 3,
    },
    effects: {},
    station: {
      forge: 2,
    },
    materials: {
      silver: 20,
      "wolf pelt": 2,
      "drake trophy": 2,
    },
  },
  {
    name: "Drake Helmet",
    level: 2,
    set: "wolf",
    stats: {
      protection: 22,
      durability: 1200,
      weight: 3,
    },
    effects: {},
    station: {
      forge: 3,
    },
    materials: {
      silver: 25,
      "wolf pelt": 2,
      "drake trophy": 2,
    },
  },
  {
    name: "Drake Helmet",
    level: 3,
    set: "wolf",
    stats: {
      protection: 24,
      durability: 1400,
      weight: 3,
    },
    effects: {},
    station: {
      forge: 4,
    },
    materials: {
      silver: 35,
      "wolf pelt": 2,
      "drake trophy": 2,
    },
  },
  {
    name: "Drake Helmet",
    level: 4,
    set: "wolf",
    stats: {
      protection: 26,
      durability: 1600,
      weight: 3,
    },
    effects: {},
    station: {
      forge: 5,
    },
    materials: {
      silver: 50,
      "wolf pelt": 2,
      "drake trophy": 2,
    },
  },
  {
    name: "Padded Helmet",
    level: 1,
    set: "padded",
    stats: {
      protection: 26,
      durability: 1000,
      weight: 3,
    },
    effects: {},
    station: {
      forge: 1,
    },
    materials: {
      iron: 10,
      "linen thread": 15,
    },
  },
  {
    name: "Padded Helmet",
    level: 2,
    set: "padded",
    stats: {
      protection: 28,
      durability: 1200,
      weight: 3,
    },
    effects: {},
    station: {
      forge: 2,
    },
    materials: {
      iron: 15,
      "linen thread": 15,
    },
  },
  {
    name: "Padded Helmet",
    level: 3,
    set: "padded",
    stats: {
      protection: 30,
      durability: 1400,
      weight: 3,
    },
    effects: {},
    station: {
      forge: 3,
    },
    materials: {
      iron: 25,
      "linen thread": 15,
    },
  },
  {
    name: "Padded Helmet",
    level: 4,
    set: "padded",
    stats: {
      protection: 32,
      durability: 1600,
      weight: 3,
    },
    effects: {},
    station: {
      forge: 4,
    },
    materials: {
      iron: 40,
      "linen thread": 15,
    },
  },
  {
    name: "Root Mask",
    level: 1,
    set: "root",
    stats: {
      protection: 8,
      durability: 800,
      weight: 3,
    },
    effects: {
      additional: "Resistant vs. Pierce",
    },
    station: {
      workbench: 2,
    },
    materials: {
      root: 10,
      "ancient bark": 10,
      "leather scraps": 2,
    },
  },
  {
    name: "Root Mask",
    level: 2,
    set: "root",
    stats: {
      protection: 10,
      durability: 900,
      weight: 3,
    },
    effects: {
      additional: "Resistant vs. Pierce",
    },
    station: {
      workbench: 3,
    },
    materials: {
      root: 12,
      "ancient bark": 15,
      "leather scraps": 2,
    },
  },
  {
    name: "Root Mask",
    level: 3,
    set: "root",
    stats: {
      protection: 12,
      durability: 1000,
      weight: 3,
    },
    effects: {
      additional: "Resistant vs. Pierce",
    },
    station: {
      workbench: 4,
    },
    materials: {
      root: 16,
      "ancient bark": 25,
      "leather scraps": 2,
    },
  },
  {
    name: "Root Mask",
    level: 4,
    set: "root",
    stats: {
      protection: 14,
      durability: 1100,
      weight: 3,
    },
    effects: {
      additional: "Resistant vs. Pierce",
    },
    station: {
      workbench: 5,
    },
    materials: {
      root: 22,
      "ancient bark": 40,
      "leather scraps": 2,
    },
  },
  {
    name: "Eitr-Weave Hood",
    level: 1,
    set: "eitr",
    stats: {
      protection: 16,
      durability: 1000,
      weight: 1,
    },
    effects: {
      additional: "Eitr regen",
    },
    station: {
      "Galdr Table": 1,
    },
    materials: {
      "linen thread": 16,
      "refined eitr": 15,
      iron: 2,
    },
  },
  {
    name: "Eitr-Weave Hood",
    level: 2,
    set: "eitr",
    stats: {
      protection: 18,
      durability: 1200,
      weight: 1,
    },
    effects: {
      additional: "Eitr regen",
    },
    station: {
      "Galdr Table": 2,
    },
    materials: {
      "linen thread": 24,
      "refined eitr": 20,
      iron: 3,
    },
  },
  {
    name: "Eitr-Weave Hood",
    level: 3,
    set: "eitr",
    stats: {
      protection: 20,
      durability: 1400,
      weight: 1,
    },
    effects: {
      additional: "Eitr regen",
    },
    station: {
      "Galdr Table": 3,
    },
    materials: {
      "linen thread": 40,
      "refined eitr": 30,
      iron: 2,
    },
  },
  {
    name: "Eitr-Weave Hood",
    level: 4,
    set: "eitr",
    stats: {
      protection: 22,
      durability: 1600,
      weight: 1,
    },
    effects: {
      additional: "Eitr regen",
    },
    station: {
      "Galdr Table": 4,
    },
    materials: {
      "linen thread": 64,
      "refined eitr": 45,
      iron: 2,
    },
  },
  {
    name: "Midsummer Crown",
    level: 1,
    set: "sesonal",
    stats: {
      protection: 1,
      durability: 0,
      weight: 1,
    },
    effects: {},

    station: {
      workbench: 1,
    },
    materials: {
      dandelion: 10,
    },
  },
  {
    name: "Fenris Hood",
    level: 1,
    set: "fenris",
    stats: {
      protection: 10,
      durability: 1000,
      weight: 1,
    },
    effects: {
      movementSpeed: "+3%",
    },
    station: {
      workbench: 2,
    },
    materials: {
      "fenris hair": 20,
      "wolf pelt": 2,
      "cultist trophy": 1,
    },
  },
  {
    name: "Fenris Hood",
    level: 2,
    set: "fenris",
    stats: {
      protection: 12,
      durability: 1200,
      weight: 1,
    },
    effects: {
      movementSpeed: "+3%",
    },
    station: {
      workbench: 3,
    },
    materials: {
      "fenris hair": 25,
      "wolf pelt": 6,
      "cultist trophy": 1,
    },
  },
  {
    name: "Fenris Hood",
    level: 3,
    set: "fenris",
    stats: {
      protection: 14,
      durability: 1400,
      weight: 1,
    },
    effects: {
      movementSpeed: "+3%",
    },
    station: {
      workbench: 4,
    },
    materials: {
      "fenris hair": 35,
      "wolf pelt": 14,
      "cultist trophy": 1,
    },
  },
  {
    name: "Fenris Hood",
    level: 4,
    set: "fenris",
    stats: {
      protection: 16,
      durability: 1600,
      weight: 1,
    },
    effects: {
      movementSpeed: "+3%",
    },
    station: {
      workbench: 5,
    },
    materials: {
      "fenris hair": 50,
      "wolf pelt": 26,
      "cultist trophy": 1,
    },
  },
  {
    name: "Carapace Helmet",
    level: 1,
    set: "carapace",
    stats: {
      protection: 32,
      durability: 1200,
      weight: 3,
    },
    effects: {},
    station: {
      "black forge": 1,
    },
    materials: {
      carapace: 16,
      "scale hide": 3,
      mandible: 2,
      "refined eitr": 4,
    },
  },
  {
    name: "Carapace Helmet",
    level: 2,
    set: "carapace",
    stats: {
      protection: 34,
      durability: 1400,
      weight: 3,
    },
    effects: {},
    station: {
      "black forge": 2,
    },
    materials: {
      carapace: 24,
      "scale hide": 4,
      mandible: 2,
      "refined eitr": 6,
    },
  },
  {
    name: "Carapace Helmet",
    level: 3,
    set: "carapace",
    stats: {
      protection: 36,
      durability: 1600,
      weight: 3,
    },
    effects: {},
    station: {
      "black forge": 3,
    },
    materials: {
      carapace: 40,
      "scale hide": 6,
      mandible: 2,
      "refined eitr": 10,
    },
  },
  // {
  //   name: "Carapace Helmet",
  //   level: 4,
  //   set: "carapace",
  //   stats: {
  //     protection: 38,
  //     durability: 1800,
  //     weight: 3,
  //   },
  //   effects: {},
  //   station: {
  //     "black forge": 4,
  //   },
  //   materials: {
  //     carapace: 64,
  //     "scale hide": 9,
  //     mandible: 2,
  //     "refined eitr": 16,
  //   },
  // },
];

export const helmets: Array<Omit<Armor, "id">> = helmetsList.map((armor) => ({
  ...armor,
  group: "armor",
  type: "helmet",
}));
