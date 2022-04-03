import react, { useState } from "react";
import { Link, useHistory } from 'react-router-dom';
import { NavLink } from "react-router-dom";
// import OTPBox from './OTPBox';
import "./SignUp.css";
// import Login from './Login';
// import { Button } from "bootstrap";

const bg = {
  textAlign: 'center',
  fontWeight: '900',
  margin: '31px 0',
  backgroundColor: 'aquamarine',
  borderRadius: '7px',
  margin: '15px 36px',
  padding: '3px',
}

const sign = {
  margin: '30px 30px',
  color: 'blue',
}

const container = {
  backgroundColor: "white",
}

function SignUp() {

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const history = useHistory();

  async function Registration() {
    let item = { name, password, email,number }
    let result = await fetch("http://localhost:3000/api/register%20", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(item)
    })
    result = await result.json();
    console.log("result", result);
    localStorage.setItem("user-info", JSON.stringify(result));
    history.push("/About")

  }

  return (
    <>
      {/* <!-- Modal --> */}
      <div class="modal fade" id="darkModalForm" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
        aria-hidden="true">
        <div class="modal-dialog form-dark" role="document">
          {/* <!--Content--> */}
          <div class="modal-content card card-image">
            <div class="text-white rgba-stylish-strong py-5 px-5 z-depth-4">
              {/* <!--Header--> */}
              <div class="modal-header text-center pb-4">
                <h3 class="modal-title w-100 white-text font-weight-bold" id="myModalLabel"><strong>SIGN</strong> <a
                  class="green-text font-weight-bold"><strong> UP</strong></a></h3>
                <button type="button" class="close white-text" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              {/* <!--Body--> */}
              <div class="modal-body">
                {/* <!--Body--> */}
                <form>
                  {/* <a href={logo} className="img">
              <img src={logo} alt="" width="200" height="55" /></a> */}

                  {/* <h2 className="h2" style={bg}>Login</h2> */}
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
                  <div class="mb-3">
                    <label for="phone" class="form-label">Phone No.</label>
                    <input type="tel" value={number} onChange={(e) => setNumber(e.target.value)} class="form-control" id="phone" pattern="[0-9]{5}[0-9]{5}}" required />
                  </div>
                  {/* <div class="mb-3 form-check">
              <input type="checkbox" class="form-check-input" id="exampleCheck1" required />
              <label class="form-check-label" for="exampleCheck1">Check me out</label>
            </div> */}
                  {/* <button type="submit" class="btn btn-primary">Submit</button> */}
                  <button className="btn btn-warning p-3  mb-2 "> <NavLink to="/Login" className="nav__item-link">SignUp</NavLink></button>
                  <br />
                  {/* <button className="btn btn-warning p-3 " onclick="document.getElementById('id01').style.display='block'">Use Phone number for login</button> */}

                </form>
                {/* <!--Grid column--> */}

              </div>
              {/* <!--Grid row--> */}

            </div>
          </div>
        </div>
        {/* <!--/.Content--> */}
      </div>

      {/* <!-- Modal --> */}
{/* <OTPBox /> */}
      <div class="text-center">
        <button href="" class="btn btn-warning mb-2" style={sign} data-toggle="modal" data-target="#darkModalForm">SignUp</button>
      </div>
    </>
  );
}


export default SignUp;