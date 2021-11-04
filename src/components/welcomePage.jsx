import { Box } from "@mui/system";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import './welcomeStyled.css'
import logo from './img/logo.svg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFighterJet } from "@fortawesome/free-solid-svg-icons";


const WelcomePage = () => {
    return <div className='mainWelcome'>
            <Box sx={{
              display: 'flex',
              flexFlow: 'column',
              justifyContent: 'space-between',
              pb: 20,
              height: '100vh',
            }}>
              <Box>
                <img src={logo} alt="" style={{
                  width: 550,
                  marginLeft: 350,
                  paddingTop: 35,
                }}/>
              </Box>
              <Typography variant="body1" color="secondary.main" sx={{
                mx: 30,
                mt: 5,
                width: 850,
              }}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam odio molestias doloremque, possimus ad adipisci, nihil perferendis sunt repellat maxime, voluptatem natus fuga iusto eius eligendi! Molestiae animi exercitationem sint?
              </Typography>
              <Link to='/main' style={{ color: 'white', textDecoration: 'inherit'}}>
              <Button variant="contained" color="primary" sx={{
                mx:70,
                mt: 2,
                display: 'flex',
                flexFlow: 'column'
              }}>
                ENTRAR
                <FontAwesomeIcon icon={faFighterJet} size='lg'/>
              </Button>
              </Link>
            </Box>
           </div>
}

export default WelcomePage;