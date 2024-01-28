import { Grid } from "@mui/material";
import RenderIfVisible from "react-render-if-visible";

import { useValculatorLayoutContext } from "@/Valculator/ValculatorDataContext/layout/ValculatorLayout.context";

import { useTabSearchContext } from "../TabSearch.context";
import { GridItem } from "./SearchList.components/GridItem";
import { RowItem } from "./SearchList.components/RowItem";

const ESTIMATED_HEIGHT = 600;

export const SearchList = () => {
  const { filteredList, grid } = useTabSearchContext();
  const { isFullScreen } = useValculatorLayoutContext();

  return grid ? (
    <Grid container spacing={1}>
      {filteredList.map((item, i) => {
        return (
          <Grid
            item
            key={`${item.id}${i}`}
            xs={12}
            sm={6}
            md={4}
            {...(isFullScreen && { sm: 4, md: 3, lg: 2, xl: 1.5 })}
          >
            <RenderIfVisible defaultHeight={ESTIMATED_HEIGHT}>
              <GridItem item={item} />
            </RenderIfVisible>
          </Grid>
        );
      })}
    </Grid>
  ) : (
    <Grid container spacing={2}>
      {filteredList.map((item, i) => {
        return (
          <Grid
            item
            key={`${item.id}${i}`}
            xs={12}
            {...(isFullScreen && { md: 6, lg: 4 })}
          >
            <RenderIfVisible
              key={`${item.id}${i}`}
              defaultHeight={ESTIMATED_HEIGHT}
            >
              <RowItem item={item} />
            </RenderIfVisible>
          </Grid>
        );
      })}
    </Grid>
  );
};
