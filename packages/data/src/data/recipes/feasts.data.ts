import { Feast } from "../@types/Recipes.types";

const feastsList: Array<Omit<Feast, "group" | "id" | "type">> = [
  {
    name: "Whole Roasted Meadow Boar",
    set: "food",
    stacks: 10,
    resultQuantity: 10,
    stats: {
      "max health": 35,
      "max stamina": 35,
      healing: 2,
      duration: "3000s",
      weight: 10,
    },
    station: {
      "food preparation table": 1,
    },
    materials: {
      "cooked deer meat": 2,
      "cooked boar meat": 5,
      dandelion: 4,
      "woodland herb blend": 1,
    },
  },
  {
    name: "Black Forest Buffet Platter",
    set: "food",
    stacks: 10,
    resultQuantity: 10,
    stats: {
      "max health": 35,
      "max stamina": 35,
      healing: 3,
      duration: "3000s",
      weight: 10,
    },
    station: {
      "food preparation table": 1,
    },
    materials: {
      "deer stew": 3,
      thistle: 5,
      "queen's jam": 4,
      "woodland herb blend": 1,
    },
  },
  {
    name: "Swamp Dweller's Delight",
    set: "food",
    stacks: 10,
    resultQuantity: 10,
    stats: {
      "max health": 35,
      "max stamina": 35,
      healing: 3,
      duration: "3000s",
      weight: 10,
    },
    station: {
      "food preparation table": 1,
    },
    materials: {
      sausages: 8,
      bloodbag: 4,
      "turnip stew": 2,
      "woodland herb blend": 1,
    },
  },
  {
    name: "Sailor's Bounty",
    set: "food",
    stacks: 10,
    resultQuantity: 10,
    stats: {
      "max health": 45,
      "max stamina": 45,
      healing: 3,
      duration: "3000s",
      weight: 10,
    },
    station: {
      "food preparation table": 1,
    },
    materials: {
      "cooked fish": 5,
      thistle: 4,
      "cooked serpent meat": 2,
      "seafarer's herbs": 1,
    },
  },
  {
    name: "Hearty Mountain Logger's Stew",
    set: "food",
    stacks: 10,
    resultQuantity: 10,
    stats: {
      "max health": 45,
      "max stamina": 45,
      healing: 3,
      duration: "3000s",
      weight: 10,
    },
    station: {
      "food preparation table": 1,
    },
    materials: {
      "wolf skewer": 2,
      carrot: 4,
      "mountain peak pepper powder": 1,
    },
  },
  {
    name: "Plains Pie Picnic",
    set: "food",
    stacks: 10,
    resultQuantity: 10,
    stats: {
      "max health": 55,
      "max stamina": 55,
      healing: 4,
      duration: "3000s",
      weight: 10,
    },
    station: {
      "food preparation table": 1,
    },
    materials: {
      bread: 3,
      "lox meat pie": 2,
      cloudberries: 5,
      "grasslands herbalist harvest": 1,
    },
  },
  {
    name: "Mushrooms Galore á la Mistlands",
    set: "food",
    stacks: 10,
    resultQuantity: 10,
    stats: {
      "max health": 65,
      "max stamina": 65,
      "max eitr": 33,
      healing: 5,
      duration: "3000s",
      weight: 10,
    },
    station: {
      "food preparation table": 1,
    },
    materials: {
      "misthare supreme": 1,
      "cooked seeker meat": 3,
      "yggdrasil porridge": 1,
      "herbs of the hidden hills": 1,
    },
  },
  {
    name: "Ashlands Gourmet Bowl",
    set: "food",
    stacks: 10,
    resultQuantity: 10,
    stats: {
      "max health": 75,
      "max stamina": 75,
      "max eitr": 38,
      healing: 6,
      duration: "3000s",
      weight: 10,
    },
    station: {
      "food preparation table": 1,
    },
    materials: {
      "cooked asksvin tail": 3,
      vineberry: 5,
      "scorching medley": 2,
      "fiery spice powder": 1,
    },
  },
];

export const feasts: Array<Omit<Feast, "id">> = feastsList.map((feast) => ({
  ...feast,
  group: "recipes",
  type: "feasts",
}));
