import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';

const About = () => {
    return (
        <div>
          <Navbar></Navbar>
          <Header></Header>
            <h1>About Us</h1>
            <p className="fs-3">
            We are selling cars and cars parts from 10 <years className="br"></years> we sell brand product. We are also renowned for our best products. <br /> You will find positive reviews in our site.So don't hesitate.Order now in our site
            </p>
            <br />
            <div className="row container my-4">
                <div className="col-md-6 my-4">
               <div className=" d-flex ">
               <div>
                 <h1 className="text-danger px-3 ms-5 mt-2 fs-1 fw-bolder">15</h1>
                 </div>
                 <div>
                  <p className="mt-2 fs-3">Years in Business</p>
                 </div>
               </div>
                </div>
                <div className="col-md-6">
                <div className="d-flex justify-content-between">
                 <div>
                  <h1 className="fw-bolder">158</h1>
                  <p className="text-danger fs-5">specialist</p>
                 </div>
                 <div>
                  <h1 className="fw-bolder">50K</h1>
                  <p className="text-danger fs-5">Cars sold</p>
                 </div>
                 <div>
                  <h1 className="fw-bolder">8</h1>
                  <p className="text-danger fs-5">Localizations</p>
                 </div>
                </div>
                </div>
            </div>
            {/* Accordition */}
            <h1>Frequent Questions</h1>
       <div className="container my-4">
       <div class="accordion" id="accordionPanelsStayOpenExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
        Do you Offer any sort of warrenty?
      </button>
    </h2>
    <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
      <div class="accordion-body">
        Yes we offer our customers 10 year warrenty. We also give 5 years warrenty for parts replacement. if you don't damage this surely you will get warrenty and garranty. 
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
        Do you have any special offer for customers?
      </button>
    </h2>
    <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
      <div class="accordion-body">
       Yes, you will get discount all the time if you buy from us.we give our customer special discount always. and if you buy another car you will also get more discount.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
        Do you sell new brands car or old brand also?
      </button>
    </h2>
    <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
      <div class="accordion-body">
        We always keep brand new car in our warehouse. And We have also some old brand which are legend in speed. We sell for customer. So, We keep all the brands which customer prefer mostly.
      </div>
    </div>
  </div>
</div>
       </div>
       <Footer></Footer>
        </div>
    );
};

export default About;