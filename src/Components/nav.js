import React, { Component } from 'react'
import '../App.css'
export default class nav extends Component {
     render() {
          return (
               <div>
       <nav class="navbar navbar-expand-lg navbar-dark ">
  <a class="navbar-brand" href="/"><img src='http://167.99.77.197/css/images/PruliaImage.png' id='logo'  width="50" height="50" alt="" loading="lazy" /></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item active">
        <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/">FAQ</a>
      </li>
      
    </ul>
  </div>
</nav>
               </div>
          )
     }
}


