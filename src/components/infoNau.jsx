import Typography from '@mui/material/Typography'
import { Box } from '@mui/system';
import theme from '../themeConfig';
import { ThemeProvider } from '@mui/material';

const InfoNau = (props) => {
    /* return(<div>
    <h1>{props.nau}</h1>
    <p>{props.model}</p>
    </div>) */
    return (
        <ThemeProvider theme={theme}>
            <Box sx={{
                mb: 5,
                mt: 5,
                width: 600,
                height: 80,
                borderRadius: 2,
                display: 'flex',
                flexFlow: 'column',
                justifyContent: 'center',
            }}>
                <Typography variant="h4" color="warning" sx={{
                    ml: 5,
                }}>
                    {props.nau}
                </Typography>
                <Typography variant="subtitle1" color="warning"sx={{
                    ml: 5
                }}>
                    {props.model}
                </Typography>
            </Box>
        </ThemeProvider>
    )
}

export default InfoNau;