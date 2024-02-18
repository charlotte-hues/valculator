import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import { Button, ButtonGroup, Stack, Typography } from "@mui/material";

import { useValculatorDataContext } from "@valculator/context";

export const QuantityButton = ({
  id,
  variant,
}: {
  id: string;
  variant: "selected" | "owned";
}) => {
  const {
    items: { selected, owned },
    itemsDispatch: { addItem, removeItem, addOwnedItem, removeOwnedItem },
  } = useValculatorDataContext();

  const items = variant === "selected" ? selected : owned;

  const selectedIndex = items.findIndex(
    (selectedItem) => selectedItem.id === id
  );
  const quantity = selectedIndex !== -1 ? items[selectedIndex].quantity : 0;

  return (
    <Stack direction={"row"} alignItems={"center"}>
      <ButtonGroup size="small">
        <Button
          variant="text"
          onClick={(e) => {
            e.stopPropagation();
            variant === "selected" ? removeItem(id) : removeOwnedItem(id);
          }}
          disabled={quantity === 0}
        >
          <KeyboardArrowDownOutlinedIcon fontSize="small" />
        </Button>
        <Typography
          fontWeight={quantity > 0 ? "bold" : "inherit"}
          color={quantity > 0 ? "textPrimary" : "textSecondary"}
        >
          {quantity}
        </Typography>
        <Button
          variant="text"
          onClick={(e) => {
            e.stopPropagation();
            variant === "selected" ? addItem(id) : addOwnedItem(id);
          }}
        >
          <KeyboardArrowUpOutlinedIcon fontSize="small" />
        </Button>
      </ButtonGroup>
    </Stack>
  );
};
