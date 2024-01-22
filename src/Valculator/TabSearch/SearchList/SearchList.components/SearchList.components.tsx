import { Card, CardActionArea, SxProps } from "@mui/material";
import { PropsWithChildren, useCallback } from "react";

import { useValculatorDataContext } from "@/Valculator/ValculatorDataContext/ValculatorData.context";

export const ItemCard = ({
  id,
  sx,
  children,
}: PropsWithChildren & { id: string; sx?: SxProps }) => {
  const {
    itemsDispatch: { addItem },
  } = useValculatorDataContext();

  const handleAddItem = useCallback(() => {
    addItem(id);
  }, [addItem, id]);

  return (
    <Card onClick={handleAddItem}>
      <CardActionArea sx={sx}>{children}</CardActionArea>
    </Card>
  );
};
