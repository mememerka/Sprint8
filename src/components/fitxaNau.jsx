import { useParams } from "react-router-dom"
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Box } from "@mui/system";
import Typography from '@mui/material/Typography'
import { Container } from "@mui/material";
import './fitxanaustyled.css'
import NavBar from "./navBar";

const FitxaNau = () => {

    const {id} = useParams()
    const finalId = parseInt((parseInt(id)+2),10)
    const [naus, setNaus] = useState([]);
    

    useEffect(()=>{
      axios.get(`https://swapi.dev/api/starships/${finalId}/`)
        .then(res=>{
          setNaus(res.data);
          console.log(naus)
        })
    },[]); 


    return(
        <div className='maininfo'>
          <NavBar/>
          <Box sx={{
            m: 5,
            pt: 10,
            pl: 10
          }}>
            <Typography variant="h6" color="secondary.main">
              {naus.name}
            </Typography>
            <Typography variant="h5" color="secondary.main" sx={{
              ml: 2,
            }}>
              {naus.model}
            </Typography>
            <Typography variant="body2" color="secondary.main" sx={{
              ml: 5,
              mt: 2,
            }}>
            Starship class: {naus.starship_class} <br/>
            Manufacturer: {naus.manufacturer} <br/>
            Cost: {naus.cost_in_credits} Credits <br/>
            Length: {naus.length} <br/>
            Crew: {naus.crew} <br/>
            </Typography>
          </Box>
        </div>
    )
}

export default FitxaNau