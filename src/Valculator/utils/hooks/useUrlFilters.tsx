import LZString from "lz-string";
import { useCallback } from "react";

import { TabsType } from "@/Valculator/ValculatorDataContext/layout/ValculatorLayout.types";

import { useSearchParams } from "./useSearchParams";

type FilterType = {
  items?: { selected?: string[]; owned?: string[] };
  materials?: string[];
  layout?: { tab: TabsType };
  version?: number;
};

export function useUrlFilters() {

  const [searchParams, handleSearchParams] = useSearchParams()
  const currentParams = searchParams;

  let layout =
    currentParams?.layout ??
    LZString.compressToEncodedURIComponent(JSON.stringify({ tab: "search" }));
  let items = currentParams?.items ?? "{}";
  let materials = currentParams?.materials ?? "[]";
  let version = 2;

  const layoutDecompossed = LZString.decompressFromEncodedURIComponent(layout);
  const itemsDecompressed = LZString.decompressFromEncodedURIComponent(
    currentParams?.items
  );
  const materialsDecompressed = LZString.decompressFromEncodedURIComponent(
    currentParams?.materials
  );

  if (!itemsDecompressed && currentParams?.items) {
    version = 1;
  } else {
    items = itemsDecompressed?.length ? itemsDecompressed : items;
    materials = materialsDecompressed?.length
      ? materialsDecompressed
      : materials;
    layout = layoutDecompossed?.length ? layoutDecompossed : layout;
  }

  const handleUpdateSearchParams = useCallback(
    (newFilter: FilterType) => {
      const sanitizedFilter = Object.keys(newFilter).reduce((acc, cur) => {
        const filterString = JSON.stringify(newFilter[cur as keyof FilterType]);
        return {
          ...acc,
          [cur]: LZString.compressToEncodedURIComponent(filterString),
        };
      }, {});
      handleSearchParams(sanitizedFilter);
      // setSearchSearchParams((prev) => {
      //   console.log({newFilter, sanitizedFilter})
      //   return { ...prev, ...sanitizedFilter };    
      // })
  },
    [handleSearchParams]
  );

  const itemsObject: { selected: string[]; owned: string[] } =
    JSON.parse(items);

  return {
    activeTab: JSON.parse(layout)?.tab,
    items: itemsObject,
    materials: JSON.parse(materials),
    version,
    handleUpdateSearchParams,
  };
}

export function composeFilter<T>(
  queryStrings: string[],
  search?: {
    debouncedSearch: string;
    searchKeys?: (keyof T)[];
    searchKeyTransforms?: { [key: string]: (value: string) => string };
    searchArrayKeys?: (keyof T)[];
    useUpperCase?: boolean;
  }
) {
  let searchString;
  let searchArrayFieldString;
  if (search && search.debouncedSearch.length > 0) {
    if (search.searchKeys?.length) {
      searchString = search.searchKeys
        .map((s) => {
          const searchKey = s as string;
          const searchValue = search?.searchKeyTransforms?.[searchKey]
            ? search?.searchKeyTransforms?.[searchKey]?.(search.debouncedSearch)
            : search.debouncedSearch;
          return `${String(searchKey)} ILIKE '%${searchValue}%'`;
        })
        .join(" || ");
    }

    if (search.searchArrayKeys?.length) {
      const term = search.useUpperCase
        ? search.debouncedSearch.toUpperCase()
        : search.debouncedSearch;
      searchArrayFieldString = search.searchArrayKeys
        .map((s) => `${String(s)}  LIKE '%${term}%'`)
        .join(" || ");
    }

    searchString = [searchString, searchArrayFieldString]
      .filter((statement) => statement)
      .join(" || ");

    searchString = `(${searchString})`;
  }
  return (
    [searchString, ...queryStrings]
      .filter((statement) => statement)
      .join(" && ") || undefined
  );
}
