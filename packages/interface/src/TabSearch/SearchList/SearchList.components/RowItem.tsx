import { Grid, Stack, Typography } from "@mui/material";
import { memo } from "react";

import { IItem } from "data/types";
import {
  LevelIconIndicator,
  WeightIconIndicator,
} from "../../../components/shared/IconIndicators";
import { ItemImage } from "../../../components/shared/ItemImage";
import { QuantityButton } from "../../../components/shared/QuantityButton";

import { ItemCard } from "./SearchList.components";

const RowItemBase = ({ item }: { item: IItem }) => {
  return (
    <ItemCard id={item.id}>
      <Grid container alignItems={"center"} padding={1}>
        <Grid item xs={6}>
          <Stack direction={"row"} gap={1} alignItems={"center"}>
            <ItemImage item={item} size={32} />
            <Typography>{item.name}</Typography>
          </Stack>
        </Grid>
        <Grid item xs={2}>
          <QuantityButton id={item.id} variant="selected" />
        </Grid>
        <Grid item xs={4}>
          <Stack
            direction={"row"}
            gap={1}
            justifyContent={"flex-end"}
            alignItems={"center"}
          >
            {item?.stats?.weight && (
              <WeightIconIndicator weight={item.stats.weight} />
            )}
            {item.level && (
              <LevelIconIndicator name={item.name} level={item.level} />
            )}
          </Stack>
        </Grid>
      </Grid>
    </ItemCard>
  );
};

export const RowItem = memo(RowItemBase);
