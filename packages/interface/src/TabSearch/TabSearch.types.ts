import { IItem } from "@valculator/data/types";

export interface SearchFiltersConfig {
  name: string[];
  level: Array<string | number>;
  group: string[];
  set: string[];
  type: string[];
  "workbench level": string[];
  "forge level": string[];
}

export const initialSearchFilters: SearchFiltersConfig = {
  name: [],
  level: ["max"],
  group: [],
  set: [],
  type: [],
  "workbench level": [],
  "forge level": [],
};

export type SearchFiltersField = keyof typeof initialSearchFilters;

export type TabSearchContextValues = {
  filteredList: Array<IItem>;
  filters: SearchFiltersConfig;
  handleUpdateFilter: (
    field: SearchFiltersField,
    value: string | string[]
  ) => void;
  handleClearFilters: () => void;
  filterCount: number;
  totalResults: number;
  grid: boolean;
  handleToggleGrid: () => void;
  showAdditonalFilters: boolean;
  handleToggleShowAdditionalFilters: () => void;
};
