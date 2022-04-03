// import { useState } from 'react';
// import{Link, useHistory} from 'react-router-dom';

// export default function Form(){

// // // States for registration
// // const [name, setName] = useState('');
// // const [email, setEmail] = useState('');
// // const [password, setPassword] = useState('');

// // // States for checking the errors
// // const [submitted, setSubmitted] = useState(false);
// // const [error, setError] = useState(false);

// // // Handling the name change
// // const handleName = (e) => {
// // 	setName(e.target.value);
// // 	setSubmitted(false);
// // };

// // // Handling the email change
// // const handleEmail = (e) => {
// // 	setEmail(e.target.value);
// // 	setSubmitted(false);
// // };

// // // Handling the password change
// // const handlePassword = (e) => {
// // 	setPassword(e.target.value);
// // 	setSubmitted(false);
// // };

// // // Handling the form submission
// // const handleSubmit = (e) => {
// // 	e.preventDefault();
// // 	if (name === '' || email === '' || password === '') {
// // 	setError(true);
// // 	} else {
// // 	setSubmitted(true);
// // 	setError(false);
// // 	}
// // };

// // // Showing success message
// // const successMessage = () => {
// // 	return (
// // 	<div
// // 		className="success"
// // 		style={{
// // 		display: submitted ? '' : 'none',
// // 		}}>
// // 		<h1>User {name} successfully registered!!</h1>
// // 	</div>
// // 	);
// // };

// // // Showing error message if error is true
// // const errorMessage = () => {
// // 	return (
// // 	<div
// // 		className="error"
// // 		style={{
// // 		display: error ? '' : 'none',
// // 		}}>
// // 		<h1>Please enter all the fields</h1>
// // 	</div>
// // 	);
// // };

// // return (
// // 	<div className="form">
// // 	<div>
// // 		<h1>User Registration</h1>
// // 	</div>

// // 	{/* Calling to the methods */}
// // 	<div className="messages">
// // 		{errorMessage()}
// // 		{successMessage()}
// // 	</div>

// // 	<form>
// // 		{/* Labels and inputs for form data */}
// // 		<label className="label">Name</label>
// // 		<input onChange={handleName} className="input"
// // 		value={name} type="text" />

// // 		<label className="label">Email</label>
// // 		<input onChange={handleEmail} className="input"
// // 		value={email} type="email" />

// // 		<label className="label">Password</label>
// // 		<input onChange={handlePassword} className="input"
// // 		value={password} type="password" />

// // 		<button onClick={handleSubmit} className="btn" type="submit">
// // 		Submit
// // 		</button>
// // 	</form>
// // 	</div>
// // );
// // }













// // import react,{useState} from "react";

// // import { NavLink } from "react-router-dom";
// // import "./SignUp.css";
// // import Login from './Login';

// // const bg={
// //     textAlign: 'center',
// //     fontWeight: '900',
// //     margin: '31px 0',
// //     backgroundColor: 'aquamarine',
// //     borderRadius: '7px',
// //     margin: '15px 36px',
// //     padding: '3px',
// //   }
  
// //   const container={
// //     backgroundColor:"white",
// //   }


//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
  
//   // States for checking the errors
//   const [submitted, setSubmitted] = useState(false);
//   const [error, setError] = useState(false);
  
//   // Handling the name change
//   const handleName = (e) => {
// 	  setName(e.target.value);
// 	  setSubmitted(false);
//   };
  
//   // Handling the email change
//   const handleEmail = (e) => {
// 	  setEmail(e.target.value);
// 	  setSubmitted(false);
//   };
  
//   // Handling the password change
//   const handlePassword = (e) => {
// 	  setPassword(e.target.value);
// 	  setSubmitted(false);
//   };
  
//   // Handling the form submission
//   const handleSubmit = (e) => {
// 	  e.preventDefault();
// 	  if (name === '' || email === '' || password === '') {
// 	  setError(true);
// 	  } else {
// 	  setSubmitted(true);
// 	  setError(false);
// 	  }
//   };
//   const successMessage = () => {
// 	return (
// 	<div
// 		className="success"
// 		style={{
// 		display: submitted ? '' : 'none',
// 		}}>
// 		<h1>User {name} successfully registered!!</h1>
// 	</div>
// 	);
// };

