import React, { Component } from 'react'
import '../App.css'
import {Link} from 'react-router-dom'
import Plan1 from '../Components/plan1'
import Plan2 from '../Components/plan2'
import Device1 from '../Components/device1'
import Device2 from '../Components/device2'
import Pop from '../Components/purchaseoption'

export default class orderpage extends Component {
     constructor(){
          super()
          this.state={
               page:'purchaseop',
               planed:'Go Digi 98 Per Month',
               device:'IPHONE SE 64GB'
          }
          this.plans=this.plans.bind(this)
          this.device=this.device.bind(this)
          this.next=this.next.bind(this)
          this.back=this.back.bind(this)
     }
     plans(e){
          this.setState({
               planed:e.target.value
          })
          
     }
     device(e){
          this.setState({
               device:e.target.value
          })
          
     }
     next(){
          if(this.state.page==='purchaseop')
          {
               this.setState({
                    page:'portin'
               })
          }
          else if(this.state.page==='portin')
          {
               this.setState({
                    page:'Details'
               })
          }
         else if(this.state.page==='Details')
          {
               this.setState({
                    page:'Summary'
               })
          }
         else if(this.state.page==='Summary')
          {
            this.setState({
                 page:''
            })
          }
     }
     back(){
          if(this.state.page==='Summary')
          {
               this.setState({
                    page:'Details'
               })
          }
         else if(this.state.page==='Details')
          {
               this.setState({
                    page:'portin'
               })
          }
         else if(this.state.page==='portin')
          {
               this.setState({
                    page:'purchaseop'
               })
          }
        
     }
     render() {
          const{page,planed,device}=this.state
          if(page==='purchaseop')
          {
               return(
                    <div>
                    <center>
                    <h3 id='portinc'>Your Order</h3>
                         
                    
                    <div id='space'>
                    
                    <div class='row' > 
                    <span class='card' id='selectedtab'><div id='tabfont'>1<br/>Purchase Option</div></span>
                    <div id='noncolorline'></div>   
                    <span class='card' id='nonselectedtab'><div id='tabfont'>2<br/>Configure</div></span>
                    <div id='noncolorline'></div>
                    <span id='nonselectedtab'><div id='tabfont' >3<br/>Details</div></span>
                    <div id='noncolorline'></div>
                    <span id='nonselectedtab'><div id='tabfont'>4<br/>Summary</div></span>
                    </div>
                    </div>
                    <Pop/>
                    
                    
                    
                    <br/>
                    <br/>
                    
                    <Link to='/' ><button type="button" class="btn " id='orderbutton' >Back</button></Link>
                    <button type="button" class="btn " id='orderbutton' onClick={this.next}>Next</button>
                    <br/>
                    <br/>
                  </center>
                  </div>
               )
          }
          else if(page==='portin'){
             return(
               <div>
                    <center>
                    <h3 id='portinc'>Your Order</h3>
                         
                    
                    <div id='space'>
                    
                    <div class='row'> 
                    <span class='card' id='nonselectedtab'><div id='tabfont'>1<br/>Purchase Option</div></span>
                    <div id='noncolorline'></div>     
                    <span class='card' id='selectedtab'><div id='tabfont'>2<br/>Configure</div></span>
                    <div id='noncolorline'></div>
                    <span id='nonselectedtab'><div id='tabfont' >3<br/>Details</div></span>
                    <div id='noncolorline'></div>
                    <span id='nonselectedtab'><div id='tabfont'>4<br/>Summary</div></span>
                    
                    </div>
                    
                    
                    </div>
                    
                    <br/>
                    
                   
                    
                    <div class='card-group' id='ordercard' >
                    <div class='card' >
                         <h6 id='principalplan'>Principal Plan Type</h6>
                    <select class="custom-select custom-select-lg mb-3" id='dropdownd'onChange={this.plans}>
               
                    <option value="Go Digi 98 Per Month" selected>Go Digi 98 Per Month</option>
                    <option value="Go Digi 128 Per Month">Go Digi 128 Per Month</option>
                    
                    </select>
                    </div>
                    <div class='card' id='Specificationd'>
                    {
                        planed==='Go Digi 128 Per Month'?
                         <Plan2/>:
                         <Plan1/>
                    }
                    </div>
                    <div class='card' id='pland'>
                    <span class='font-weight-bold text-white'>Price</span><br/>
                             <center>
                                  {
                                       planed==='Go Digi 128 Per Month'?
                                       <h4 class='text-white' id='plandt'>RM118/month</h4>
                                       :
                                       <h4 class='text-white' id='plandt'>RM80/month</h4>
                                  }
                              
                              </center>
                    </div>
                    </div>
                    <div class='card-group' id='ordercard' >
                    <div class='card' >
                         <h6 id='devicet'>Devices</h6>
                    <select class="custom-select custom-select-lg mb-3" id='dropdownc' onChange={this.device}>
               
                    <option value="IPHONE SE 64GB" selected>IPHONE SE 64GB</option>
                    <option value="Samsung Galaxy Note 10">Samsung Galaxy Note 10</option>
                          
                    </select>
                    </div>
                    <div class='card' id='Specificationc'>
                                  {
                                       device==='Samsung Galaxy Note 10'?
                                       <Device2/>:
                                       <Device1/>
                                  }
                    </div>
                    <div class='card' id='planc'>
                    <span class='font-weight-bold text-white'>Price</span><br/>
                             <center>
                                  {
                                       device==='Samsung Galaxy Note 10'?
                                       <h4 class='text-white' id='plandc'>RM62/month</h4>:
                                       <h4 class='text-white' id='plandc'>RM35/month</h4>
                                       
                                  }
                              
                              </center>
                    </div>
                    
                    
                    </div>
                    <br/>
                    <br/>
                    
                    <button type="button" class="btn " id='orderbutton' onClick={this.back}>Back</button>
                    <button type="button" class="btn " id='orderbutton' onClick={this.next}>Next</button>
                    <br/>
                    <br/>
                  </center>
             </div>
             )
        }
        else if(page==='Details')
        {
          return(
               
               <div>
                    <center>
                    <h3  id='portinc'>Your Order</h3>
                          
                    
                    <div id='space'>
                    <div class='row'>  
                    <span class='card' id='nonselectedtab'><div id='tabfont'>1<br/>Purchase Option</div></span>
                    <div id='noncolorline'></div>    
                    <span class='card' id='nonselectedtab'><div id='tabfont'>2<br/>Configure</div></span>
                    <div id='colorline' ></div>
                    <span  id='selectedtab'><div id='tabfont' >3<br/>Details</div></span>
                    <div id='noncolorline' ></div>
                    <span id='nonselectedtab'><div id='tabfont'>4<br/>Summary</div></span>
                    
                    </div>
                    </div>
                   
                    </center>
                    <div class='card' id='detailscard'>
                    <form>
                    
                    <div class='card' id='detail1'>
                         <div class='card'id='detail11' >
                    <label for="exampleFormControlInput1" class='font-weight-bold'>Your Details</label>
                    <div class="row">
                    <div class="col">
                    <label for="exampleFormControlTextarea1">First Name</label>
                    <input type="text" class="form-control" />
                    </div>
                    <div class="col">
                    <label for="exampleFormControlTextarea1">Last Name</label>
                    <input type="text" class="form-control" />
                    </div>
                   
                    </div>
                     <br/>
                    

                    </div>
                    </div>
                    <div class='card' id='detail1'>
                         <div class='card'id='detail11' >

                    <label for="exampleFormControlInput1" class='font-weight-bold'>NRIC</label>
                    <div class="form-group">
                    <label for="exampleFormControlInput1">NRIC No.</label>
                    <input type="text" class="form-control" id="exampleFormControlInput1" />
                    </div>
                    <div class="form-group">
                    <label for="exampleFormControlInput1">Company Name</label>
                    <input type="text" class="form-control" id="exampleFormControlInput1" />
                    </div>
                    <div class="form-group">
                    <label for="exampleFormControlInput1">Email Address</label>
                    <input type="text" class="form-control" id="exampleFormControlInput1" />
                    </div>
                    <div class="form-group">
                    <label for="exampleFormControlInput1">Contact number</label>
                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder='With your country code example (+60)' />
                    </div>
                    <div class="custom-file">
                    <input type="file" class="custom-file-input" id="customFile"/>
                    <label class="custom-file-label" for="customFile">Take a Photo of Original IC with Color (Front)</label>
                    </div>
                    <br/>
                    <div class="custom-file">
                         
                    <input type="file" class="custom-file-input" id="customFile"/>
                    <label class="custom-file-label" for="customFile">Take a Photo of Original IC with Color (Back)</label>
                    </div>
                    <br/> 
                    <div class="custom-file">
                    
                    <input type="file" class="custom-file-input" id="customFile"/>
                    <label class="custom-file-label" for="customFile">Take Photo of Staff ID</label>
                    </div>
                    <br/>
                    
                    </div>
                    </div>
                    <div class='card' id='detail1'>
                         <div class='card'id='detail11' >
                    <label for="exampleFormControlInput1" class='font-weight-bold'>Delivery Address</label>
                    <div class="form-group">
                    <label for="exampleFormControlTextarea1">Street Address1</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                   
                    
                    <div class="row">
                    <div class="col">
                    <label for="exampleFormControlTextarea1">Country</label>
                    <input type="text" class="form-control" />
                    </div>
                    <div class="col">
                    <label for="exampleFormControlTextarea1">State</label>
                    <input type="text" class="form-control" />
                    </div>
                    </div>
                    <div class="row">
                    <div class="col">
                    <label for="exampleFormControlTextarea1">PostCode</label>
                    <input type="text" class="form-control" />
                    </div>
                    <div class="col">
                    <label for="exampleFormControlTextarea1">City</label>
                    <input type="text" class="form-control" />
                    </div>
                    </div>
                    <br/>
                    </div>
                    </div>
                    <div class='card' id='detail1'>
                         <div class='card'id='detail11' >
                    <label for="exampleFormControlInput1" class='font-weight-bold'>Reference Contact Info</label>
                    <div class="form-group">
                    <label for="exampleFormControlInput1">Full Name per NRIC</label>
                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder='With your country code example (+60)' />
                    </div>
                    <div class="form-group">
                    <label for="exampleFormControlInput1">Contact number</label>
                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder='With your country code example (+60)' />
                    </div>
                    </div>
                    </div>
                    
                    <center>
                    <button type="button" class="btn ml-auto" id='orderbutton' onClick={this.back}>Back</button>

                    <button type="button" class="btn mr-auto" id='orderbutton' onClick={this.next}>Next</button>
                    <br/>
                    <br/>
                    </center>
                    
                    
                    </form> 
                    </div>
                   
                    
             </div>   

             
               ) 
        }
        else if(page==='Summary')
        {
          return(
               
               <div>
               <center>
               <h3  id='portinc'>Your Order</h3>
                 
               </center>
               <center>
               <div id='space'>
                    <div class='row'>    
                    <span class='card' id='selectedtab'><div id='tabfont'>1<br/>Purchase Option</div></span>
                    <div id='noncolorline'></div>  
                    <span class='card' id='nonselectedtab'><div id='tabfont'>2<br/>Configure</div></span>
                    <div id='colorline' ></div>
                    <span id='nonselectedtab'><div id='tabfont' >3<br/>Details</div></span>
                    <div id='colorline' ></div>
                    <span id='selectedtab' ><div id='tabfont'>4<br/>Summary</div></span>
                    
                    </div>
                    </div>
               </center>
              
               <div class='card' id='summarycard'>
               <form>
               <div class='card' id='detail1'>
                         <div class='card'id='detail11' >
                    <label for="exampleFormControlInput1" class='font-weight-bold'>Your Details</label>
                    <div class="row">
                    <div class="col">
                    <label for="exampleFormControlTextarea1">First Name</label>
                   <h5>Sam </h5>
                    </div>
                    <div class="col">
                    <label for="exampleFormControlTextarea1">Last Name</label>
                    <h5>Joshap</h5>
                    </div>
                    </div>
                    </div>
                    </div>
                    <div class='card' id='detail1'>
                         <div class='card'id='detail11' >
                    <label for="exampleFormControlInput1" class='font-weight-bold'>NRIC</label>
                    <div class="form-group">
                    <label for="exampleFormControlInput1">NRIC No.</label>
                    <h5>1234567890</h5>
                    </div>
                    <div class="form-group">
                    <label for="exampleFormControlInput1">Company Name</label>
                    <h5>Digicraft</h5>
                    </div>
                    <div class="form-group">
                    <label for="exampleFormControlInput1">Email Address</label>
                    <h5>abc@gmail.com</h5>
                    </div>
                    <div class="form-group">
                    <label for="exampleFormControlInput1">Contact number</label>
                    <h5>+602342456897</h5>
                    </div>
                    </div>
                    </div>
                    
                    
                    <div class='card' id='detail1'>
                         <div class='card'id='detail11' >
                    <label for="exampleFormControlInput1" class='font-weight-bold'>Delivery Address</label>
                    <div class="form-group">
                    <label for="exampleFormControlTextarea1">Street Address1</label>
                    <h5>11 Jln Yong Peng Taman Sri Chaah 85400 Chaah Chaah Johor 85400 Malaysia Labis Johor 85400 Malaysia</h5>
                    </div>
                   
                    
                    <div class="row">
                    <div class="col">
                    <label for="exampleFormControlTextarea1">Country</label>
                    <h5>Malaysia</h5>
                    </div>
                    <div class="col">
                    <label for="exampleFormControlTextarea1">State</label>
                    <h5>Johor</h5>
                    </div>
                    </div>
                    <div class="row">
                    <div class="col">
                    <label for="exampleFormControlTextarea1">PostCode</label>
                    <h5>85400</h5>
                    </div>
                    <div class="col">
                    <label for="exampleFormControlTextarea1">City</label>
                    <h5>Chaah</h5>
                    </div>
                    </div>
                    </div>
                    </div>
                    <div class='card' id='detail1'>
                         <div class='card'id='detail11' >
                    <label for="exampleFormControlInput1">Reference Contact Info</label>
                    <div class="form-group">
                    <label for="exampleFormControlInput1">Full Name per NRIC</label>
                    <h5> Sam Joshap</h5>
                    </div>
                    <div class="form-group">
                    <label for="exampleFormControlInput1">Contact number</label>
                    <h5>+602342456897</h5>
                    </div>
                    </div>
                    </div>
                    <center>
                    <button type="button" class="btn ml-auto" id='orderbutton' onClick={this.back}>Back</button>
                   
                    <button type="button" class="btn mr-auto" id='orderbutton' onClick={this.next}>Next</button>
                    <br/>
                    <br/>
                    </center>
                    
                    
                    </form>
                    </div>
               
        </div>  
               ) 
        }
        else
        {
          return(
               
               <div>
                        <center> 
                    <h2 class='portinc'>Payment Gate</h2>
                    <button id='orderbutton'>Process to payment</button>
                    </center>
                    
                    
               </div>
               ) 
        }
     }
}
