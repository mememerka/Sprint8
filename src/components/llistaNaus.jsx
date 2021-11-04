

import InfoNau from "./infoNau";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import { Link } from "react-router-dom";
import { ThemeProvider, Container } from "@mui/material";
import NavBar from "./navBar";
import theme from "../themeConfig";
import { bgcolor } from "@mui/system";
import './listStyled.css'
import { Button } from "@mui/material";

function LlistaNaus() {

  const [naus, setNaus] = useState([]);
  const [pag, setPag] = useState(1);
  const [hasMore, setHasmore] = useState(true);


  useEffect(() => {
    axios.get(`https://swapi.dev/api/starships/?page=${pag}`)
      .then(res => {
        console.log(res.data.results);
        setNaus(prevNaus => prevNaus.concat(res.data.results));
      });
  }, [pag]);

  const viewMore = () => {
    setPag(pag + 1);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className='mainlist'>
        <NavBar />
        <Container fixed sx={{
          ml: 10,
          pt: 10,
        }}>
          <InfiniteScroll
            dataLength={naus.length}
            hasMore={true}
            next={() => setPag((prevPag) => prevPag + 1)}
            loader={'Loading'}>
            {naus.map((item, index) => <Button variant="outlined" color="secondary" sx={{
              mb:3,
            }}>
              <Link to={`/nau/${index}`} style={{ color: 'white', textDecoration: 'inherit' }}>
                <InfoNau nau={item.name} model={item.model}></InfoNau>
              </Link>
            </Button>
            )}
          </InfiniteScroll>
        </Container>
      </div>
    </ThemeProvider>


  );
}

export default LlistaNaus;