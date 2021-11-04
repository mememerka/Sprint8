

import { ThemeProvider } from "@mui/material";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import FitxaNau from "./components/fitxaNau";
import LlistaNaus from "./components/llistaNaus";
import LoginRegister from "./components/loginRegister";
import WelcomePage from "./components/welcomePage";
import theme from "./themeConfig";


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route path='/nau/:id'>
            <FitxaNau/>
          </Route>
          <Route path='/main'>
            <LlistaNaus/>
          </Route>
          <Route path='/user'>
            <LoginRegister/>
          </Route>
          <Route path='/'>
            <WelcomePage/>
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
