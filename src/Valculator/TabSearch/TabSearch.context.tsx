import {
  createContext,
  PropsWithChildren,
  useCallback,
  useMemo,
  useState,
} from "react";
import { useContext } from "react";

import { allItemsData } from "@/Valculator/data/allItems.data";

import { useValculatorLayoutContext } from "../ValculatorDataContext/layout/ValculatorLayout.context";
import { getfilteredList } from "./TabSearch.helpers";
import {
  initialSearchFilters,
  SearchFiltersConfig,
  SearchFiltersField,
  TabSearchContextValues,
} from "./TabSearch.types";

export const TabSearchContext = createContext<TabSearchContextValues>({
  filteredList: allItemsData,
  filters: initialSearchFilters,
  handleUpdateFilter: () => {},
  handleClearFilters: () => {},
  filterCount: 0,
  totalResults: allItemsData.length,
  grid: false,
  handleToggleGrid: () => {},
  showAdditonalFilters: false,
  handleToggleShowAdditionalFilters: () => {},
});

export const TabSearchContextProvider = ({ children }: PropsWithChildren) => {
  const { isFullScreen } = useValculatorLayoutContext();

  const [filters, setFilters] =
    useState<SearchFiltersConfig>(initialSearchFilters);

  const handleUpdateFilter = useCallback(
    (field: SearchFiltersField, value: string | string[]) => {
      setFilters((prevState) => ({
        ...prevState,
        [field]: value,
      }));
    },
    []
  );

  const handleClearFilters = useCallback(() => {
    setFilters(initialSearchFilters);
  }, []);

  const { filteredList, filteredListCount, filterCount } = getfilteredList({
    list: allItemsData,
    filters,
  });

  const [grid, setGrid] = useState<boolean>(isFullScreen);
  const [showAdditonalFilters, setShowAdditonalFilters] =
    useState<boolean>(false);

  const handleToggleGrid = useCallback(
    () => setGrid((prevState) => !prevState),
    []
  );

  const handleToggleShowAdditionalFilters = useCallback(
    () => setShowAdditonalFilters((prevState) => !prevState),
    []
  );

  const value = useMemo(() => {
    return {
      filteredList,
      filters,
      handleUpdateFilter,
      handleClearFilters,
      filterCount,
      totalResults: filteredListCount,
      handleToggleShowAdditionalFilters,
      grid,
      showAdditonalFilters,
      handleToggleGrid,
    };
  }, [
    filterCount,
    filteredList,
    filteredListCount,
    filters,
    grid,
    handleClearFilters,
    handleToggleGrid,
    handleToggleShowAdditionalFilters,
    handleUpdateFilter,
    showAdditonalFilters,
  ]);

  return (
    <TabSearchContext.Provider value={value}>
      {children}
    </TabSearchContext.Provider>
  );
};

export function useTabSearchContext() {
  return useContext(TabSearchContext);
}
