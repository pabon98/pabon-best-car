import React from "react";
import "./Registration.css";
import Input from "../Input/Input";
import Button from "../Button/Button";
import { Container } from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";
import useFirebase from "../hooks/useFirebase/useFirebase";


const Registration = () => {
  const {error,  RegisterWithEmail, setEmail, setPassword,setName,user } =
    useFirebase();
  const handleSubmit = (e) => {
    e.preventDefault();
  };
   const handleEmail = (e) => {
     setEmail(e.target.value);
   };
   const handlePassword = (e) => {
     setPassword(e.target.value);
   };
  const handleName = (e) => {
     
     setName(e.target.value);
   };
  return (
    <Container>
      <div className="registrationFormMainDiv">
        <div className="registrationFormDiv">
          <h2 className="registrationForm__title">registration Form</h2>
          <form onSubmit={handleSubmit} className="registrationForm">
            <Input
              onBlur={handleName}
              isFloatingLabelInput={true}
              label="Enter your username"
              name="username"
              value=""
              type="text"
              placeholder="Enter your username"
              required
            />
            <Input
              onBlur={handleEmail}
              isFloatingLabelInput={true}
              label="Enter your email"
              name="email"
              value=""
              type="email"
              placeholder="Enter your email"
              required
            />
            <Input
              onBlur={handlePassword}
              isFloatingLabelInput={true}
              label="Enter your password"
              name="password"
              value=""
              type="password"
              placeholder="Enter your password"
              required
            />
            <small className="m-2">{error}</small>
            <div className="mb-3">
              <Button
                onClick={RegisterWithEmail}
                btnClass="btn-primary fs-5 w-100"
                name="Registration"
                type="submit"
              />
            </div>
            {user.email && <Redirect to="/"></Redirect>}
            <div className="text-center">
              <p>
                Already Registered? <Link to="/loginform">Login</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default Registration;