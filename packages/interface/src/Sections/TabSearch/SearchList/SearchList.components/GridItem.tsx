import {
  Box,
  CardActions,
  CardContent,
  Grid,
  Stack,
  Typography,
} from "@mui/material";

import { IItem, IStats } from "@valculator/data/types";

import { ItemCard } from "./SearchList.components";
import { QuantityButton } from "../../../../components/shared/QuantityButton";
import {
  LevelIconIndicator,
  WeightIconIndicator,
} from "../../../../components/shared/IconIndicators";
import { getItemName } from "../../../../helpers/getItemName";
import { ItemImage } from "@valculator/images";

const Stat = ({ name, value }: { name: string; value: string }) => {
  return (
    <Box display="flex" flexDirection="row" justifyContent={"space-between"}>
      <Typography variant="caption" noWrap>
        {name}: &nbsp;
      </Typography>
      <Typography variant="caption" noWrap>
        {value}
      </Typography>
    </Box>
  );
};

const ItemStats = ({
  item,
  stats,
}: {
  item: IItem;
  stats: Array<{ name: string; value: string }>;
}) => {
  const filteredStats = stats.filter(
    (stat) =>
      !stat.value ||
      (stat.name !== "weight" &&
        stat.name !== "crafts" &&
        stat.name !== "parry force" &&
        stat.name !== "knockback" &&
        stat.name !== "backstab")
  );

  return (
    <Stack paddingLeft={3} paddingRight={3} width={"100%"} maxWidth={"160px"}>
      {item.group === "crafting" || !stats.length ? (
        <>
          <Stat name={"set"} value={item.set} />
          <Stat name={"type"} value={item.type} />
        </>
      ) : (
        filteredStats.map((stat) => (
          <Stat key={stat.name} name={stat.name} value={stat.value} />
        ))
      )}
    </Stack>
  );
};

const CardFooter = ({ item }: { item: IItem }) => {
  return (
    <CardActions sx={{ width: "100%" }}>
      <Grid container alignItems={"center"} width={"100%"} fontSize={"32px"}>
        <Grid item xs={3} display="flex" justifyContent={"flex-start"}>
          {item.level && (
            <LevelIconIndicator
              name={item.name}
              level={item.level}
              fontSize="inherit"
            />
          )}
        </Grid>
        <Grid item xs={6} display="flex" justifyContent={"center"}>
          <QuantityButton id={item.id} variant="selected" />
        </Grid>
        <Grid item xs={3} display="flex" justifyContent={"flex-end"}>
          {item.stats?.weight && (
            <WeightIconIndicator
              weight={item.stats.weight}
              fontSize="inherit"
            />
          )}
        </Grid>
      </Grid>
    </CardActions>
  );
};

export const GridItem = ({ item }: { item: IItem }) => {
  const stats = Object.keys(item.stats ?? {}).map((key) => ({
    name: key,
    value: item.stats?.[key as keyof IStats] as string,
  }));

  return (
    <ItemCard
      id={item.id}
      sx={{
        minHeight: "280px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <CardContent>
        <Stack spacing={1} alignItems={"center"}>
          <Typography textAlign={"center"}>{getItemName(item)}</Typography>
          <ItemImage item={item} size={60} />
          <ItemStats stats={stats} item={item} />
        </Stack>
      </CardContent>
      <CardFooter item={item} />
    </ItemCard>
  );
};
