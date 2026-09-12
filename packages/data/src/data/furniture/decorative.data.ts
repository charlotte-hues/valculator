import { Furniture } from "../@types/Furniture.types";

const decorativeList: Array<Omit<Furniture, "group" | "id" | "type">> = [
  {
    name: "Armor Stand",
    set: "iron",
    stats: {
      comfort: 1,
    },
    station: {
      workbench: 1,
    },
    materials: {
      "fine wood": 8,
      "iron nails": 4,
      "leather scraps": 2,
    },
  },
  {
    name: "Item Stand (V)",
    set: "bronze",
    station: {
      workbench: 1,
    },
    materials: {
      "fine wood": 4,
      "bronze nails": 4,
    },
  },
  {
    name: "Item Stand (H)",
    set: "bronze",
    station: {
      workbench: 1,
    },
    materials: {
      "fine wood": 4,
      "bronze nails": 4,
    },
  },
  {
    name: "Sign",
    set: "wood",
    station: {
      workbench: 1,
    },
    materials: {
      coal: 1,
      wood: 2,
    },
  },
  {
    name: "Yule Tree",
    set: "seasonal",
    stats: {
      comfort: 1,
    },
    station: {
      workbench: 1,
    },
    materials: {
      wood: 10,
      "fir cone": 1,
    },
  },
  {
    name: "Yuleklapp(L)",
    set: "seasonal",
    station: {
      workbench: 1,
    },
    materials: {
      "fine wood": 4,
      raspberries: 1,
    },
  },
  {
    name: "Yuleklapp(M)",
    set: "seasonal",
    station: {
      workbench: 1,
    },
    materials: {
      "fine wood": 3,
      dandelion: 1,
    },
  },
  {
    name: "Yuleklapp(S)",
    set: "seasonal",
    station: {
      workbench: 1,
    },
    materials: {
      "fine wood": 2,
      "bone fragments": 1,
    },
  },
  {
    name: "Maypole",
    set: "wood",
    stats: {
      comfort: 1,
    },
    station: {
      workbench: 1,
    },
    materials: {
      wood: 10,
      dandelion: 4,
      thistle: 4,
    },
  },
  {
    name: "Treasure Chest",
    set: "treasure",
    station: {
      workbench: 1,
    },
    materials: {
      coins: 99,
      ruby: 5,
      "silver necklace": 2,
      "fine wood": 8,
      silver: 2,
    },
  },
  {
    name: "Blue Jute Curtain",
    set: "other",
    station: {
      workbench: 1,
    },
    materials: {
      "blue jute": 4,
      "fine wood": 1,
    },
  },
  {
    name: "Blue Jute Drapes",
    set: "other",
    station: {
      workbench: 1,
    },
    materials: {
      "blue jute": 4,
      "fine wood": 1,
    },
  },
  {
    name: "Red Jute Curtain",
    set: "other",
    station: {
      workbench: 1,
    },
    materials: {
      "red jute": 4,
      "fine wood": 1,
    },
  },
  {
    name: "Yule Tree (Craftable)",
    set: "seasonal",
    station: {
      workbench: 1,
    },
    materials: {
      wood: 10,
      "fir cone": 1,
    },
  },
  {
    name: "Yule Wreath",
    set: "seasonal",
    station: {
      workbench: 1,
    },
    materials: {
      "pine cone": 4,
      "red jute": 1,
      "fine wood": 1,
    },
  },
  {
    name: "Yule Garland",
    set: "seasonal",
    station: {
      workbench: 1,
    },
    materials: {
      "fine wood": 2,
      "pine cone": 1,
    },
  },
  {
    name: "Flower Garland",
    set: "seasonal",
    station: {
      workbench: 1,
    },
    materials: {
      "fine wood": 2,
      dandelion: 1,
    },
  },
  {
    name: "Fey Lights",
    set: "seasonal",
    station: {
      workbench: 1,
    },
    materials: {
      "fine wood": 2,
      thistle: 1,
    },
  },
  {
    name: "Mistletoe",
    set: "seasonal",
    station: {
      workbench: 1,
    },
    materials: {
      "fine wood": 1,
      "red jute": 1,
    },
  },
  {
    name: "Barber Station",
    set: "wood",
    station: {
      workbench: 1,
    },
    materials: {
      "fine wood": 10,
      "barber kit": 1,
      "bronze nails": 5,
      "troll hide": 5,
    },
  },
  {
    name: "Tankard",
    set: "fine wood",
    station: {
      workbench: 1,
    },
    materials: {
      "fine wood": 5,
      resin: 2,
    },
  },
  {
    name: "Horn of Odin",
    set: "fine wood",
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
    name: "Horn of Celebration",
    set: "bronze",
    station: {
      workbench: 1,
    },
    materials: {
      bronze: 2,
      "troll hide": 2,
      iron: 2,
    },
  },
  {
    name: "Armour Stand",
    set: "fine wood",
    stats: {
      comfort: 1,
    },
    station: {
      workbench: 1,
    },
    materials: {
      "fine wood": 8,
      "iron nails": 4,
      "leather scraps": 2,
    },
  },
  {
    name: "Asksvin Skeleton",
    set: "wood",
    stats: {
      comfort: 1,
    },
    station: {
      workbench: 1,
    },
    materials: {
      "bone fragments": 50,
      "asksvin neck": 1,
      "asksvin pelvis": 1,
      "asksvin ribcage": 1,
      "asksvin skull": 1,
    },
  },
  {
    name: "Birds' Nest",
    set: "wood",
    station: {
      workbench: 1,
    },
    materials: {
      "writhan roots": 2,
      acorns: 3,
      thistle: 5,
    },
  },
  {
    name: "Black Metal Stack",
    set: "black metal",
    station: {
      workbench: 1,
    },
    materials: {
      "black metal": 30,
    },
  },
  {
    name: "Bloodgold Stack",
    set: "wood",
    station: {
      workbench: 1,
    },
    materials: {
      bloodgold: 30,
    },
  },
  {
    name: "Bronze Stack",
    set: "bronze",
    station: {
      workbench: 1,
    },
    materials: {
      bronze: 30,
    },
  },
  {
    name: "Copper Stack",
    set: "copper",
    station: {
      workbench: 1,
    },
    materials: {
      copper: 30,
    },
  },
  {
    name: "Flametal Stack",
    set: "flametal",
    station: {
      workbench: 1,
    },
    materials: {
      flametal: 30,
    },
  },
  {
    name: "Flint Pile",
    set: "wood",
    station: {
      workbench: 1,
    },
    materials: {
      flint: 50,
    },
  },
  {
    name: "Iron Stack",
    set: "iron",
    station: {
      workbench: 1,
    },
    materials: {
      iron: 30,
    },
  },
  {
    name: "Large Green Pot",
    set: "wood",
    stats: {
      comfort: 1,
      storage: 3,
    },
    station: {
      workbench: 1,
    },
    materials: {
      "pot shard": 5,
      "charcoal resin": 1,
    },
  },
  {
    name: "Medium Green Pot",
    set: "wood",
    stats: {
      comfort: 1,
      storage: 2,
    },
    station: {
      workbench: 1,
    },
    materials: {
      "pot shard": 4,
      "charcoal resin": 1,
    },
  },
  {
    name: "Mysterious Rock",
    set: "wood",
    station: {
      workbench: 1,
    },
    materials: {
      rock: 1,
      coal: 1,
    },
  },
  {
    name: "Silver Stack",
    set: "silver",
    station: {
      workbench: 1,
    },
    materials: {
      silver: 30,
    },
  },
  {
    name: "Small Green Pot",
    set: "wood",
    stats: {
      comfort: 1,
      storage: 1,
    },
    station: {
      workbench: 1,
    },
    materials: {
      "pot shard": 3,
      "charcoal resin": 1,
    },
  },
  {
    name: "Timberwood Stack",
    set: "timberwood",
    station: {
      workbench: 1,
    },
    materials: {
      timberwood: 50,
    },
  },
  {
    name: "Tin Stack",
    set: "tin",
    station: {
      workbench: 1,
    },
    materials: {
      tin: 30,
    },
  },
];

export const decorative: Array<Omit<Furniture, "id">> = decorativeList.map(
  (building) => ({
    ...building,
    group: "furniture",
    type: "decorative",
  })
);
