import logo from './logo.svg';
import './App.css';
import { Button, Grid, Typography } from '@material-ui/core';
import Navbar from './Components/Navbar';
import { getMatches } from './api/Api';
import React, { useEffect, useState, Fragment } from "react";
import Mycard from './Components/Mycard';
import { blue } from '@material-ui/core/colors';


function App() {
  const [matches, setMaches] = useState([])


  useEffect(() => {
    getMatches().then((data) =>
    {
      setMaches(data.matches);
      console.log(data.matches);
    })
      .catch(error => alert("Could not load data "))
  }, [])

  return (
    <div className="App">
      <Navbar></Navbar>
      <Typography variant="h2" style={{ marginBottom: 20 , backgroundColor: 'black', color: 'white'}} > Welcome to Live Score </Typography>

      <Grid container justify="center">
        <Grid item xs={8} >

          {
            matches.map((match) => (
     <Fragment key={match.unique_id}>
               {match.type == "Twenty20" ? (
                 <Mycard key={match.unique_id} match={match} />
               ) : ("")}
             </Fragment>
            ))
          }

        </Grid>
      </Grid>
    </div>
  );
}

export default App;