// // Showing error message if error is true
// const errorMessage = () => {
// 	return (
// 	<div
// 		className="error"
// 		style={{
// 		display: error ? '' : 'none',
// 		}}>
// 		<h1>Please enter all the fields</h1>
// 	</div>
// 	);
// };



//   function SignUp(){

//     const[name,setName]=useState("");
//     const[password,setPassword]=useState("");
//     const[email,setEmail]=useState("");
//     const history=useHistory();
  
//   async function Registration(){
//   let item={name,password,email}
//   let result=await fetch("http://localhost:3000/api/register%20",{
//     method:'POST',
//     headers:{
//       "Content-Type":"application/json",
//       "Accept":"application/json"
//     },
//     body:JSON.stringify(item)
//   })
//   result=await result.json();
//   console.log("result",result);
//   localStorage.setItem("user-info",JSON.stringify(result)); 
//   history.push("/About")
  
//   }

//   return(
//       <>
// {/* <!-- Modal --> */}
// <div class="modal fade" id="darkModalForm" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
//   aria-hidden="true">
//   <div class="modal-dialog form-dark" role="document">
//     {/* <!--Content--> */}
//     <div class="modal-content card card-image">
//       <div class="text-white rgba-stylish-strong py-5 px-5 z-depth-4">
//         {/* <!--Header--> */}
//         <div class="modal-header text-center pb-4">
//           <h3 class="modal-title w-100 white-text font-weight-bold" id="myModalLabel"><strong>SIGN</strong> <a
//               class="green-text font-weight-bold"><strong> UP</strong></a></h3>
//           <button type="button" class="close white-text" data-dismiss="modal" aria-label="Close">
//             <span aria-hidden="true">&times;</span>
//           </button>
//         </div>
//         {/* <!--Body--> */}
//         <div class="modal-body">
//           {/* <!--Body--> */}
//           <form>
//             {/* <a href={logo} className="img">
//               <img src={logo} alt="" width="200" height="55" /></a> */} 

//             {/* <h2 className="h2" style={bg}>Login</h2> */}
//             {/* <h4 className="help"> Help</h4> */}
//             {/* <h6 className="h6">create your profile an Qouse as a volenteer & connect with chalengmakers around the world!</h6>
//             <h1 className="h1">login/SignUp Details</h1>
//             <h6 className="hh6">Please Enter valid Email address</h6> */}
//             <div className="form">
// 	<div>
// 		<h1>User Registration</h1>
// 	</div>

// 	{/* Calling to the methods */}
// 	<div className="messages">
// 		{errorMessage()}
// 		{successMessage()}
// 	</div>

// 	<form>
// 		{/* Labels and inputs for form data */}
// 		<label className="label">Name</label>
// 		<input onChange={handleName} className="input"
// 		value={name} type="text" />

// 		<label className="label">Email</label>
// 		<input onChange={handleEmail} className="input"
// 		value={email} type="email" />

// 		<label className="label">Password</label>
// 		<input onChange={handlePassword} className="input"
// 		value={password} type="password" />

// 		<button onClick={handleSubmit} className="btn" type="submit">
// 		Submit
// 		</button>
// 	</form>
// 	</div>
//             {/* <div class="mb-3 form-check">
//               <input type="checkbox" class="form-check-input" id="exampleCheck1" required />
//               <label class="form-check-label" for="exampleCheck1">Check me out</label>
//             </div> */}
//             {/* <button type="submit" class="btn btn-primary">Submit</button> */}
//             {/* <button className="btn btn-warning p-3  mb-2 "> <Link onClick={Login} className="nav__item-link"></Link>SignUp</button>
//             <br /> */}
//             {/* <button className="btn btn-warning p-3 " onclick="document.getElementById('id01').style.display='block'">Use Phone number for login</button> */}

//           </form>
//             {/* <!--Grid column--> */}

//           </div>
//           {/* <!--Grid row--> */}

//         </div>
//       </div>
//     </div>
//     {/* <!--/.Content--> */}
//   </div>

// {/* <!-- Modal --> */}

// <div class="text-center">
//   <a href="" class="btn btn-default btn-rounded" data-toggle="modal" data-target="#darkModalForm"> Read More About Us</a>
// </div>
// </>
//   );
// }
// }

