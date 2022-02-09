import './App.css';
import Btech from './Component/Btech';
import Politechnic from './Component/Politechnic';
import BCA from './Component/BCA';
import ITI from './Component/ITI';
import MBBS from './Component/MBBS';
import BHMS from './Component/BHMS';
import BDS from './Component/BDS';
import BAMS from './Component/BAMS';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Component/Home';
import About from './Component/About';
import Login from './Component/Login';
import Quary from './Component/Quary';



function App() {
  return (
    <>
  
    {/* <Navbar/> */}
    {/* <About/> */}
       <Router>
        <Switch>
           {/* <Route path="/About">
           <About/>
            </Route>  */}
            <Route path="/Quary">
            <Quary/>
            </Route>
             <Route path="/Login">
            <Login/>
            </Route> 
            <Route path="/BHMS">
            <BHMS/>
            </Route>
            <Route path="/BAMS">
            <BAMS/>
            </Route>
            <Route path="/BDS">
            <BDS/>
            </Route>
            <Route path="/MBBS">
            <MBBS/>
            </Route>
            <Route path="/ITI">
            <ITI/>
            </Route>
            <Route path="/Btech">
            <Btech/>
            </Route>
            <Route path="/BCA">
            <BCA/>
            </Route>
            <Route path="/Politechnic">
            <Politechnic/>
            </Route>
           <Route path="/Btech">
            <Btech/>
            </Route>
           <Route path="/About">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router> 
     
    </>
  );
}

export default App;
