import { Box } from "@mui/system";
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { useState } from "react";
import './loginRegistreStyled.css'
import NavBar from "./navBar";


const  LoginRegister = () => {

    const [nom, setNom] = useState ('')
    const [cognom, setCognom] = useState ('')
    const [usuari, setUsuari] = useState ('')
    const [password, setPassword] = useState ('')
    
    const [nomError, setNomError] = useState (false)
    const [cognomError, setCognomError] = useState (false)
    const [usuariError, setUsuariError] = useState (false)
    const [passwordError, setPasswordError] = useState (false)
    
    const [loginUsuari, setLoginUsuari] = useState ('')
    const [LoginPassword, setLoginPassword] = useState ('')
    const [LoginUsuariError, setLoginUsuariError] = useState (false)
    const [LoginPasswordError, setLoginPasswordError] = useState (false)

    const submit = () => {
        localStorage.clear();

        if (nom == ''){
            setNomError(true);
        }
        if (cognom == ''){
            setCognomError(true);
        }
        if (usuari == ''){
            setUsuariError(true);
        }
        if (password == ''){
            setPasswordError(true);
        }
        const newUser = [usuari,password]

        localStorage.setItem(usuari,JSON.stringify(newUser));
        console.log(localStorage);
    }

    const login = () => {
        if (loginUsuari == ''){
            setLoginUsuariError(true);
        }
        if (LoginPassword == ''){
            setLoginPasswordError(true);
        }
        const loginCheck = localStorage.getItem(usuari);
        const loginUser = [usuari,password];
        if (loginCheck === loginUser){
            console.log('Login correcte');
        }else{
            console.log('usuari o contrasenya incorrectes');
        }
    }
    return (
        <div className='loginMain'>
            <NavBar/>
            <Box sx={{
                display: 'flex',
                flexFlow: 'column',
                width: 330,
                mt: 10,
                ml: 10
            }}>
                <Typography variant="h2" color="primary.main" sx={{
                    ml:1
                }}>
                    REGISTRE
                </Typography>
                    <TextField
                      id=""
                      label="Nom"
                      variant='outlined'
                      color='primary'
                      required
                      error={nomError}
                      onChange={(e)=> setNom(e.target.value)}
                      size='small' 
                      sx={{
                          m:1,
                      }}
                    />
                    <TextField
                      id=""
                      label="Cognom"
                      variant='outlined'
                      color='primary'
                      required
                      error={cognomError}
                      onChange={(e)=> setCognom(e.target.value)}
                      size='small'
                      sx={{
                        m:1,
                    }}
                    />
                    <TextField
                      id=""
                      label="Usuari"
                      variant='outlined'
                      color='primary'
                      required
                      error={usuariError}
                      onChange={(e)=> setUsuari(e.target.value)}
                      size='small'
                      sx={{
                        m:1,
                    }}
                    />
                    <TextField
                      id=""
                      label="Contrasenya"
                      variant='outlined'
                      color='primary'
                      required
                      error={passwordError}
                      onChange={(e)=> setPassword(e.target.value)}
                      size='small'
                      sx={{
                        m:1,
                    }}
                    />
                    <Button variant="contained" color="primary" onClick={submit} size='large' sx={{
                        m:1,
                    }}>
                        Registrar-se
                    </Button>
            </Box>
            <Box sx={{
                display: 'flex',
                flexFlow: 'column',
                width: 330,
                ml: 20,
                mt: 10
            }}>
                <Typography variant="h2" color="primary.main" sx={{
                    ml:1
                }}>
                    LOGIN
                </Typography>
                    <TextField
                      id=""
                      label="Usuari"
                      variant='outlined'
                      color='primary'
                      required
                      error={LoginUsuariError}
                      size='small'
                      onChange={(e)=> setLoginUsuari(e.target.value)}
                      sx={{
                        m:1,
                    }}
                    />
                    <TextField
                      id=""
                      label="Contrasenya"
                      variant='outlined'
                      color='primary'
                      required
                      error={LoginPasswordError}
                      size='small'
                      onChange={(e)=> setLoginPassword(e.target.value)}
                      sx={{
                        m:1,
                    }}
                    />
                    <Button variant="contained" color="primary" onClick={login} size='large' sx={{
                        m: 1,
                    }}>
                        Entrar
                    </Button>
            </Box>
        </div>
    )
}

export default LoginRegister;