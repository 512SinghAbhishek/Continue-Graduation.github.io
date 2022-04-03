import react, { useState } from "react";
import { useHistory } from 'react-router-dom';
import { NavLink } from "react-router-dom";
import "./Style.css";
import "./Home.css";
// import './libraries.css';
// import logo from './logo/abhishek.jpg';
import Navbar from './Navbar';
import Footer from "./Footer";
import SignUp from "./Signup";
// import logo from './logo/logo1.png'


const bg = {
  textAlign: 'center',
  fontWeight: '900',
  margin: '31px 0',
  backgroundColor: 'aquamarine',
  borderRadius: '7px',
  margin: '15px 36px',
  padding: '3px',
}

const container = {
  backgroundColor: "white",
}

function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const history = useHistory();

  async function register() {
    let item = { name, password, email }
    let result = await fetch("http://localhost:3000/api/Login", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(item)
    })
    result = await result.JSON();
    console.log("result", result);
    localStorage.setItem("user-info", JSON.stringify(result));
    history.push("/About")

  }

  return (
    <>
      <Navbar />
      <div className="container" style={container}>
        <div className="row">
          <div className="col-md-6">
            <img src="https://source.unsplash.com/530x670/?Graduate,Collaege" className="img-fluid" href="" />
          </div>
          <div className="col-md-6">
            <form>
              {/* <a href={logo} className="img">
              <img src={logo} alt="" width="200" height="55" /></a> */}

              <h2 className="h2" style={bg}>Login</h2>
              {/* <h4 className="help"> Help</h4> */}
              {/* <h6 className="h6">create your profile an Qouse as a volenteer & connect with chalengmakers around the world!</h6>
            <h1 className="h1">login/SignUp Details</h1>
            <h6 className="hh6">Please Enter valid Email address</h6> */}
              <div class="mb-3">
                <label for="exampleInputName" class="form-label" >Name</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} class="form-control" id="exampleInput" required />
                <br />
                <label for="exampleInputEmail1" class="form-label" >Email address</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} class="form-control" id="exampleInputPassword1" required />
              </div>
              {/* <div class="mb-3 form-check">
              <input type="checkbox" class="form-check-input" id="exampleCheck1" required />
              <label class="form-check-label" for="exampleCheck1">Check me out</label>
            </div> */}
              {/* <button type="submit" class="btn btn-primary">Submit</button> */}
              <button className="btn btn-warning p-3  mb-2 "> <NavLink  to="/Home" className="nav__item-link">Login</NavLink></button>
              <br />
              
              {/* <button className="btn btn-warning p-3 " onclick="document.getElementById('id01').style.display='block'">Use Phone number for login</button> */}

            </form>
            <SignUp />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Login;