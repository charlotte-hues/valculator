import { Button, ButtonProps } from "@mui/material";
import { Theme, ThemeProvider, styled } from "@mui/material/styles";
import { theme as defaultTheme } from "@valculator/theme";

import { useState } from "react";

const StyledNotifier = styled("div")(() => ({
  background: "white",
  padding: "2px",
  color: "black",
  borderRadius: "2px",
  width: "fit-content",
  position: "absolute",
  right: 0,
  top: "-10px",
  zIndex: 10,
}));

export const ShareListButton = ({
  theme,
  buttonText,
  ...props
}: ButtonProps & {
  theme?: Partial<Theme> | ((outerTheme: Theme) => Theme);
  buttonText?: string;
}) => {
  const [isAlertVisible, setIsAlertVisible] = useState<boolean>(false);

  const copylink = () => {
    navigator.clipboard.writeText(window.location.href);
  };

  const handleClick = () => {
    copylink();
    setIsAlertVisible(true);

    setTimeout(() => {
      setIsAlertVisible(false);
    }, 300);
  };

  return (
    <ThemeProvider theme={theme ?? defaultTheme}>
      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <div style={{ position: "relative", width: "fit-content" }}>
          {isAlertVisible && <StyledNotifier>copied</StyledNotifier>}
          <Button
            aria-label="copy url"
            variant="contained"
            {...props}
            onClick={handleClick}
          >
            {buttonText ? buttonText : "🔗 Copy Link"}
          </Button>
        </div>
      </div>
    </ThemeProvider>
  );
};
