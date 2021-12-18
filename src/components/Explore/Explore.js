import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";

const Explore = () => {
  const [cars, setCars] = useState([]);
  useEffect(() => {
    fetch('https://murmuring-castle-14767.herokuapp.com/cars')
      .then((res) => res.json())
      .then((data) => setCars(data));
  }, []);
  return (
    <div>
      <Navbar></Navbar>
      <Header></Header>
      <div>
      <h1>Explore Our All Products</h1>
      <div className="container">
      <div className="row">

        {
          cars.map(car=>(
            <div className="col-md-4 my-2" key={car.key}>
              <div class="card" style={{ width: "18rem" }} >
            <img height="200px" src={car.image} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">{car.title}</h5>
              <p class="card-text">
               {car.description.slice(0,120)}
              </p>
              <p>Seats: {car.seats}</p>
              <p>Engine: {car.engine}</p>
              <h6>Price: {car.price}</h6>
              <br />
              <Link to={`/purchase/${car._id}`}>
              <button className="btn btn-warning px-4 rounded-2">Purchase</button>
              </Link>
            
            
            </div>
          </div>
            </div>

          ))
        }
       
      </div>
      </div>
    </div>
    <Footer></Footer>
    </div>
  );
};

export default Explore;
