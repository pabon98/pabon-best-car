import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';

const Contact = () => {
    return (
        <div>
          <Navbar></Navbar>
          <Header></Header>
          <div className="container ">
            <h1>Contact Us</h1>
            <div className="row d-flex justify-content-center align-items-center mt-4">
                <div className="col-md-4 shadow bg-info ">
                 <h2>Why You Choose Us</h2>
                 <p>Best Price Guarantee</p>
                 <p>Customer care available 24/7</p>
                 <p>5 to 10 years warrenty for parts</p>
                 <p>Best services among the area</p>
                </div>
                <div className="col-md-4 shadow bg-info ms-5">
                 <h2>GET A QUESTION?</h2>
                 <p>Do not hesitage to give us a call. We are an <br /> expert team and we are happy to talk to you. <br />And we are here always to help you</p>
                 <p> <i class="fas fa-envelope"></i> vehica123@gmail.com</p>
                 <p> <i class="fas fa-phone-alt"></i> +88578546525</p>
                </div>
            </div>

            <form class="row g-3 mt-5">
  <div class="col-md-6">
    <label for="inputName4" class="form-label">Name</label>
    <input type="name" class="form-control" id="inputEmail4"/>
  </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">Email</label>
    <input type="email" class="form-control" id="inputEmail4"/>
  </div>
  <div class="col-md-6">
    <label for="inputPhone4" class="form-label">Phone</label>
    <input type="phone" class="form-control" id="inputPhone4"/>
  </div>
  <div class="col-md-6">
    <label for="inputServices4" class="form-label">Services</label>
    <input type="phone" class="form-control" id="inputServices4"/>
  </div>
  <div class="col-12">
    <label for="inputAddress" class="form-label">Message</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="Message"/>
  </div>
 
  <div class="col-md-6">
    <label for="inputCity" class="form-label">City</label>
    <input type="text" class="form-control" id="inputCity"/>
  </div>
  <div class="col-md-4">
    <label for="inputState" class="form-label">State</label>
    <select id="inputState" class="form-select">
      <option selected>Choose...</option>
      <option>...</option>
    </select>
  </div>
  <div class="col-md-2">
    <label for="inputZip" class="form-label">Zip</label>
    <input type="text" class="form-control" id="inputZip"/>
  </div>
  <div class="col-12">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="gridCheck"/>
      <label class="form-check-label" for="gridCheck">
        Check me out
      </label>
    </div>
  </div>
  <div class="col-12">
    <button type="submit" class="btn btn-primary">Submit</button>
  </div>
</form>

        </div>
        <Footer></Footer>
        </div>
    );
};

export default Contact;