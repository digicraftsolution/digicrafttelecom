import React, { Component } from 'react'
import '../App.css'
export default class purchaseoption extends Component {
     constructor(){
          super()
          this.state={
               button:'newline'
          }
          this.newl=this.newl.bind(this)
          this.poti=this.poti.bind(this)
          this.chanpl=this.chanpl.bind(this)
     }
     newl(){
          this.setState({
               button:'newline'
          })
     }
     poti(){
          this.setState({
               button:'potin'
          })
     }
     chanpl(){
          this.setState({
               button:'chnpl'
          })
     }
     render() {
          const {button}=this.state
         if(button==='newline'){
          return(
               <div id='spacepop'>
                    <br/>
                    <h6>Kindly prepare a scanned copy of your NRIC or passport, staff ID (namecard or tag) for registration purposes.</h6>
                    <br/>
                    <div class='row' id='rowpop'> 
                    
                    <span class='btn' onClick={this.newl} id='selectedtabpop'><div id='tabfont'>New Line<br/></div><small id='tabfont2'>I want to create a new account with Digi</small></span>
                     
                    <span class='btn' onClick={this.poti} id='nonselectedtabpop'><div id='tabfont'>Port In<br/></div><small id='tabfont2'>I want to port in to Digi and keep my existing number.</small></span>
                    
                    <span class='btn' onClick={this.chanpl} id='nonselectedtabpop'><div id='tabfont' >Change Plan<br/></div><small id='tabfont2'>I want to upgrade my existing Digi plan.</small></span>
                 
                    </div>
                    <br/>
              
                    </div>
          )
         }
         else if(button==='potin'){
          return(
               <div id='spacepop'>
                    <br/>
                    <h6>Kindly prepare a scanned copy of your NRIC or passport, staff ID (namecard or tag) for registration purposes.</h6>
                    <br/>
                    <div class='row' id='rowpop'> 
               
               <span class='btn' onClick={this.newl} id='nonselectedtabpop'><div id='tabfont'>New Line<br/></div><small id='tabfont2'>I want to create a new account with Digi</small></span>
                
               <span class='btn' onClick={this.poti} id='selectedtabpop'><div id='tabfont'>Port In<br/></div><small id='tabfont2'>I want to port in to Digi and keep my existing number.</small></span>
               
               <span class='btn' onClick={this.chanpl} id='nonselectedtabpop'><div id='tabfont' >Change Plan<br/></div><small id='tabfont2'>I want to upgrade my existing Digi plan.</small></span>
            
               </div>
               <div class='card' id='popdata'>
                    <br/>
               <h5 id='Plpopl'>Port In For</h5>
               <select class="custom-select custom-select-lg" id='dropdownpop'>
                    <option value="My Own Number" selected>My Own Number</option>
                    <option value="Not My Number">Not My Number</option>
                    
                    </select>
                    <br/>
               <h5 id='Plpopl'>Current Telco</h5>
               <select class="custom-select custom-select-lg" id='dropdownpop'>
                    <option value="My Own Number" selected>Maxis</option>
                    <option value="Not My Number">Celcom</option>
                    <option value="Not My Number">U Mobile</option>
                    <option value="Not My Number">ALTEL</option>
                    <option value="Not My Number">YLT</option>
                    <option value="Not My Number">Others</option>
                    
                    </select>
                    <br/>
               <h5 id='Plpopl'>Mobile Number</h5>
               <input type="text" class="form-control"  placeholder='With your country code example (+60)' />
               <br/>
               <br/>

               

               </div>
               </div>
          )
         }
         else if(button==='chnpl'){
          return(
               <div id='spacepop'>
                    <br/>
                    <h6>Kindly prepare a scanned copy of your NRIC or passport, staff ID (namecard or tag) for registration purposes.</h6>
                    <br/>
                    <div class='row' id='rowpop'> 
               
               <span class='btn' onClick={this.newl} id='nonselectedtabpop'><div id='tabfont'>New Line<br/></div><small id='tabfont2'>I want to create a new account with Digi</small></span>
                
               <span class='btn' onClick={this.poti} id='nonselectedtabpop'><div id='tabfont'>Port In<br/></div><small id='tabfont2'>I want to port in to Digi and keep my existing number.</small></span>
               
               <span class='btn' onClick={this.chanpl} id='selectedtabpop'><div id='tabfont' >Change Plan<br/></div><small id='tabfont2'>I want to upgrade my existing Digi plan.</small></span>
              
               </div>
               <div class='card' id='popdata'>
                    <br/>
               <h5 id='Plpopl'>Change of Plan For</h5>
               <select class="custom-select custom-select-lg" id='dropdownpop'>
                    <option value="My Own Number" selected>My Own Number</option>
                    <option value="Not My Number">Not My Number</option>
                    
                    </select>
                    <br/>
               <h5 id='Plpopl'>Current Type of Plan</h5>
               <select class="custom-select custom-select-lg" id='dropdownpop'>
                    <option value="My Own Number" selected>PostPaid</option>
                    <option value="Not My Number">PrePaid</option>
                    
                    
                    </select>
                    <br/>
               <h5 id='Plpopl'>Mobile Number</h5>
               <input type="text" class="form-control"  placeholder='With your country code example (+60)' />
               <br/>
               <br/>

               

               </div>
               </div>
          )
         }
     }
}
