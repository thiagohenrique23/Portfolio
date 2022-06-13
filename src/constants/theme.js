import { createMuiTheme } from '@mui/material';
import { neutralColor, primaryColor } from "./colors"

const theme = createMuiTheme({
  palette: {
    primary: {
      main: primaryColor,
      contrastText: "black"
    },
    text: {
      primary: neutralColor
    }
  }
})

export default theme