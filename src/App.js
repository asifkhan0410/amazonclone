import React , {useEffect} from 'react';
import './App.css';
import Header from './Header.js';
import Home from './Home.js';
import { BrowserRouter as Router,Switch, Route} from "react-router-dom";
import Checkout from './Checkout.js';
import Login from './Login';
import {auth} from "./firebase"
import { useStateValue } from './StateProvider';
import Payment from './Payment';
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";
import Orders from './Orders';

const promise = loadStripe('pk_test_51HQ9q1KqRiPFfZm76x7pplJfFKeLm9TNkWX1t9MrSeIqpQC0ZXtPvGpDJUSmFwt99Jv9lzzvQbkpKCpNPB6F4nU500nYoerO5o');

function App() {
  const [{},dispatch] = useStateValue();

  useEffect(()=>{
    auth.onAuthStateChanged((authUser)=>{
      if(authUser){

        dispatch({
          type: 'SET_USER',
          user:authUser
        });

      }else{
        dispatch({
          type: 'SET_USER',
          user:null
        });
      }
    }) ; 

  },[]);
  return (
    <Router>
    <div className="app">
    <Switch>
    <Route path="/orders">         
    <Header/>
          <Orders/>
        </Route>
      <Route path="/login">         
          <Login/>
        </Route>
        <Route path="/checkout">
          <Header/>
          <Checkout/>
        </Route>
        <Route path="/payment">
          <Header/>
          <Elements stripe={promise} >
            <Payment />
          </Elements>
        </Route>
        <Route path="/">
          <Header/>
          <Home />
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
