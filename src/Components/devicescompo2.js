import React, { Component } from 'react'
import '../App.css'
export default class devicescompo extends Component {
     render() {
          return (
               <div class="card " id='carddevice'>
          <img id='devicephp'src="https://digieb-media.s3.ap-southeast-1.amazonaws.com/assets/media/application/15934970445efad5d46db3esamsung-note-10-lite-black.jfif" class="img-fluid" alt="..."/>
          <div class="card-body">
          
          <h6 class="card-title font-weight-bold">Samsung Galaxy Note 10 </h6>
          <h6 class="card-title font-weight-bold">RM46/mth</h6>
          <p class="card-text">With Go Digi 168 Per Month</p>
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
