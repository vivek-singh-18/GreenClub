import React from "react";
import { useState } from "react";
import './form.css';
import example from './assets/Screenshot 2024-08-25 223829.png';


const init ={
    title:"",
    views:"",
    channel:"",


}

function Form(){


    return(
<div className="parent">
    <div id="child">
            <img src={example} id="image"/>
            <div id="submit">     
                <form >
                    <h1>Contact Us</h1>
                    <h2>Name</h2>
                    <input placeholder="Name" name="name"  ></input>
                    <h2>Email</h2>
                    <input placeholder="Email" name="mail" ></input>
                    <h2>Message</h2>
                    <input placeholder="Message" name="message"className="msg" ></input>
                    <button id="f">SUBMIT</button>
                </form>
            </div>
    </div>
 </div>
 )
}
export default Form;