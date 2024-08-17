import { Fragment } from "react";
import { BrowserRouter as Router, Routes } from 'react-router-dom';
import Navbar from "./Components/NavBar/Navbar";


function App() {
  return (
  <Fragment>
    <Router>
      <Navbar />
      <Routes>
        
      </Routes>
    </Router>
  </Fragment>
  );
}

export default App;
