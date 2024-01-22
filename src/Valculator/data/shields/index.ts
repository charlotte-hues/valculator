import { Shield } from "../@types/Shields.types";
import { bucklersShield } from "./bucklers.data";
import { roundShield } from "./roundShields.data";
import { towerShield } from "./towerShields.data";

const shieldsList: Array<Omit<Shield, "group" | "id">> = [
  ...roundShield,
  ...towerShield,
  ...bucklersShield,
];

export const shieldsData: Array<Omit<Shield, "id">> = shieldsList.map(
  (item) => ({
    ...item,
    group: "shields",
  })
);
