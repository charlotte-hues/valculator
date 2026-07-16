import { Card, CardProps } from "@mui/material";
import { styled } from "@mui/material/styles";

import { PropsWithChildren } from "react";

const StyledCard = styled(Card)(({ theme }) => ({
  transition: "all 0.2s ease-in-out",
  "&:hover": {
    backgroundColor: theme.palette.action.hover,
  },
}));

export const ListCard = ({
  children,
  ...props
}: PropsWithChildren & CardProps) => {
  return <StyledCard {...props}>{children}</StyledCard>;
};
