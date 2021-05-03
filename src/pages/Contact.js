import React, { useState, useEffect } from "react";
import '../trial.css';
import Footer from '../components/Footer'

// import { db } from "../firebase";

const Contact = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
  });

  const { name, email } = data;

  const handleChange = (e) => {
    setData({...data, [e.target.name]: e.target.value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        'https://v1.nocodeapi.com/okarin/google_sheets/txGBSQuULqVCTIoz?tabId=Sheet1', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },

          body: JSON.stringify([[name, email, new Date().toLocaleString()]])
      }
    );
    await response.json()
    setData({...data, name:'', email:''});  
    } catch (err) {
      console.log(err)
    }
  };


  return (
      <div className ="Contact">
<br></br>
{/* <div class="col-25 col-lg-10 ">
                <img src="assets/images/undraw_takeout_boxes_ap54.svg" class="img-fluid" alt="Hero Image"/>
            </div> */}
    <form className="form" onSubmit={handleSubmit}>
      <h1>Earn with us.</h1>

      <br></br>
      <input
        placeholder="Name"
        name="name"
        autoComplete="off"  
        value = {name}
        onChange={handleChange}
      
      />

      <br></br>
      <input
        placeholder="Email"
        name = "email"
        autoComplete = "off"
        value = {email}
        onChange={handleChange}
      />
<br></br>
      <button type="submit">
        Submit
      </button>
    </form>
    

<div>
<Footer />
  </div>
  </div>
  );
};

export default Contact;