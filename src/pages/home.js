import React, { Component } from 'react'

import Caro from '../Components/Caro'
import Footer from '../Components/footer'
import Plancom from '../Components/Plancompo'
import Plancom2 from '../Components/Plancompo2'
import Plancom3 from '../Components/Plancompo3'
import Device from '../Components/devicescompo'
import Device2 from '../Components/devicescompo2'
import Device3 from '../Components/devicescompo3'
import Device4 from '../Components/devicescompo4'
import Device5 from '../Components/devicescompo5'
import '../App.css'




export default class home extends Component {
     render() {
          return (
                     <div >
                       
                       <Caro/>
                       <div id='plan'>
                         <center>
                         <h2 class='text-white' id='plant'>Plans</h2>
                         </center>
                       </div>
                       
                         <center>
                         <h4 class='text-dark' id='cplant'>Choose Plans</h4>
                         <div class='card-deck' id='plandeck'>
                          
                         <Plancom/>
               
                         <Plancom2/>
               
                         <Plancom3/>
                         
                         </div>
                       </center>
                        <div id='plan'>
                         <center>
                         <h3 class='text-white' id='dplant'>Devices</h3>
                         </center>
                       </div> 
                       
                       
                        
                       <div class='card-deck' id='devicedeck' >
                          
                         <Device/>
               
                         <Device2/>
               
                         <Device3/>
                         <Device4/>
                         <Device5/>
                         <Device2/>
                         <Device3/>
                         <Device/>
                         
                       
                         </div>
                         
               
                       
                       <Footer/>
                     </div>
                   )
     }
}
