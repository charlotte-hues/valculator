import { IItem } from "@valculator/data/types";
import { maxItemLevels } from "@valculator/data";
import { getObjLocation } from "@valculator/data";

import { SearchFiltersConfig } from "./TabSearch.types";

const getSearchMatch = (filter: string[], item: IItem, field: string[]) =>
  !filter.length ||
  filter.some((search) => {
    return getObjLocation(item, field)
      .toLowerCase()
      .includes(search.toLowerCase());
  });

const getIncludesMatch = (filter: string[], item: IItem, field: string[]) =>
  !filter.length || filter.includes(`${getObjLocation(item, field)}`);

const getLevelMatch = (filter: Array<string | number>, item: IItem) => {
  return (
    !filter.length ||
    filter.some((level) => {
      if (level === "max") {
        return (
          maxItemLevels[item.name] === item.level ||
          maxItemLevels[item.name] === 0
        );
      }
      return level === `${item.level}`;
    })
  );
};

export const getfilteredList = ({
  list,
  filters,
}: {
  list: Array<IItem>;
  filters: SearchFiltersConfig;
}) => {
  const {
    name,
    level,
    group,
    set,
    type,
    "workbench level": workbenchLevel,
    "forge level": forgeLevel,
  } = filters;
  const filteredList = list
    .filter((item) => {
      const nameMatch = getSearchMatch(name, item, ["name"]);
      const groupMatch = getIncludesMatch(group, item, ["group"]);
      const setMatch = getIncludesMatch(set, item, ["set"]);
      const typeMatch = getIncludesMatch(type, item, ["type"]);
      const workbenchLevelMatch = getIncludesMatch(workbenchLevel, item, [
        "station",
        "workbench",
      ]);
      const forgeLevelMatch = getIncludesMatch(forgeLevel, item, [
        "station",
        "forge",
      ]);
      const levelMatch = getLevelMatch(level, item);

      return (
        nameMatch &&
        levelMatch &&
        groupMatch &&
        setMatch &&
        typeMatch &&
        ((!!workbenchLevel.length && workbenchLevelMatch) ||
          (!!forgeLevel.length && forgeLevelMatch) ||
          (!workbenchLevel.length && !forgeLevel.length))
      );
    })
    .sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      return 1;
    });

  const filteredListCount = filteredList.length;
  const filterCount =
    name.length +
    group.length +
    set.length +
    type.length +
    level.length +
    workbenchLevel.length +
    forgeLevel.length;

  return {
    filterCount,
    filteredList,
    filteredListCount,
  };
};
