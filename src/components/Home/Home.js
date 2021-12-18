import React, { useEffect, useState } from "react";
import slide1 from '../../images/car-slide-2.jpg'
import slide2 from '../../images/car-slide-5.jpg'
import slide3 from '../../images/car-slide-4.jpg'
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Reviews from "../Reviews/Reviews";

const Home = () => {
    const[products, setProducts] = useState([])
    useEffect( ()=>{
        fetch('https://murmuring-castle-14767.herokuapp.com/cars')
        .then(res=>res.json())
        .then(data=> setProducts(data))
    },[])
  return (
    <div>
      <Navbar></Navbar>
      <Header></Header>
      <div className="my-3">
        {/* Caurosel section */}
        <h1>Some Amazing Cars</h1>
      <div
        id="carouselExampleControls"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={slide1}  class="d-block ms-auto me-auto  w-50 img-fluid" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={slide2}  class="d-block ms-auto me-auto  w-50 img-fluid" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={slide3}  class="d-block ms-auto me-auto  w-50 img-fluid" alt="..." />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      {/* Products Section */}
      <h1>Our Products</h1>
      <div className="container">
      <div className="row">

        {
          products.slice(0,6).map(product=>(
            <div className="col-md-4 my-2">
              <div class="card" style={{ width: "18rem" }} key={product.key}>
            <img height="200px" src={product.image} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">{product.title}</h5>
              <p class="card-text">
               {product.description.slice(0,120)}
              </p>
              <h6>Price: {product.price}</h6>
              <br />
           
            <Link to={`/purchase/${product._id}`}>
            <button className="btn btn-warning">Purchase</button>
            </Link>
            
            </div>
          </div>
            </div>

          ))
        }
       
      </div>
      </div>
      <div className="my-4">
        <h1>Review Section</h1>
        <Reviews></Reviews>
      </div>

    </div>
    <Footer></Footer>
    </div>
  );
};

export default Home;
