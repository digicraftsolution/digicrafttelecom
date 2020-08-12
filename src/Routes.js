import React from "react";
import {BrowserRouter as Router ,Route} from "react-router-dom";
import home from './pages/home'
import order from './pages/orderpage'
import Nav from './Components/nav'



export default () => (
    <Router>
        <Nav/>
        <Route path="/" exact component={home} />
        <Route path="/order" exact component={order} />
        
      
      

 
    </Router>
    
)
