import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faJedi } from '@fortawesome/free-solid-svg-icons'
import IconButton from '@mui/material/IconButton'
import Button from '@mui/material/Button'
import { Modal } from '@mui/material'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from './img/logo.svg'


function NavBar() {
    return (
        <div className='main'>
            <AppBar position="fixed" color="primary">
                <Toolbar>
                    <FontAwesomeIcon icon={faJedi} size='lg' />
                        <Link to='/main' style={{ color: 'black', textDecoration: 'inherit' }}>
                            <Typography variant="h4" sx={{
                                ml: 5,
                            }}>
                                STAR WARS
                            </Typography>
                        </Link>
                    <Link to='/user' style={{ color: 'white', textDecoration: 'inherit' }}>
                    <Button variant="contained" color="warning" sx={{
                        ml: 100
                    }}>
                        Login // Registre
                    </Button>
                    </Link>
                </Toolbar>
            </AppBar>
        </div>
    )
} 

export default NavBar;