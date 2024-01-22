export type MaterialsType = keyof typeof MaterialsEnum;

export interface IMaterial {
  id: string;
  name: MaterialsType;
}

export enum MaterialsEnum {
  "abomination trophy",
  "adze",
  "amber",
  "amber pearl",
  "ancient bark",
  "ancient seed",
  "anglerfish",
  "arbalest",
  "barley",
  "barley flour",
  "barley wine base",
  "black metal",
  "bloodbag",
  "blueberries",
  "boar meat",
  "bone fragments",
  "bronze",
  "bronze nails",
  "carapace",
  "carrot",
  "chain",
  "chitin",
  "cloudberries",
  "coal",
  "coins",
  "cooked deer meat",
  "cooked serpent meat",
  "copper",
  "core wood",
  "crystal",
  "dandelion",
  "deer hide",
  "deer trophy",
  "dragon tear",
  "draugr trophy",
  "drake trophy",
  "entrails",
  "feathers",
  "fine wood",
  "fir cone",
  "flint",
  "forge",
  "freeze gland",
  "guck",
  "greydwarf eye",
  "hard antler",
  "honey",
  "iron",
  "iron nails",
  "leather scraps",
  "linen thread",
  "lox meat",
  "lox pelt",
  "mandible",
  "mead base: frost resistance",
  "mead base: medium healing",
  "mead base: medium stamina",
  "mead base: minor healing",
  "mead base: minor stamina",
  "mead base: poison resistance",
  "mead base: tasty",
  "mushroom",
  "needle",
  "neck tail",
  "obsidian",
  "onion",
  "ooze",
  "queen bee",
  "raspberries",
  "refined eitr",
  "resin",
  "root",
  "ruby",
  "scale hide",
  "serpent scale",
  "sharpening stone",
  "silver",
  "silver necklace",
  "skeleton trophy",
  "stone",
  "surtling core",
  "tar",
  "thistle",
  "thunder stone",
  "tin",
  "troll hide",
  "troll leather",
  "troll trophy",
  "turnip",
  "unbaked lox meat pie",
  "wood",
  "wolf fang",
  "wolf pelt",
  "wolf trophy",
  "yggdrasil wood",
  "yellow mushroom",
  "ymir flesh",
}
