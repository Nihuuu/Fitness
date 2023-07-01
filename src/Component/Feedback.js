import React from 'react'
import '../Component/css/feedback.css';

export const Feedback = () => {

  return (
   
    <div class="fform-container">
     <div class="fform">
      <div class="fform-content">
        <header className='fform-header'>Feedback</header>
        <form action="#" className='formm'>
            <div class="ffield input-field">
                <label>NAME</label>
                <input type="name" placeholder="Name" class="name" id="name" autocomplete="off" />
            </div><br />

            <div class="ffield input-field">
                <label>E-mail</label>
                <input type="email"  placeholder="abc@gmail.com" class="input" id="email" autocomplete="off" />
            </div><br />

            <div class="ffield input-field">
                <label>Message</label>
               <textarea placeholder="Message" rows="4" cols="50" > </textarea>
            </div><br />


            <div class="ffield button-field">
                <button  type="submit" onclick="SignIn()" >SUBMIT</button>
            </div>
        
        </form>
    </div>
    </div>
    <br/>
    <br/>
    <br/>
    <br/>
 
     <br />
     <br />
     <br />
 </div>
    
  )
}