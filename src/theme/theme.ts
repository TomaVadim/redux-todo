import { createTheme } from "@mui/material";
import { Theme } from "@mui/material";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

export const generateTheme = (): Theme => {
  const theme = createTheme({
    palette: {},
    typography: {
      fontFamily: ["Roboto", "sans-serif"].join(","),
    },
  });

  return theme;
};
