import React from 'react';
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import { BrowserRouter as Router, } from "react-router-dom";
import Header from './Header';
import Sidebar from './Sidebar';
import MainContent from './MainContent';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
  },
}));


function App() {
  const classes = useStyles();
  return (
    <Router>
      <div className="App">
        <div className={classes.root}>
          <CssBaseline />

          <Header/>

          <Sidebar/>
          <MainContent/>   

        </div>
      </div>
    </Router>
  );
}

export default App;
