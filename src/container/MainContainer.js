import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import NavBar from '../components/NavBar';
import Home from '../components/Home'
import Events from '../components/Events'
import Fabrics from '../components/Fabrics'

const MainContainer = () => {
    return (

        <Router>
            <>
            <NavBar />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/events" element={<Events />} />
                <Route path="/fabrics" element={<Fabrics />} />
            </Routes>
            </>
        </Router>

    )
  }
  
  export default MainContainer;