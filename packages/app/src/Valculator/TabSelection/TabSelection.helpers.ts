import { SelectedItem } from "../ValculatorDataContext/items/itemData.types";

export const selectionGroupsReducer = (
  acc: Array<{ [key: string]: Array<SelectedItem> }>,
  cur: SelectedItem
) => {
  const group = cur.group;

  const indexOfGroup = acc.findIndex((accGroup) => !!accGroup[group]);

  if (indexOfGroup !== -1) {
    const updatedGroup = [...acc[indexOfGroup][group], { ...cur }];
    acc[indexOfGroup][group] = updatedGroup;
  } else {
    const newGroup = { [group]: [{ ...cur }] };
    acc.push(newGroup);
  }

  return acc;
};

export const filterEmptyGroups = (group: {
  [key: string]: Array<SelectedItem>;
}) => {
  const key = Object.keys(group)[0];
  return group[key].length > 0;
};
