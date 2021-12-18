import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/Home/Home';
import Explore from './components/Explore/Explore';
import NotFound from './components/NotFound/NotFound';
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import Purchase from './components/Purchase/Purchase';
import Login from './components/Login/Login';
import AuthProvider from './components/Contexts/AuthProvider';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import Dashboard from './components/Dashboard/Dashboard';
import Registration from './components/Registration/Registration';

function App() {
  return (
    <div className="App">
    <AuthProvider>
    <Router>
    {/* <Navbar></Navbar>
    <Header></Header> */}
      <Switch>
        <Route exact path='/'>
        <Home></Home>
        </Route>
        <Route path="/home">
        <Home></Home>
        </Route>
        <Route path="/registration">
          <Registration></Registration>
        </Route>
        <Route path="/loginform">
        <Login></Login>
        </Route>
        <Route path='/explore'>
        <Explore></Explore>
        </Route>
        <Route path="/dashboard">
         <Dashboard></Dashboard>
        </Route>
        {/* <Route path="/myorder">
          <MyOrder></MyOrder>
        </Route>
        <Route path="/pay">
          <Pay></Pay>
        </Route>
        <Route path="/review">
         <Review></Review>
        </Route> */}
        <PrivateRoute path="/purchase/:productId">
          <Purchase></Purchase>
        </PrivateRoute>
        <PrivateRoute path="/contact">
          <Contact></Contact>
        </PrivateRoute>
        <PrivateRoute path="/about">
         <About></About>
        </PrivateRoute>
        <Route path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>
      {/* <Footer></Footer> */}
    </Router>
    </AuthProvider>
    </div>
  );
}

export default App;




