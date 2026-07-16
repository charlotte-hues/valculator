import { SxProps } from "@mui/material";
import { PropsWithChildren } from "react";

import { ListCard } from "../../../../components/shared/ListCard";

export const ItemCard = ({
  sx,
  children,
}: PropsWithChildren & { sx?: SxProps }) => {
  return <ListCard sx={sx}>{children}</ListCard>;
};
