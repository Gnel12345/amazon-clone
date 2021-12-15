
import './App.css';
import Header from './Header';
import Home from "./Home";
import {BrowserRouter as Router, Routes,Route} from "react-router-dom";
import Checkout from './Checkout';

function App() {
  return (
    <div className="App">
    <Router>
    <Header/>
      <Routes>
        <Route path ="/" element={<Home/>}>
        
        </Route>
        <Route path = "/checkout" element={<Checkout/>}>
       
         
        </Route>
      </Routes>
      
      
      </Router> 
    
    </div>
  );
}

export default App;
