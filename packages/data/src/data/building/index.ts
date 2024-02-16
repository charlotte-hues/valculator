import { Building } from "../@types/Building.types";
import { adornments } from "./adornments.data";
import { arches } from "./arches.data";
import { beams } from "./beams.data";
import { defense } from "./defense.data";
import { doors } from "./doors.data";
import { floor } from "./floor.data";
import { pillars } from "./pillars.data";
import { poles } from "./poles.data";
import { roof } from "./roof.data";
import { stairs } from "./stairs.data";
import { walls } from "./walls.data";

const buildingList: Array<Omit<Building, "group" | "id">> = [
  ...adornments,
  ...arches,
  ...beams,
  ...defense,
  ...doors,
  ...floor,
  ...pillars,
  ...poles,
  ...roof,
  ...stairs,
  ...walls,
];

export const buildingData: Array<Omit<Building, "id">> = buildingList.map(
  (item) => ({
    ...item,
    group: "building",
  })
);
