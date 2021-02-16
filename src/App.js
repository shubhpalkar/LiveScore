import logo from './logo.svg';
import './App.css';
import { Button, Grid } from '@material-ui/core';
import Navbar from './Components/Navbar';
import { getMatches } from './api/Api';
import React, { useEffect, useState, Fragment } from "react";
import Mycard from './Components/Mycard';

function App() {
  const [matches, setMaches] = useState([])


  useEffect(() => {
    getMatches().then((data) => {
      setMaches(data.matches)
      console.log(data.matches)
    })
      .catch(error => alert("Could not load data "))
  }, [])

  return (
    <div className="App">
      <Navbar></Navbar>
      <h1> Welcome to Live Score </h1>

      <Grid container>
        <Grid sm="2"></Grid>

        <Grid sm="8">
          {matches.map((match) => (
            <Fragment key={match.unique_id}>
              {match.type == "twenty20" ? (
                <Mycard key={match.unique_id} match={match} />
              ) : ("")}
            </Fragment>
          ))}
        </Grid>
      </Grid>

    </div>
  );
}

export default App;
