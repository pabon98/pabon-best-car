import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router';
import { Link } from 'react-router-dom';
import AddCar from '../AddCar/AddCar';
import useFirebase from '../hooks/useFirebase/useFirebase';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageOrders from '../ManageOrders/ManageOrders';
import ManageProducts from '../ManageProducts/ManageProducts';
import MyOrders from '../MyOrders/MyOrders';
import Navbar from '../Navbar/Navbar';
import Pay from '../Pay/Pay';
import Review from '../Review/Review';
import './Dashboard.css'

const Dashboard = () => {
  const { user } = useFirebase();
  const [isAdmin, setIsAdmin] = useState(false);
  useEffect(() => {
    fetch(`https://murmuring-castle-14767.herokuapp.com/checkAdmin/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        if (data[0]?.role === "admin") {
          setIsAdmin(true);
        } else {
          setIsAdmin(false);
        }
      });
  }, [user?.email]);
  console.log(isAdmin);
    return (
       <div>
           <Navbar></Navbar>
            <div class="container-fluid text-center">
      <div class="row content">
        <div class="col-sm-2 sidenav">
          <h3>DASHBOARD</h3>
          {/* <Link to="/home">
          <button className="btn btn-outline-primary">Home</button>
          </Link>
          <br /> <br />
          <Link to="/dashboard/pay">
            <button className="btn btn-outline-primary">Payment</button>
          </Link>
          <br /> <br />
          <Link to="/dashboard/review">
            <button className="btn btn-outline-primary">Review</button>
          </Link>
          <br /> <br />
          <Link to="/dashboard/myOrders">
            <button className="btn btn-outline-primary">My Orders</button>
          </Link> */}
          {
            isAdmin?
            <div>
              <Link to="/dashboard/makeAdmin">
            <button className="btn btn-outline-danger">Make Admin</button>
          </Link> 
          <br /><br />
          <Link to="/dashboard/addCar">
            <button className="btn btn-outline-danger">Add Car</button>
          </Link>
          <br /><br />
          <Link to="/dashboard/manageOrders">
            <button className="btn btn-outline-danger">Manage Orders</button>
          </Link>
          <br /><br />
          <Link to="/dashboard/manageProducts">
            <button className="btn btn-outline-danger">Manage Products</button>
          </Link>
            </div>:
            <div>
             <Link to="/home">
          <button className="btn btn-outline-primary">Home</button>
          </Link>
          <br /> <br />
          <Link to="/dashboard/pay">
            <button className="btn btn-outline-primary">Payment</button>
          </Link>
          <br /> <br />
          <Link to="/dashboard/review">
            <button className="btn btn-outline-primary">Review</button>
          </Link>
          <br /> <br />
          <Link to="/dashboard/myOrders">
            <button className="btn btn-outline-primary">My Orders</button>
          </Link>
            </div>
          }
         {/* { isAdmin && (<Link to="/dashboard/makeAdmin">
            <button className="btn btn-outline-danger">Make Admin</button>
          </Link>)}
          <br /><br />
        { isAdmin &&  (<Link to="/dashboard/addCar">
            <button className="btn btn-outline-danger">Add Car</button>
          </Link>)}
          <br /><br />
         { isAdmin && (<Link to="/dashboard/manageOrders">
            <button className="btn btn-outline-danger">Manage Orders</button>
          </Link>)}
          <br /><br />
         { isAdmin && (<Link to="/dashboard/manageProducts">
            <button className="btn btn-outline-danger">Manage Products</button>
          </Link>)} */}
          
        </div>
        <div class="col-sm-10 text-left">
          <Switch>
            <Route exact path="/dashboard/pay">
              <Pay></Pay>
            </Route>
            <Route exact path="/dashboard/review">
              <Review></Review>
            </Route>
            <Route exact path="/dashboard/myorders">
            <MyOrders></MyOrders>
            </Route>
            <Route exact path="/dashboard/addCar">
            <AddCar></AddCar>
            </Route>
            <Route exact path="/dashboard/manageOrders">
            <ManageOrders></ManageOrders>
            </Route>
            <Route exact path="/dashboard/manageProducts">
            <ManageProducts></ManageProducts>
            </Route>
            <Route exact path="/dashboard/makeAdmin">
            <MakeAdmin></MakeAdmin>
            </Route>
          </Switch>
        </div>
      </div>
    </div>
       </div>

    );
};

export default Dashboard;
