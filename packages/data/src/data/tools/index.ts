import { Tool } from "../@types/Tools.types";
import { axe } from "./axe.data";
import { club } from "./club.data";
import { misc } from "./misc.data";
import { pickaxe } from "./pickaxe.data";

const toolsList: Array<Omit<Tool, "group" | "id">> = [
  ...axe,
  ...club,
  ...misc,
  ...pickaxe,
];

export const toolsData: Array<Omit<Tool, "id">> = toolsList.map((item) => ({
  ...item,
  group: "tools",
}));
