import React from 'react';
import AppRoutes from "../src/views/Routes";
import { createMuiTheme } from '@material-ui/core/styles';
import {ThemeProvider} from '@material-ui/styles';
import { grey} from "@material-ui/core/colors";
import {BrowserRouter as Router} from 'react-router-dom';


const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#fafafa',
    },
  },

});
function App() {
  return (
    <div className="App">
      <Router>
      <ThemeProvider theme={theme}>
      <AppRoutes />
      </ThemeProvider>
      </Router>    
    </div>
  );
}

export default App;
