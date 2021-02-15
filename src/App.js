import logo from './logo.svg';
import './App.css';
import { Button } from '@material-ui/core';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <h1> Welcome to Live Score </h1>

      

      <Button variant="contained" color="primary"> Primary </Button>
    </div>
  );
}

export default App;
