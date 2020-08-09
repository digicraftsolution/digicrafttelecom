import React, { Component } from 'react'
import '../App.css'
export default class devicescompo extends Component {
     render() {
          return (
               <div class="card " id='carddevice'>
          <img src="https://digieb-media.s3.ap-southeast-1.amazonaws.com/assets/media/application/15894280315ebcbf3fee8c1iphone-sered.jpg" class="img-fluid" alt="..." id='devicephp'/>
          <div class="card-body">
          
          <h6 class="card-title font-weight-bold">IPHONE SE 64GB</h6>
          <h6 class="card-title font-weight-bold">RM35/mth</h6>
          <p class="card-text">With Go Digi 128 Per Month</p>
          <div class='card-footer bg-white'>
               <center>
          <button type="button" class="btn " id='planbutton'>View More</button>
          </center>
          </div>
          </div>
          </div>
          )
     }
}
