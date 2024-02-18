import { SelectedItem } from "@valculator/context/types";

export type TabSelectionGroup = {
  [key in string]: Array<SelectedItem>;
};

export type TabSelectionGroups = Array<TabSelectionGroup>;
export interface TabSelectionContextValues {
  groups: TabSelectionGroups;
}
