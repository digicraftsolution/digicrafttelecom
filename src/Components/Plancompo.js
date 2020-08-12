import React, { Component } from 'react'
import '../App.css'

export default class Plancompo extends Component {
     render() {
          return (
               
                    <div class="card" id='cardplan'>
     <div class='card-header' id='cardhed' >
          <h2 class='text-white'>Go Digi 98 Per Month</h2>
          <h5 class='bg-white' id='rm'>RM158/month</h5>
          <h6> <del>RM88/month</del></h6>
          </div>          
    <div class="card-body">
      
      <p class="card-text">
       <span class='font-weight-bold'> <p>SPECIFICATIONS </p></span>

Unlimited Domestic Calls<br/>
1,500 SMS Domestic*<br/><br/>
 <span class='font-weight-bold'>Data Quota - 50GB</span><br/>
Anytime Internet (20GB+10GB)<br/>
Internet Mon-Fri 9am-6pm (20GB)</p>

<span class='font-weight-bold'>Go Roam</span><br/>
RM10 / Month<br/>
8GB + 90 mins<br/>
(16 countries)<br/>

+<br/>


Roam Like Home – Thailand<br/>
500 mins call/mth & 500 SMS/mth +<br/>
20GB Internet<br/>

<span class='font-weight-bold'>Go IDD</span><br/>
RM30 / Month<br/>
300 Min<br/><br/>
<span class='font-weight-bold'>24months Contract</span>
</div>
<div class='card-footer bg-white'>
<a href='/order'><button type="button" class="btn " id='planbutton'>Select</button>      </a>
    </div>
     </div>
               
          )
     }
}
