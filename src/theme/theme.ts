import { createTheme } from "@mui/material";
import { Theme } from "@mui/material";

export const generateTheme = (): Theme => {
  const theme = createTheme({
    palette: {},
    typography: {},
  });

  return theme;
};
