import { Box, Button, Grid, Typography } from "@mui/material";
import Collapse from "@mui/material/Collapse";

import {
  allForgeLevels,
  allGroups,
  allItems,
  allLevels,
  allSets,
  allTypes,
  allWorkbenchLevels,
} from "@valculator/data";

import { useTabSearchContext } from "../TabSearch.context";
import {
  FilterFieldGridItem,
  SearchSuggestionField,
  SelectField,
  ToggleGridViewButton,
} from "./SearchFilter.components";

export const SearchFilter = () => {
  const {
    totalResults,
    filterCount,
    filters: { level: levelFilters },
    handleToggleShowAdditionalFilters,
    showAdditonalFilters,
    handleClearFilters,
  } = useTabSearchContext();

  return (
    <>
      <Box paddingBottom={2}>
        <SearchSuggestionField
          field={"name"}
          label={"Search Names"}
          options={allItems}
        />
      </Box>
      <Collapse in={showAdditonalFilters}>
        <Grid container spacing={2} paddingBottom={2}>
          <FilterFieldGridItem>
            <SelectField field={"group"} options={allGroups} label={"Group"} />
          </FilterFieldGridItem>
          <FilterFieldGridItem>
            <SelectField field={"set"} options={allSets} label={"Set"} />
          </FilterFieldGridItem>
          <FilterFieldGridItem>
            <SelectField field={"type"} options={allTypes} label={"Type"} />
          </FilterFieldGridItem>
          <FilterFieldGridItem>
            <SelectField
              field={"level"}
              options={["max", ...allLevels]}
              label={"Item Level"}
            />
          </FilterFieldGridItem>
          <FilterFieldGridItem>
            <SelectField
              field={"workbench level"}
              options={allWorkbenchLevels}
              label={"Workbench Level"}
            />
          </FilterFieldGridItem>
          <FilterFieldGridItem>
            <SelectField
              field={"forge level"}
              options={allForgeLevels}
              label={"Forge Level"}
            />
          </FilterFieldGridItem>
        </Grid>
      </Collapse>

      <Box
        display="flex"
        gap={1}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Typography>{`${totalResults} result${
          totalResults !== 1 ? "s" : ""
        } found`}</Typography>
        <Box display="flex" gap={1}>
          <Button
            disabled={filterCount === 1 && levelFilters[0] === "max"}
            onClick={handleClearFilters}
          >
            Reset Filters
          </Button>
          <Button onClick={handleToggleShowAdditionalFilters}>
            {showAdditonalFilters ? "hide filters" : `${filterCount} filters`}
          </Button>
          <ToggleGridViewButton />
        </Box>
      </Box>
    </>
  );
};
