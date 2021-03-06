
import './App.css';
import Header from './Header';
import Home from "./Home";
import {BrowserRouter as Router, Switch,Route} from "react-router-dom";
import Checkout from './Checkout';
import Login from './Login';
import { useEffect } from 'react';
import { useStateValue } from './StateProvider';
import { auth } from "./firebase";
import Payment from './Payment';
function App() {
const[{},dispatch] = useStateValue();
useEffect(()=>{
//will only run once when the app loads unless specified in the array
auth.onAuthStateChanged(authUser =>{
  console.log("The user is",authUser);

  if(authUser){
    //the user was logged in

    dispatch({
      type:'SET_USER',
      user:authUser
    })

  }else{
    //the user was logged out
    dispatch({
      type:'SET_USER',
      user:null
    })

  }
})
},[])

  return (
    <div className="App">
    <Router>
    
      <Switch>
        <Route path ="/login">
          <Login/>
        </Route>
       
        <Route path = "/checkout" >
        <Header/>
        <Checkout/>
         
        </Route>
        <Route path ="/payment">
        <Header/>
        <Payment/>
        </Route>
        
        <Route path ="/" >
        <Header/>
        <Home/>
        </Route>
        </Switch>
      
      
      </Router> 
    
    </div>
  );
}

export default App;
