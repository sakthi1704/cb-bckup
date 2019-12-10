import React from 'react';
import AppRoutes from "./views/router";
import 'semantic-ui-css/semantic.min.css';
import {BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
      <AppRoutes />
      </Router>    
    </div>
  );
}

export default App;
