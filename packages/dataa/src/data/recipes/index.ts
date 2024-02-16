import { Recipe } from "../@types/Recipes.types";
import { base } from "./base.data";
import { cookedFood } from "./cookedFood.data";
import { healing } from "./healing.data";
import { resistance } from "./resistance.data";
import { stamina } from "./stamina.data";

const recipesList: Array<Omit<Recipe, "group" | "id">> = [
  ...base,
  ...cookedFood,
  ...healing,
  ...resistance,
  ...stamina,
];

export const recipesData: Array<Omit<Recipe, "id">> = recipesList.map(
  (item) => ({
    ...item,
    group: "recipes",
  })
);
