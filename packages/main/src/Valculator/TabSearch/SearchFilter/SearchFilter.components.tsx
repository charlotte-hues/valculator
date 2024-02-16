import FormatListBulletedOutlinedIcon from "@mui/icons-material/FormatListBulletedOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import {
  Autocomplete,
  Grid,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import { PropsWithChildren, useCallback } from "react";

import { useValculatorLayoutContext } from "@/Valculator/ValculatorDataContext/layout/ValculatorLayout.context";

import { useTabSearchContext } from "../TabSearch.context";
import { SearchFiltersField } from "../TabSearch.types";

export const FilterFieldGridItem = ({ children }: PropsWithChildren) => {
  const { isFullScreen } = useValculatorLayoutContext();
  return (
    <Grid
      item
      xs={12}
      md={6}
      lg={4}
      {...(isFullScreen && { sm: 6, md: 4, lg: 4, xl: 3 })}
    >
      {children}
    </Grid>
  );
};

export const SelectField = ({
  field,
  options,
  label,
}: {
  field: SearchFiltersField;
  options: Array<string>;
  label: string;
}) => {
  const { filters, handleUpdateFilter } = useTabSearchContext();

  const handleChange = useCallback(
    (_: React.SyntheticEvent<Element, Event>, value: string[]) => {
      handleUpdateFilter(field, value);
    },
    [field, handleUpdateFilter]
  );

  return (
    <Autocomplete
      value={filters[field] as string[]}
      size="small"
      multiple
      options={options}
      renderInput={(params) => {
        return <TextField key={params.id} {...params} label={label} />;
      }}
      onChange={handleChange}
    />
  );
};

export const SearchSuggestionField = ({
  field,
  options,
  label,
}: {
  field: SearchFiltersField;
  options: Array<string>;
  label: string;
}) => {
  const { filters, handleUpdateFilter } = useTabSearchContext();

  const handleChange = useCallback(
    (_: React.SyntheticEvent<Element, Event>, value: string[]) => {
      handleUpdateFilter(field, value);
    },
    [field, handleUpdateFilter]
  );

  return (
    <Autocomplete
      value={filters[field] as string[]}
      size="small"
      multiple
      freeSolo
      options={options}
      renderInput={(params) => {
        return <TextField key={params.id} {...params} label={label} />;
      }}
      onChange={handleChange}
    />
  );
};

export const ToggleGridViewButton = () => {
  const { grid, handleToggleGrid } = useTabSearchContext();
  return (
    <ToggleButtonGroup
      size="medium"
      value={grid}
      exclusive
      onChange={handleToggleGrid}
    >
      <ToggleButton value={true} disabled={grid}>
        <GridViewOutlinedIcon />
      </ToggleButton>
      <ToggleButton value={false} disabled={!grid}>
        <FormatListBulletedOutlinedIcon />
      </ToggleButton>
    </ToggleButtonGroup>
  );
};
