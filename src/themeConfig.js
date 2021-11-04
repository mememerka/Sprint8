import { createTheme } from "@mui/material";
import { grey, yellow } from "@mui/material/colors";
import { light } from "@mui/material/styles/createPalette";



const theme = createTheme({
    palette: {
        primary: {
            main: yellow[500]
        },
        secondary: {
            main: grey[500],
        },
        warning: {
            main: grey[900]
        },
        error: {
            main: grey[50]
        }
      },
    typography: {
        body1: {
            fontFamily: 'Roboto',
            fontSize: '2rem'
        },
        h2: {
            fontFamily: 'Roboto',
            fontSize: '2rem',
            fontWeight: 600
        },
        body2: {
            fontSize: '1rem'
        },
        h5: {
            fontSize: '2rem'
        },
        h6: {
            fontSize: '4rem'
        },
        h4: {
            fontWeight: 900,
        }
        
    },
    textField: {
        border: '1px solid blue'
    }
})

export default theme;