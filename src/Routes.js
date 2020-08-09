import React from "react";
import {BrowserRouter as Router ,Route} from "react-router-dom";
import home from './pages/home'
import Nav from './Components/nav'



export default () => (
    <Router>
        <Nav/>
        <Route path="/" exact component={home} />
        
      
      

 
    </Router>
    
)
