import { WorkStation } from "../@types/Workstation.types";
import { base } from "./base.data";
import { bench } from "./bench.data";
import { cooking } from "./cooking.data";
import { production } from "./production.data";

const stationsList: Array<Omit<WorkStation, "group" | "id">> = [
  ...base,
  ...bench,
  ...cooking,
  ...production,
];

export const stationsData: Array<Omit<WorkStation, "id">> = stationsList.map(
  (item) => ({
    ...item,
    group: "crafting",
  })
);
